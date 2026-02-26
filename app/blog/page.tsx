import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export default function BlogListing() {
    const posts = getAllPosts();

    return (
        <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
            <h1 className="text-4xl font-bold text-secondary mb-12">Latest News & Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                        {post.thumbnail && (
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={post.thumbnail}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        )}
                        <div className="p-8 flex-1 flex flex-col">
                            <p className="text-sm text-gray-500 mb-3">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </p>
                            <h2 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                            <div className="mt-auto text-primary font-medium flex items-center gap-2">
                                Read Article
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <p className="text-gray-500 text-lg">No posts found. Add some markdown files to public/content/blog!</p>
                )}
            </div>
        </div>
    );
}
