import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/blog/getPostMetadata';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import { useNavigation } from 'next/navigation';

// Assuming you have a way to construct the full URL, for example:
const constructFullUrl = (slug) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Ensure this env variable is set
  return `${baseUrl}/blog/posts/${slug}`;
};

export async function generateMetadata({ params }, parent) {
  // Extract the slug or id from the route params
  const slug = params.slug; // or params.id, depending on your routing setup

  // Read and parse the markdown file for the current post
  const postContent = getPostContent(slug);
  const { data: frontmatter } = postContent;
  const fullUrl = constructFullUrl(slug);

  console.log(frontmatter);

  // Use frontmatter to populate metadata
  return {
    title: frontmatter.title,
    description: frontmatter.description,

    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      title: frontmatter.title,
      description: frontmatter.description,
      siteName: frontmatter.title,
      image: frontmatter.imageUrl,
    },
    twitter: {
      site: '@zerodavinci_',
      title: frontmatter.title,
      description: frontmatter.description,
      image: frontmatter.imageUrl,
      creator: '@zerodavinci_',
    },
  };
}

export const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
});
const getPostContent = (slug) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <div className="flex flex-col w-full gap-8 lg:flex-row">
        <div className="flex flex-col items-start w-full bg-white border border-black rounded-3xl">
          <h1 className="w-full px-5 py-4 text-4xl font-bold text-black">
            {post.data.title}
          </h1>
          <Image
            className="object-cover w-full"
            src={post.data.imageUrl}
            alt={post.data.alt}
            width={500}
            height={500}
          />
          <div className="flex-row lg:flex">
            <div className="w-full">
              <div className="px-6">
                <div className="mb-10 text-center">
                  {/* <h1 className="text-2xl text-black">{post.data.title}</h1> */}
                  {/* <p className="mt-2 text-slate-400">{post.data.date}</p> */}
                </div>
                <article
                  // className={`${quicksand.className} prose prose-lg text-justify w-full`}
                  className="w-full tracking-wide prose text-justify prose-md"
                >
                  <Markdown>{post.content}</Markdown>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;

// const metaData = {
//   title: post.data.title,
//   description: post.data.description, // assuming you have a description field in your markdown
//   imageUrl: post.data.imageUrl,
//   alt: post.data.alt,
// };
{
  /* <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.alt} />
        <meta property="og:image" content={metaData.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@nzerodavinci_" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.imageUrl} />
      </Head> */
}
