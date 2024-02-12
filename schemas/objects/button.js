export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'External link',
      name: 'externalLink',
      type: 'link',
      fieldset: 'link',
    }
  ],
  preview: {
    select: {
      title: 'title',
      externalLink: 'externalLink.href',
    },
    prepare({title, internalLink, externalLink}) {
      const subtitle = internalLink ? internalLink : externalLink ? externalLink : 'Not set'
      return {
        title: `${title}`,
        subtitle: `${subtitle}`,
      }
    },
  },
}
