export default {
    type: 'object',
    name: 'linksSection',
    title: 'Links',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titel',
      },
      {
        name: 'imageStyle',
        type: 'boolean',
        title: 'Image/Text Style',
        description: 'If off: text only links section, if on: title + hero tiles',
        initialValue: false,
      },
      {
        name: 'links',
        type: 'array',
        of: [
            {type: 'internalLink'}
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
      prepare({title}) {
        return {
          title: `${title}`,
          subtitle: 'Links section',
        }
      },
    },
  }
  