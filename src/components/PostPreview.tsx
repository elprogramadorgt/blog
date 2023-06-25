import Link from "next/link";
import { PostMetadata } from "../interfaces/PostMedadata";

const PostPreview = (props: PostMetadata) => {
    console.log(props, 'my props')
    return (

            <div className="p-8 bg-white shadow-sm rounded-md">
                <Link href={`/posts/${props.slug}`}>
                    <h2 className="text-xl font-semibold text-gray-800">{props.title}</h2>
                    </Link>


                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800">{props.title}</h2>
                        <p className="mt-2 text-gray-600">{props.description}</p>
                        <div className="mt-4">
                            <span className="font-semibold text-sm text-gray-600">{props.author}</span>
                            <span className="text-sm text-gray-500 ml-2">{props.date}</span>
                        </div>
                    </div>
                </div>
        
    );
};

export default PostPreview;