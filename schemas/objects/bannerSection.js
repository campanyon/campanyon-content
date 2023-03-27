export default {
  type: 'object',
  name: 'bannerSection',
  title: 'Banner',
  fields: [
    {
      name: 'desktopImage',
      type: 'figure',
      title: 'Desktop image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobileImage',
      type: 'figure',
      title: 'Mobile image',
      options: {
        hotspot: true,
      },
    },
    
  ],
  preview: {
    select: {
      media: 'desktopImage',
    },
    prepare({media}) {
      return {
        title: 'Banner section',
        media,
      }
    },
  },
}
