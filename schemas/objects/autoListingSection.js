export default {
    type: 'object',
    name: 'autoListingSection',
    title: 'Auto Listings',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titel',
      },
      {
        name: 'maxCount',
        type: 'number',
        title: 'Max. listings shown',
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
      prepare({title}) {
        return {
          title: `${title}`,
          subtitle: 'Auto Listing section',
        }
      },
    },
  }
  