import Navbar from "@/components/NavBar";



import getPostMetadata from "../../components/GetPostMetadata";
import PostPreview from "../../components/PostPreview";

const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return (
        <>


        <div className="p-6 mx-auto  flex flex-wrap items-center justify-center rounded">
         {postPreviews}
        </div>
        </>
        
       
    );
};

export default HomePage;