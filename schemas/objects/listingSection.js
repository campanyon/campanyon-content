export default {
    type: 'object',
    name: 'listingSection',
    title: 'Listings',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titel',
      },
      {
        name: 'showMore',
        type: 'cta',
        title: 'Show More CTA',
      },
      {
        name: 'listings',
        type: 'array',
        of: [
            {
                name: 'listingId',
                type: 'string',
                title: 'Listing ID',
            },
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
          subtitle: 'Listing section',
        }
      },
    },
  }
  