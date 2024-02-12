import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Campanyon',
  projectId: 'z1e26bae',
  dataset: process.env.SANITY_STUDIO_API_DATASET,

  plugins: [deskTool({
    structure: async (S, context) => {
      const FOLDERS = await context
        .getClient({apiVersion: '2023-01-16'})
        .fetch(`array::unique(*[_type == "page" && folder != null].folder)`)

      return S.list()
        .title('Content')
        .items([
          S.listItem()
            .title('All')
            .schemaType('page')
            .child(
              S.documentList()
                .title('All pages')
                .filter('_type == "page"')
          ),
          ...FOLDERS.map(folder =>
            S.listItem()
              .title(`${folder}`)
              .schemaType('page')
              .child(
                S.documentList()
                  .title(`Pages within ${folder}`)
                  .schemaType('page')
                  .filter(`folder == "${folder}" && _type == "page"`)
              )
          )
        ])
    },
  })
  , visionTool()],

  schema: {
    types: schemaTypes,
  },
})

