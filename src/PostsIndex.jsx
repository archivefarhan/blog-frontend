export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1 className="text-center">All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts" className="mt-1 container text-center">
          <h2 className="mt-3">{post.title}</h2>
          <img src={post.image} alt="" />
          <p className="mt-3">Body: {post.body}</p>
          <button class="mt-1 btn btn-primary" onClick={() => props.onSelectPost(post)}>
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
