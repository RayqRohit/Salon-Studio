import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allBlogPosts, getBlogPostBySlug } from "@/data/blogData";
import BlogPostDetail from "@/components/BlogPostDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Hanssen",
    };
  }

  return {
    title: `${post.title} | Hanssen`,
    description: post.excerpt,
  };
}

async function BlogPostContent({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}

export default function BlogPostPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0e1011]" />}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}
