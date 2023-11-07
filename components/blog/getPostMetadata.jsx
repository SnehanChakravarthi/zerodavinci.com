import fs from 'fs';
import matter from 'gray-matter';

const getPostMetadata = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      category: matterResult.data.category,
      imageUrl: matterResult.data.imageUrl,
      author: matterResult.data.author,
      authorImageUrl: matterResult.data.authorImageUrl,
      readingTime: matterResult.data.readingTime,
      featured: matterResult.data.featured,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostMetadata;

// import { compileMDX } from 'next-mdx-remote/rsc';

// export async function getPostByName(fileName) {
//   const res = await fetch(
//     `https://raw.githubusercontent.com/snehanchakravarthi/zerodavinci-blog/main/${fileName}`,
//     {
//       headers: {
//         Accept: 'application/vnd.github.v3+json',
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         'X-GitHub-Api-Version': '3',
//       },
//     }
//   );
//   const rawMDX = await res.text();

//   if (rawMDX === '404: Not Found') return undefined;

//   const { frontmatter, content } = await compileMDX({ source: rawMDX });

//   const id = fileName.replace(/\.mdx$/, '');

//   const blogPostObj = {
//     meta: {
//       id,
//       title: frontmatter.title,
//       date: frontmatter.date,
//       subtitle: frontmatter.subtitle,
//       category: frontmatter.category,
//       imageUrl: frontmatter.imageUrl,
//       alt: frontmatter.alt,
//       author: frontmatter.author,
//       authorImageUrl: frontmatter.authorImageUrl,
//       readingTime: frontmatter.readingTime,
//       featured: frontmatter.featured,
//     },
//     content,
//   };
// }

// export async function getPostMeta() {
//   const res = await fetch(
//     'https://api.github.com/repos/snehanchakravarthi/zerodavinci-blog/git/trees/main?recursive=1',
//     {
//       headers: {
//         Accept: 'application/vnd.github.v3+json',
//         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         'X-GitHub-Api-Version': '3',
//       },
//     }
//   );

//   const repoFileTree = await res.json();

//   const filesArray = repoFileTree.tree
//     .map((obj) => obj.path)
//     .filter((path) => path.endsWith('.mdx'));

//   const posts = [];

//   for (const file of filesArray) {
//     const post = await getPostByName(file);
//     if (post) {
//       const { meta } = post;
//       posts.push(meta);
//     }
//   }
//   return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
// }
