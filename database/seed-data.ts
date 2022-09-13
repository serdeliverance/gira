interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string
    status: string
    createdAt: number
}

export const seedData: SeedData = {
    entries: [
        {   
            description: 'Pending: something 1',
            status: 'pending',
            createdAt: Date.now()
        },
        {   
            description: 'In-progress: something 2',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
        {
            description: 'Finished: something 3',
            status: 'pending',
            createdAt: Date.now() - 200000
        }
    ]
}