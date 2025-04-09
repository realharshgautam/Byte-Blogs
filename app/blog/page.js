import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Generate random date within past 90 days
const generateRandomPastDate = () => {
  const now = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 90);
  now.setDate(now.getDate() - randomDaysAgo);
  return now.toISOString();
};

// Reading blog content from the `content` directory
const contentDir = path.join(process.cwd(), "content");
const dirContent = fs.readdirSync(contentDir, "utf-8");

const blogs = dirContent.map((file) => {
  const filePath = path.join(contentDir, file);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  const date = data.date || generateRandomPastDate();

  return {
    ...data,
    date,
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Optional: sort by latest

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
            <div className="relative w-full h-64">
              <Image
                src={blog.image || "/fallback.jpg"}
                alt={blog.title || "Blog Image"}
                layout="fill"
                objectFit="cover"
                className="rounded-t"
                priority={index === 0}
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4 text-gray-500 dark:text-gray-300">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
