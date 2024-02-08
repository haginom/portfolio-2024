export default function ResourcesRoute() {
  return (
    <div>
      <main>
      <form>
        <div className="space-y-12">
        <select id="media type">
          <option value="book">Book</option>
          <option value="podcast">Podcast</option>
          <option value="image">Image/Photo</option>
          <option value="poetry">Poetry</option>
          <option value="video">Video/film</option>
          <option value="museum">Museum</option>
        </select>
        <label htmlFor="title">Title</label>
        <label htmlFor="quote">Quotes</label>

        <textarea name="quote" id="quote" cols={30} rows={10}>

        </textarea>
        <label htmlFor="thoughts">Thoughts</label>
        <textarea name="thoughts" id="thoughts" cols={30} rows={10}>
  
        </textarea>
        </div>
      </form>
      
      </main>
    </div>
  );
}