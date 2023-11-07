import React from 'react';
import PostPreview from '@/components/blog/PostPreview';
import PostFeatured from '@/components/blog/PostFeatured';
import getPostMetadata from '@/components/blog/getPostMetadata';
import SignUpForm from '@/components/root/signUpFormHome';

function page() {
  const postMetadata = getPostMetadata();
  // Filter posts that are featured
  const featuredPosts = postMetadata.filter((post) => post.featured);

  // Filter posts that are not featured
  const nonFeaturedPosts = postMetadata.filter((post) => !post.featured);

  // Create featured post previews
  const featuredPostPreviews = featuredPosts.map((post) => (
    <PostFeatured key={post.slug} {...post} /> // New component for featured posts
  ));

  // Create non-featured post previews
  const postPreviews = nonFeaturedPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="w-full h-screen mt-10">
      {/* <p className="mb-2 text-2xl font-bold">Featured</p> */}
      {/* Featured posts */}
      {featuredPostPreviews}
      <div className="lg:flex">
        <div className="lg:w-2/3 w-full ">
          <div className="lg:mr-8 ">
            {/* <p className="mb-2 text-2xl font-bold">More Stories</p> */}
            <div className="grid w-full grid-cols-1 gap-5">
              {/* All posts */}
              {postPreviews}
              More Stories coming soon!
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <div className="border border-black w-full rounded-2xl bg-neutral-100 px-4 py-4 sticky top-24 ">
            <p className="mb-2 text-2xl font-bold ">Sign up</p>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
