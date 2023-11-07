import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/blog/getPostMetadata';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';

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
  );
};

export default PostPage;