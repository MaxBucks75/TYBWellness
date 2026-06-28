"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Search, X } from "lucide-react";
import { urlFor, type SanityPost } from "@/lib/sanity";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogList({ posts }: { posts: SanityPost[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? posts.filter((p) =>
        p.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : posts;

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-brown-light pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full font-body text-sm text-warm-brown bg-cream border border-sage-green/20 rounded-full pl-11 pr-10 py-3 placeholder:text-warm-brown-light focus:outline-none focus:border-sage-green/50 transition-colors"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-brown-light hover:text-warm-brown transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-display text-2xl text-deep-green mb-2">No results</p>
          <p className="font-body text-warm-brown text-sm">
            No posts matched &ldquo;{query}&rdquo;. Try a different search.
          </p>
        </div>
      ) : (
        filtered.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group bg-cream rounded-2xl overflow-hidden border border-sage-green/10 hover:border-sage-green/40 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row"
          >
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
        ))
      )}
    </div>
  );
}
