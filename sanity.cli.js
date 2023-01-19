import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'z1e26bae',
    dataset: process.env.SANITY_STUDIO_API_DATASET,
  }
})
