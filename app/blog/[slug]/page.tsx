import { getPostBySlug, getPostSlugs } from '../../../lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ''),
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    const processedContent = await remark()
        .use(html)
        .process(post.content);
    const contentHtml = processedContent.toString();

    return (
        <article className="max-w-3xl mx-auto px-6 py-32 min-h-screen">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
            </Link>
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center text-gray-500 text-sm">
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </time>
                </div>
            </header>

            {post.thumbnail && (
                <div className="mb-12 rounded-3xl overflow-hidden shadow-md">
                    <img src={post.thumbnail} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>
            )}

            <div
                className="prose prose-lg prose-gray max-w-none prose-headings:text-secondary prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    );
}
