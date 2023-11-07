import React from 'react';
import getPostMetadata from '@/components/blog/getPostMetadata';
import SignUpForm from '@/components/root/signUpFormHome';
import OtherPosts from '@/components/blog/OtherPreview';

function postLayout({ children, currentSlug }) {
  // Get all post metadata
  const posts = getPostMetadata();

  // Filter out the current post
  const otherPosts = posts.filter((post) => post.slug !== currentSlug);

  // Create post previews for other posts
  const otherPostPreviews = otherPosts.map((post) => (
    <OtherPosts key={post.slug} {...post} />
  ));

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mt-20">
      <div className="w-full lg:w-2/3">{children}</div>
      <div className="lg:w-1/3 sticky top-32 h-48 flex flex-col gap-6">
        <div className="rounded-3xl bg-neutral-100 p-6 border border-black">
          <p className="mb-2 text-2xl font-bold">Sign up</p>
          <SignUpForm />
        </div>
        {/* Other posts */}
        {/* <p className="text-xl font-bold">More Stories</p>
        <div className="rounded-3xl border">{otherPostPreviews}</div> */}
      </div>
    </div>
  );
}

export default postLayout;
