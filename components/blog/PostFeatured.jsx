import Link from 'next/link';

const PostFeatured = (props) => {
  return (
    <Link href={`blog/posts/${props.slug}`}>
      <div className="mb-8 flex flex-col overflow-hidden rounded-3xl bg-white lg:flex-row border border-black">
        {/* <div className="absolute text-black bg-white py-1 px-5 rounded-tl-3xl rounded-br-3xl border-2 border-black">
        Featured
      </div> */}
        {/* Picture */}
        <div className="">
          <img
            className="h-60 w-full rounded-l-md object-cover sm:h-80"
            src={props.imageUrl}
            alt=""
          />
        </div>
        {/* Title */}
        <div className="flex flex-1 flex-col justify-between p-2  sm:p-6 ">
          <div className="flex-1">
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-2 text-base tracking-wid text-gray-500">
              {props.subtitle}
            </p>
          </div>
          {/* Author */}
          <div className="mt-2 flex items-center ">
            <div className="flex-shrink-0">
              <span className="sr-only">{props.author}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={props.authorImageUrl}
                alt=""
              />
            </div>
            <div className="ml-3 ">
              <p className="text-sm font-medium text-gray-900">
                {props.author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={props.date}>{props.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{props.readingTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostFeatured;
