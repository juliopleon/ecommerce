import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
    projectId: 'upfw0lo1',
    dataset: 'production',
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
    },
})