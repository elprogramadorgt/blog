import Link from "next/link";
import { PostMetadata } from "../interfaces/PostMedadata";

const PostPreview = ( props: PostMetadata) => {
  const colors = ['border-red-500',  'border-yellow-500', 'border-blue-500', 'border-indigo-500',  'border-green-500','border-purple-500'];

  const randomColor = colors[props.index];


  return (
    <div className={`p-8 bg-white shadow-lg rounded-md my-5 border-l-4 ${randomColor}`}>
      <div className="p-2">
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {props.title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {props.description}
        </p>
        <Link
          href={`/posts/${props.slug}`}
          className="inline-block text-blue-600 mt-4 hover:underline"
        >
          Read more
        </Link>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{props.author}</span>
            <span className="ml-2">{props.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
