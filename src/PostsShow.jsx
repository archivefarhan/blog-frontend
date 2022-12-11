export function PostsShow(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <img src={props.post.image} alt="" height="50%" />
      <p>{props.post.body}</p>
    </div>
  );
}
