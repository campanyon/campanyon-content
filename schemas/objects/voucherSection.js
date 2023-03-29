export default {
  type: 'object',
  name: 'voucherSection',
  title: 'Voucher',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Voucher section',
      }
    },
  },
}
