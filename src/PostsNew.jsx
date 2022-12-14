export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new" class="ps-2">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" placeholder="type your title here" />
        <br />
        <br />
        <label htmlFor="body">Body: </label>
        <input type="text" name="body" id="body" placeholder="type your post here" />
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" id="image" placeholder="something.jpg" />
        <br />
        <br />
        <button className="mt-3 btn btn-primary">Create Post</button>
        <br />
      </form>
    </div>
  );
}
