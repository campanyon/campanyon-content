export default {
  title: 'Simple Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          {
            title: 'Highlight',
            value: 'highlight',
            icon: () => 'H'
          }
        ],
        annotations: [{ type: 'link' }, { type: 'internalLink' }],
      },
    },
    {
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          options: {
            isHighlighted: true
          }
        }
      ]
    }
  ],
}
