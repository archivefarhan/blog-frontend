export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new" class="ps-2 container mt-3">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <label className="mt-3" htmlFor="title">
          Title:{" "}
        </label>
        <input type="text" className="form-control" name="title" id="title" placeholder="type your title here" />
        <br />
        <label htmlFor="body">Body: </label>
        <input type="text" className="form-control" name="body" id="body" placeholder="type your post here" />
        <br />
        <label htmlFor="image">Image: </label>
        <input type="text" className="form-control" name="image" id="image" placeholder="something.jpg" />
        <br />
        <button className="mt-3 btn btn-primary">Create Post</button>
        <br />
      </form>
    </div>
  );
}
