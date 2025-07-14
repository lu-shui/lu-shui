import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    terms: defineCollection({
      type: 'data',
      source: 'terms/**.json',
      schema: z.object({
        name: z.string(),
        transcription: z.string(),
        translation: z.string(),
        definition: z.string().optional(),
        description: z.string().optional(),
        released: z.boolean().optional()
      })
    })
  }
})