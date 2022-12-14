export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index" class="ps-2">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts" class="mt-1">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Body: {post.body}</p>
          <button class="mt-3 btn btn-primary" onClick={() => props.onSelectPost(post)}>
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
