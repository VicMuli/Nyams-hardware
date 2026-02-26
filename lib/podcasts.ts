import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const podcastDir = path.join(process.cwd(), 'content', 'podcasts');

export interface Podcast {
    slug: string;
    title: string;
    date: string;
    description: string;
    audioSrc: string;
    thumbnail?: string;
}

export function getPodcastSlugs(): string[] {
    if (!fs.existsSync(podcastDir)) {
        return [];
    }
    return fs.readdirSync(podcastDir).filter((file) => file.endsWith('.md'));
}

export function getPodcastBySlug(slug: string): Podcast {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(podcastDir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title || 'Untitled Episode',
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        description: data.description || '',
        audioSrc: data.audioSrc || '',
        thumbnail: data.thumbnail || undefined,
    };
}

export function getAllPodcasts(): Podcast[] {
    const slugs = getPodcastSlugs();
    return slugs
        .map((slug) => getPodcastBySlug(slug))
        .sort((a, b) => (a.date > b.date ? -1 : 1));
}
