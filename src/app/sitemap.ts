import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.kiaanai.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add other pages here when they are created as separate routes
        // {
        //   url: 'https://www.kiaanai.com/about',
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ]
}
