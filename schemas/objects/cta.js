export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  validation: (Rule) =>
    Rule.custom((fields = {}) => !fields.route || !fields.link || 'Only one link type is allowed'),
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
      title: 'Internal link',
      name: 'internalLink',
      type: 'internalLink',
      fieldset: 'link',
    },
    {
      title: 'External link',
      name: 'externalLink',
      type: 'link',
      fieldset: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      internalLink: 'internalLink.to.path',
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
