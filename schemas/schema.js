// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import link from './objects/link'
import internalLink from './objects/internalLink'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
import heroSection from './objects/heroSection'
import imageSection from './objects/imageSection'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'
import titleSection from './objects/titleSection'
import listingSection from './objects/listingSection'
import horizontalImageTextSection from './objects/horizontalImageTextSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    heroSection,
    imageSection,
    link,
    internalLink,
    mailchimp,
    page,
    portableText,
    simplePortableText,
    textSection,
    titleSection,
    listingSection,
    horizontalImageTextSection,
  ]),
})
