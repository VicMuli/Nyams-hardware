import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'public', 'content', 'blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    thumbnail?: string;
    content: string;
}

export function getPostSlugs() {
    if (!fs.existsSync(contentDir)) {
        return [];
    }
    return fs.readdirSync(contentDir)
        .filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string): BlogPost {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(contentDir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title || 'Untitled',
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        thumbnail: data.thumbnail || null,
        content,
    };
}

export function getAllPosts(): BlogPost[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map(slug => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
