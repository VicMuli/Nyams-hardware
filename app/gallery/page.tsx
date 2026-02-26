import { getAllGalleryItems } from '../../lib/gallery';

export const metadata = {
    title: 'Gallery | Nyams Hardware Store',
    description: 'Take a look inside Nyams Hardware — our showroom, products, and workspace.',
};

export default function GalleryPage() {
    const items = getAllGalleryItems();

    return (
        <div className="max-w-6xl mx-auto px-6 py-32 min-h-screen">
            {/* Header */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest">Photo Gallery</p>
                </div>
                <h1 className="text-4xl font-bold text-secondary mb-4">Inside Nyams Hardware</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                    Browse our showroom, product displays, and workspace — see the quality and variety we have in store for you.
                </p>
            </div>

            {/* Grid */}
            {items.length === 0 ? (
                <div className="text-center py-20 rounded-3xl bg-white shadow-sm">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-lg">
                        No photos yet. Add markdown files to{' '}
                        <code className="text-primary bg-accent px-2 py-0.5 rounded">content/gallery/</code>
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.slug}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="h-60 overflow-hidden bg-accent">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Caption */}
                            <div className="p-6">
                                <h2 className="font-bold text-secondary text-lg mb-1 leading-snug">{item.title}</h2>
                                {item.caption && (
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.caption}</p>
                                )}
                                <p className="text-xs text-gray-400 mt-3">
                                    {new Date(item.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
