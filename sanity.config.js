import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Campanyon',
  projectId: 'z1e26bae',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
