export default {
    type: 'object',
    name: 'horizontalImageTextSection',
    title: 'Image with text, horizontal aligned',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'text',
        type: 'simplePortableText',
        title: 'Text',
      },
      {
        name: 'image',
        type: 'figure',
        title: 'Image',
      },
      {
        name: 'trailingImage',
        type: 'boolean',
        title: 'TrailingImage',
        description: 'If enabled the Image will be rendered trailing (right) and the text leading (left)',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
      prepare({title, media}) {
        return {
          title: `${title}`,
          media,
        }
      },
    },
  }
  