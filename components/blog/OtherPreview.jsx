import Link from 'next/link';

const OtherPosts = (props) => {
  return (
    <Link href={`blog/posts/${props.slug}`}>
      <div className="flex flex-col overflow-hidden bg-white border border-black rounded-2xl mb-6">
        <div className="flex-shrink-0"></div>
        <div className="ml-2 flex flex-1 flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600"></p>
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-3 text-base text-gray-500">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OtherPosts;
