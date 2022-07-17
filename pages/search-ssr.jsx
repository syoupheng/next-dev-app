import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/shared/Loader";
import PostFeed from "../components/shared/posts/PostFeed/PostFeed";
import { index } from "../utils/algoliasearch";

export const getServerSideProps = async ({ query }) => {
  const { q } = query;
  if (query) {
    const { hits } = await index.search(q);
    
    return {
      props: {
        posts: hits,
        query: q
      }
    }
  }
}

const SearchPageSsr = ({ posts, query }) => {
  return posts && (
    <div className="container pt-6 px-52 mx-auto">
      <h2>You searched "{query}" : {posts.length || "No"} results</h2>
      <PostFeed posts={posts} />
    </div>
  );
}
 
export default SearchPageSsr;