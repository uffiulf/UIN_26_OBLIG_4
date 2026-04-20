import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "s63aoma5",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-20"
})

export default client