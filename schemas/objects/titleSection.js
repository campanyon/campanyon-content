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
    {
      name: 'level',
      type: 'number',
      description: 'Value between 1 and 8 for heading levels',
      title: 'Level (H1 - H8)',
      initialValue: 2,
      list: [1, 2, 3, 4, 5, 6, 7, 8]
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