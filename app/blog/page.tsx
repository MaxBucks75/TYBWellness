import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { getPosts, type SanityPost } from "@/lib/sanity";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mental health insights, wellness tips, and resources from Amber Bucks, PMHNP-BC at Train Your Brain Wellness.",
};

export const revalidate = 3600;

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
                Amber is working on her first posts. Check back soon for
                insights on mental health, wellness, and the healing journey.
              </p>
            </div>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>
      </section>
    </>
  );
}
