import Navbar from "@/components/NavBar";

import getPostMetadata from "../../components/GetPostMetadata";
import PostPreview from "../../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => {
    post.index = index;
    return <PostPreview key={post.slug} {...post} />;
  });

  return <>{postPreviews}</>;
};

export default HomePage;
