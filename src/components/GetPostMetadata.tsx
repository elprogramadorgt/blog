import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../interfaces/PostMedadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));


    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName :any) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);

        return {
            id: matterResult.data.id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            description: matterResult.data.description,
            author: matterResult.data.author,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
};

export default getPostMetadata;