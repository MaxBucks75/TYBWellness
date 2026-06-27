// Renders Sanity's Portable Text (rich text) blocks with consistent site styling.
// Used by both the blog post page and the Supplement of the Month section,
// so any formatting changes here apply everywhere automatically.

import Image from "next/image";
import { urlFor } from "@/lib/sanity";

type PortableTextChild = {
  text: string;
  marks?: string[];
};

type PortableTextBlock = {
  _type: string;
  _key: string;
  style?: string;
  listItem?: "bullet" | "number";
  level?: number;
  children?: PortableTextChild[];
  // Inline image fields (only present when _type === "image")
  alt?: string;
  caption?: string;
  aspectRatio?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  asset?: any;
};

// Maps a chosen aspect ratio to a Tailwind `aspect-*` class.
// "native" returns null so the image renders at its own intrinsic ratio instead.
const ASPECT_RATIO_CLASSES: Record<string, string | null> = {
  native: null,
  "1:1": "aspect-square",
  "2:3": "aspect-[2/3]",
  "1:2": "aspect-[1/2]",
  "3:2": "aspect-[3/2]",
  "2:1": "aspect-[2/1]",
  "16:9": "aspect-video",
};

function renderChildren(children: PortableTextChild[] = []) {
  return children.map((child, i) => {
    let content: React.ReactNode = child.text;
    if (child.marks?.includes("strong")) {
      content = <strong key={i}>{content}</strong>;
    }
    if (child.marks?.includes("em")) {
      content = <em key={i}>{content}</em>;
    }
    return <span key={i}>{content}</span>;
  });
}

function ImageBlock({ block }: { block: PortableTextBlock }) {
  const ratioKey = block.aspectRatio || "native";
  const aspectClass = ASPECT_RATIO_CLASSES[ratioKey];

  // Native: render with intrinsic width/height, no cropping, no fill
  if (!aspectClass) {
    const { width, height } = block.asset?.metadata?.dimensions || {};
    return (
      <figure className="my-8">
        <Image
          src={urlFor(block).width(1200).url()}
          alt={block.alt || ""}
          width={width || 1200}
          height={height || 800}
          className="w-full h-auto rounded-xl"
        />
        {block.caption && (
          <figcaption className="font-body text-xs text-warm-brown-light text-center mt-2">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Fixed ratio: crop to fit using `fill`
  return (
    <figure className="my-8">
      <div className={`relative w-full overflow-hidden rounded-xl ${aspectClass}`}>
        <Image
          src={urlFor(block).width(1200).url()}
          alt={block.alt || ""}
          fill
          className="object-cover"
        />
      </div>
      {block.caption && (
        <figcaption className="font-body text-xs text-warm-brown-light text-center mt-2">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function PortableTextRenderer({
  blocks,
}: {
  blocks: PortableTextBlock[];
}) {
  if (!blocks || blocks.length === 0) return null;

  const elements: React.ReactNode[] = [];
  let currentList: { type: "bullet" | "number"; items: React.ReactNode[] } | null = null;

  function flushList() {
    if (!currentList) return;
    if (currentList.type === "bullet") {
      elements.push(
        <ul
          key={`list-${elements.length}`}
          className="list-disc pl-5 mb-5 flex flex-col gap-1.5"
        >
          {currentList.items}
        </ul>
      );
    } else {
      elements.push(
        <ol
          key={`list-${elements.length}`}
          className="list-decimal pl-5 mb-5 flex flex-col gap-1.5"
        >
          {currentList.items}
        </ol>
      );
    }
    currentList = null;
  }

  blocks.forEach((block) => {
    // Inline image block
    if (block._type === "image") {
      flushList();
      elements.push(<ImageBlock key={block._key} block={block} />);
      return;
    }

    if (block._type !== "block") return;

    // Handle bullet/numbered list items
    if (block.listItem) {
      if (!currentList || currentList.type !== block.listItem) {
        flushList();
        currentList = { type: block.listItem, items: [] };
      }
      currentList.items.push(
        <li key={block._key} className="font-body text-warm-brown text-base leading-relaxed">
          {renderChildren(block.children)}
        </li>
      );
      return;
    }

    // Not a list item — flush any pending list before continuing
    flushList();

    switch (block.style) {
      case "h2":
        elements.push(
          <h2 key={block._key} className="font-display text-3xl text-deep-green mt-10 mb-4">
            {renderChildren(block.children)}
          </h2>
        );
        break;
      case "h3":
        elements.push(
          <h3 key={block._key} className="font-display text-2xl text-deep-green mt-8 mb-3">
            {renderChildren(block.children)}
          </h3>
        );
        break;
      case "h4":
        elements.push(
          <h4 key={block._key} className="font-display text-xl text-deep-green mt-6 mb-2">
            {renderChildren(block.children)}
          </h4>
        );
        break;
      case "blockquote":
        elements.push(
          <blockquote
            key={block._key}
            className="font-display italic text-xl text-forest-green border-l-2 border-sage-green pl-6 my-8"
          >
            {renderChildren(block.children)}
          </blockquote>
        );
        break;
      default:
        elements.push(
          <p key={block._key} className="font-body text-warm-brown text-base leading-relaxed mb-5">
            {renderChildren(block.children)}
          </p>
        );
    }
  });

  // Flush any trailing list at the end of the content
  flushList();

  return <>{elements}</>;
}