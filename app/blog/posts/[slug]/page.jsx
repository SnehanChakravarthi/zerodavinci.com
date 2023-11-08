import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/blog/getPostMetadata';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import Head from 'next/head';

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

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const metaData = {
    title: post.data.title,
    description: post.data.subtitle, // assuming you have a description field in your markdown
    imageUrl: post.data.imageUrl,
    alt: post.data.alt,
  };

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.subtitle} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.alt} />
        <meta property="og:image" content={metaData.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@nzerodavinci_" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.subtitle} />
        <meta name="twitter:image" content={metaData.imageUrl} />
        {/* Add additional meta tags for Twitter Card, etc. */}
      </Head>
      <div className="w-full flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col items-start w-full border bg-white border-black rounded-3xl">
          <h1 className="text-4xl text-black px-5 py-4 font-bold w-full">
            {post.data.title}
          </h1>
          <Image
            className="object-cover w-full"
            src={post.data.imageUrl}
            alt=""
            width={500}
            height={500}
          />
          <div className="lg:flex flex-row">
            <div className="w-full">
              <div className="px-6">
                <div className="mb-10 text-center">
                  {/* <h1 className="text-2xl text-black">{post.data.title}</h1> */}
                  {/* <p className="text-slate-400 mt-2">{post.data.date}</p> */}
                </div>
                <article
                  // className={`${quicksand.className} prose prose-lg text-justify w-full`}
                  className="prose prose-md tracking-wide text-justify w-full"
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
