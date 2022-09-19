import { useEffect, useState } from "react";

export function usePostsList() {
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setHasFailed(false);
    fetch("/foo")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error();
        }
      })
      .then((postsData) => {
        console.log(postsData);
      })
      .catch(() => {
        setHasFailed(true);
      });
  }, []);

  return {
    hasFailed,
  };
}

export const PostsList = () => {
  const { data, hasFailed } = usePostsList();

  if (hasFailed) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
