import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { getPosts, urlFor, type SanityPost } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mental health insights, wellness tips, and resources from Dr. Amber Bucks at Train Your Brain Wellness.",
};

export const revalidate = 3600; // Revalidate posts every hour

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  let posts: SanityPost[] = [];

  try {
    posts = await getPosts();
  } catch {
    posts = [];
  }

  return (
    <>
      <section className="pt-36 pb-20 bg-deep-green">
        <div className="container-narrow px-6 md:px-12">
          <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
            Insights & Wellness
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-light leading-tight">
            From the Practice
          </h1>
          <p className="font-body text-cream/70 text-lg max-w-xl mt-5 leading-relaxed">
            Reflections on mental health, wellness research, and the journey
            toward healing.
          </p>
        </div>
      </section>

      {/* Scrollable chronological list — newest first */}
      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-5">
                <BookOpen className="w-7 h-7 text-forest-green" />
              </div>
              <h2 className="font-display text-3xl text-deep-green mb-3">
                Coming Soon
              </h2>
              <p className="font-body text-warm-brown text-base max-w-md mx-auto leading-relaxed">
                Dr. Bucks is working on her first posts. Check back soon for
                insights on mental health, wellness, and the healing journey.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-cream rounded-2xl overflow-hidden border border-sage-green/10 hover:border-sage-green/40 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row"
                >
                  {/* Thumbnail */}
                  <div className="sm:w-64 aspect-video sm:aspect-square bg-sage-green/10 group-hover:bg-sage-green/15 transition-colors flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(400).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <BookOpen className="w-10 h-10 text-forest-green/30" />
                    )}
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-body text-xs text-warm-brown-light">
                        {formatDate(post.publishedAt)}
                      </span>
                      {post.estimatedReadingTime ? (
                        <>
                          <span className="text-warm-brown-light">·</span>
                          <span className="font-body text-xs text-warm-brown-light">
                            {post.estimatedReadingTime} min read
                          </span>
                        </>
                      ) : null}
                    </div>
                    <h2 className="font-display text-2xl text-deep-green group-hover:text-forest-green transition-colors leading-tight mb-3">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="font-body text-sm text-warm-brown leading-relaxed flex-1 mb-5">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-2 text-forest-green font-body text-sm font-medium group-hover:gap-3 transition-all mt-auto">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}