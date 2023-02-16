export default {
  type: 'object',
  name: 'videoSection',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'url',
      type: 'url',
      description: 'URL to youtube vide',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        subtitle: 'Video section',
      }
    },
  },
}