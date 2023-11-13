import Link from 'next/link';

const PostPreview = (props) => {
  return (
    <Link href={`blog/posts/${props.slug}`}>
      <div className="flex flex-col h-auto overflow-hidden bg-white border border-black sm:flex-row rounded-2xl">
        <div className="sm:w-2/5">
          <img
            className="object-cover w-auto h-full"
            src={props.imageUrl}
            alt={props.alt}
          />
        </div>
        <div className="flex flex-col justify-between flex-1 ml-2">
          <div className="flex-1 p-2">
            <p className="text-xl font-semibold leading-5 text-gray-900">
              {props.title}
            </p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
          </div>
          {/* <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{props.author}</span>
              <img className="w-6 h-6" src={props.authorImageUrl} alt="" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {props.author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={props.date}>{props.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{props.readingTime} read</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
