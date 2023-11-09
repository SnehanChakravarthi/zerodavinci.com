import Link from 'next/link';

const PostPreview = (props) => {
  return (
    <Link href={`blog/posts/${props.slug}`}>
      <div className="flex flex-row overflow-hidden bg-white border border-black rounded-2xl">
        <div className="flex-shrink-0">
          <img
            className="h-40 w-60  object-cover"
            src={props.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-2 flex flex-1 flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600"></p>
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{props.author}</span>
              <img className="h-6 w-6" src={props.authorImageUrl} alt="" />
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
