export default {
    type: 'object',
    name: 'imageText',
    title: 'Image with portable text',
    fields: [
      {
        name: 'image',
        type: 'figure',
        title: 'Image',
      },
      {
        name: 'text',
        type: 'simplePortableText',
        title: 'Text',
      },
    ],
    preview: {
      select: {
        media: 'image',
      },
      prepare({title, media}) {
        return {
          media,
        }
      },
    },
  }
  