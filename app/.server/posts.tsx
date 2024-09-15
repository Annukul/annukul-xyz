import { ServerBuild } from "@remix-run/node";

export type Frontmatter = {
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  featured: boolean;
};

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};

export const getPosts = async (): Promise<PostMeta[]> => {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/_blog+/blog.*.mdx",
    { eager: true }
  );

  console.log({ modules });

  const build = await import("virtual:remix/server-build");
  console.log({ build: build.routes });
  const posts = Object.entries(modules).map(([file, post]) => {
    let id = file.replace("../", "").replace(/\.mdx$/, "");
    let slug = build.routes["routes/_blog+/blog"].path;
    if (slug === undefined) throw new Error(`No route for ${id}`);
    // 8278903818
    return {
      slug,
      frontmatter: post.frontmatter,
    };
  });
  return sortBy(posts, (post) => post.frontmatter.published, "desc");
};

function sortBy<T>(
  arr: T[],
  key: (item: T) => any,
  dir: "asc" | "desc" = "asc"
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}

function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
