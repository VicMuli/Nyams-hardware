import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const galleryDir = path.join(process.cwd(), 'content', 'gallery');

export interface GalleryItem {
    slug: string;
    title: string;
    date: string;
    image: string;
    caption?: string;
}

export function getGallerySlugs(): string[] {
    if (!fs.existsSync(galleryDir)) {
        return [];
    }
    return fs.readdirSync(galleryDir).filter((file) => file.endsWith('.md'));
}

export function getGalleryItemBySlug(slug: string): GalleryItem {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(galleryDir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title || 'Untitled',
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        image: data.image || '',
        caption: data.caption || undefined,
    };
}

export function getAllGalleryItems(): GalleryItem[] {
    const slugs = getGallerySlugs();
    return slugs
        .map((slug) => getGalleryItemBySlug(slug))
        .sort((a, b) => (a.date > b.date ? -1 : 1));
}
