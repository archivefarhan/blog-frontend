export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form action="/blog/new">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" placeholder="type your title here" />
        <br />
        <br />
        <label htmlFor="body">Body: </label>
        <input type="text" id="body" placeholder="type your post here" />
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input type="text" id="image" placeholder="something.jpg" />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
  );
}
