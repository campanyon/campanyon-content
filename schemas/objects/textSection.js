export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'enableSeeMore',
      type: 'boolean',
      title: 'Enable "see more" feature',
      description: 'Show first 3 rows of text / 60-70 words',
    },
    {
      name: 'readMoreText',
      type: 'string',
      title: 'Button text "Read More"',
    },
    {
      name: 'readLessText',
      type: 'string',
      title:'Button text "Read Less"',
    },
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
      initialValue: 4,
      validation: Rule => Rule.min(1).max(6),
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [1, 2, 3, 4, 5, 6]
      }
    },
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({text}) {
      return {
        title: `${toPlainText(text)}`,
        subtitle: 'Text section',
      }
    },
  },
}

function toPlainText(blocks = []) {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children,
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('')
    })
    // join the paragraphs leaving split by two linebreaks
    .join('\n\n')
}
