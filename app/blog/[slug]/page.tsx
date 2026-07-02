import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getPost, urlFor } from "@/lib/sanity";
import PortableTextRenderer from "@/components/sanity/PortableTextRenderer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <>
      <section className="pt-36 pb-16 bg-deep-green">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sage-green hover:text-cream font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-body text-xs text-cream/50">
              {formatDate(post.publishedAt)}
            </span>
            {post.estimatedReadingTime && (
              <>
                <span className="text-cream/30">·</span>
                <span className="font-body text-xs text-cream/50">
                  {post.estimatedReadingTime} min read
                </span>
              </>
            )}
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-cream font-light leading-tight">
            {post.title}
          </h1>
          <p className="font-body text-cream/50 text-sm mt-5">
            By Amber Bucks, MSN, APRN, PMHNP-BC
          </p>
        </div>
      </section>

      {/* Featured image */}
      <div className="bg-sage-green/10 aspect-[16/6] flex items-center justify-center overflow-hidden relative">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(1600).height(600).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <span className="font-body text-sm text-warm-brown-light">
            No featured image
          </span>
        )}
      </div>

      {/* Post body */}
      <article className="section-padding bg-cream-light">
        <div className="container-narrow px-6 md:px-12 max-w-3xl">
          {post.body ? (
            <PortableTextRenderer blocks={post.body} />
          ) : (
            <p className="font-body text-warm-brown text-base leading-relaxed">
              This post has no content yet.
            </p>
          )}

          {post.bibliography && post.bibliography.length > 0 && (
            <div className="mt-16 pt-10 border-t border-sage-green/20">
              <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-4">
                References
              </p>
              <ol className="flex flex-col gap-3">
                {post.bibliography.map((entry, i) => (
                  <li key={entry._key} className="flex gap-3">
                    <span className="font-body text-xs text-warm-brown-light mt-0.5 flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span className="font-body text-sm text-warm-brown leading-relaxed">
                      {entry.url ? (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-forest-green transition-colors"
                        >
                          {entry.citation}
                        </a>
                      ) : (
                        entry.citation
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-16 pt-10 border-t border-sage-green/20">
            <p className="font-body text-xs uppercase tracking-widest text-sage-green mb-2">
              Written by
            </p>
            <p className="font-display text-xl text-deep-green">
              Amber Bucks, MSN, APRN, PMHNP-BC
            </p>
            <p className="font-body text-sm text-warm-brown mt-1">
              Train Your Brain Wellness
            </p>
          </div>
        </div>
      </article>
    </>
  );
}