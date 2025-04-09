import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import readingTime from "reading-time"
import OnThisPage from "@/components/onthispage"

export default async function Page({ params }) {
    const filepath = `content/${params.slug}.md`

    if (!fs.existsSync(filepath)) {
        notFound()
        return
    }

    const fileContent = fs.readFileSync(filepath, "utf-8")
    const { content, data } = matter(fileContent)

    // Fallback to file modification date if date is not provided in frontmatter
    const fileStats = fs.statSync(filepath)
    const fallbackDate = fileStats.mtime.toISOString()
    const blogDate = data.date || fallbackDate

    // Get reading time
    const stats = readingTime(content)

    // Markdown to HTML conversion with plugins
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: data.title || "Blog Post" })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3000,
                }),
            ],
        })

    const htmlContent = (await processor.process(content)).toString()

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
                &quot;{data.description}&quot;
            </p>

            <div className="text-sm text-gray-500 mb-4 italic flex gap-4">
                <span>By {data.author || "Unknown"}</span>
                <span>
                    {new Date(blogDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    })}
                </span>
                <span>{stats.text}</span>
            </div>

            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert"
            ></div>

            <OnThisPage htmlContent={htmlContent} />
        </div>
    )
}
