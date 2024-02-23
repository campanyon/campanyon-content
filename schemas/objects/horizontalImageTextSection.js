export default {
    type: 'object',
    name: 'horizontalImageTextSection',
    title: 'Image with text, horizontal aligned',
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
        validation: Rule => Rule.min(1).max(6),
        options: {
          layout: 'radio',
          direction: 'horizontal',
          list: [1, 2, 3, 4, 5, 6]
        }
      },
      {
        name: 'text',
        type: 'simplePortableText',
        title: 'Text',
      },
      {
        name: 'image',
        type: 'figure',
        title: 'Image',
      },
      {
        name: 'trailingImage',
        type: 'boolean',
        title: 'TrailingImage',
        description: 'If enabled the Image will be rendered trailing (right) and the text leading (left)',
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
      prepare({title, media}) {
        return {
          title: `${title}`,
          media,
        }
      },
    },
  }
