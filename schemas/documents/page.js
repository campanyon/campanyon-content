import {MasterDetailIcon} from '@sanity/icons'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: MasterDetailIcon,
  initialValue: {
    onhome: false,
    indexed: false
  },
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'indexed',
      type: 'boolean',
      title: 'Indexed',
      description: 'Off = no-index',
    },
    {
      name: 'language',
      type: 'string',
      title: 'Language',
    },
    {
      name: 'path',
      type: 'string',
      title: 'URL Path',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'folder',
      type: 'string',
      title: 'Folder',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [{type: 'heroSection'}, {type: 'titleSection'}, {type: 'textSection'}, {type: 'listingSection'}, {type: 'horizontalImageTextSection'}, {type: 'linksSection'}, {type: 'imageTextListSection'}, {type: 'videoSection'}, {type: 'bannerSection'}, {type: 'voucherSection'},{type:'fixedBannerSection'}],
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Title',
      description: 'Meta title',
      fieldset: 'metadata',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
    {
      name: 'onhome',
      type: 'boolean',
      title: 'On Home',
      fieldset: 'metadata',
    },
    {
      name: 'otherLanguages',
      type: 'array',
      title: 'Other languages',
      of: [{type: 'internalLink'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      path: 'path',
      language: 'language',
      media: 'openGraphImage',
    },
    prepare({title, path, language, media}) {
      return {
        title: title,
        subtitle: `${language + '/l/' + path}`,
        media: media
      }
    },
  },
}
