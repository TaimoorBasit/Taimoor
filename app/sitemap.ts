import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://taimoor.dev',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more routes if you have multiple pages like /blog, /projects, etc.
        // Since it's a single page portfolio mostly, the root is key.
    ];
}
