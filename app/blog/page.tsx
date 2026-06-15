import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mental health insights, wellness tips, and resources from Dr. Amber Bucks at Train Your Brain Wellness.",
};

export const revalidate = 3600; // Revalidate posts every hour

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  estimatedReadingTime?: number;
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  let posts: Post[] = [];

  try {
    posts = await getPosts();
  } catch {
    // Sanity not yet configured — show placeholder UI
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
            toward healing — written by Dr. Amber Bucks.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12">
          {posts.length === 0 ? (
            /* Empty state */
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
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className={`group bg-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Image placeholder */}
                  <div
                    className={`bg-sage-green/10 group-hover:bg-sage-green/15 transition-colors flex items-center justify-center ${
                      i === 0 ? "aspect-[16/6]" : "aspect-video"
                    }`}
                  >
                    <BookOpen className="w-10 h-10 text-forest-green/30" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-body text-xs text-warm-brown-light">
                        {formatDate(post.publishedAt)}
                      </span>
                      {post.estimatedReadingTime && (
                        <>
                          <span className="text-warm-brown-light">·</span>
                          <span className="font-body text-xs text-warm-brown-light">
                            {post.estimatedReadingTime} min read
                          </span>
                        </>
                      )}
                    </div>
                    <h2
                      className={`font-display text-deep-green group-hover:text-forest-green transition-colors leading-tight mb-3 ${
                        i === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                      }`}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="font-body text-sm text-warm-brown leading-relaxed flex-1 mb-5">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-2 text-forest-green font-body text-sm font-medium group-hover:gap-3 transition-all">
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