export default {
  type: 'object',
  name: 'titleSection',
  title: 'Title (h2)',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        subtitle: 'Title section',
      }
    },
  },
}