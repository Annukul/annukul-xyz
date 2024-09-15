import { json } from "@remix-run/node";
import { getPosts } from "~/.server/posts";

export const loader = async () => {
  const posts = await getPosts();
  return json(posts.filter((post) => post.frontmatter.featured));
};

export default function Index() {
  return <></>;
}
