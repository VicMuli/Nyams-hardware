import { getAllPodcasts } from '../../lib/podcasts';

export const metadata = {
    title: 'Podcasts | Nyams Hardware Store',
    description: 'Listen to the Nyams Hardware podcast — tips, guides, and insights from hardware experts.',
};

export default function PodcastsPage() {
    const podcasts = getAllPodcasts();

    return (
        <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
            {/* Page Header */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V23h2v-2.06A9 9 0 0 0 21 12v-2h-2z" />
                        </svg>
                    </span>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest">Audio Series</p>
                </div>
                <h1 className="text-4xl font-bold text-secondary mb-4">The Nyams Podcast</h1>
                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                    Expert conversations on tools, construction tips, and hardware know-how — straight from the Nyams team.
                </p>
            </div>

            {/* Podcast Episodes */}
            {podcasts.length === 0 ? (
                <div className="text-center py-20 rounded-3xl bg-white shadow-sm">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V23h2v-2.06A9 9 0 0 0 21 12v-2h-2z" />
                    </svg>
                    <p className="text-gray-500 text-lg">No episodes yet. Add markdown files to <code className="text-primary bg-accent px-2 py-0.5 rounded">content/podcasts/</code></p>
                </div>
            ) : (
                <div className="flex flex-col gap-8">
                    {podcasts.map((episode, index) => (
                        <article
                            key={episode.slug}
                            className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="p-8">
                                {/* Episode Meta */}
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary font-bold text-sm flex-shrink-0">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <time className="text-sm text-gray-400 font-medium">
                                        {new Date(episode.date).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </time>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl font-bold text-secondary mb-3 leading-snug">
                                    {episode.title}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-500 text-base leading-relaxed mb-6">
                                    {episode.description}
                                </p>

                                {/* HTML5 Audio Player */}
                                {episode.audioSrc ? (
                                    <div className="mt-2">
                                        <audio
                                            controls
                                            preload="metadata"
                                            className="w-full rounded-xl"
                                            style={{ accentColor: '#A08666' }}
                                        >
                                            <source src={episode.audioSrc} type="audio/mpeg" />
                                            <source src={episode.audioSrc.replace('.mp3', '.ogg')} type="audio/ogg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 px-4 py-3 bg-accent rounded-xl text-sm text-gray-400">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Audio coming soon
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
