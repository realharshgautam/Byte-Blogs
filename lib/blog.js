import fs from "fs";
import matter from "gray-matter";

// Utility to generate random date if missing
const generateRandomPastDate = () => {
  const now = new Date();
  const pastDate = new Date(now);
  const randomDaysAgo = Math.floor(Math.random() * 90);
  pastDate.setDate(now.getDate() - randomDaysAgo);
  return pastDate.toISOString();
};

export function getAllPosts() {
  const files = fs.readdirSync("content");

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(`content/${filename}`, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      ...data,
      content,
      slug,
      date: data.date || generateRandomPastDate(),
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const fileContent = fs.readFileSync(`content/${slug}.md`, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    ...data,
    content,
    slug,
    date: data.date || generateRandomPastDate(),
  };
}
