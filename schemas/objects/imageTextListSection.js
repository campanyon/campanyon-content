export default {
    type: 'object',
    name: 'imageTextListSection',
    title: 'List Image with text cards',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'items',
        type: 'array',
        of: [
            {type: 'imageText'}
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
      prepare({title, media}) {
        return {
          title: `${title}`,
        }
      },
    },
  }
  