export default {
  type: 'object',
  name: 'heroSection',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle',
    },
    {
      name: 'backgroundImage',
      type: 'figure',
      title: 'Background image',
      options: {
        hotspot: true,
      },
    },
    
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Hero section',
        media,
      }
    },
  },
}
