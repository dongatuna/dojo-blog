const BlogList = ({ blogs, title, handleDelete }) => {
   
    //props are use to pass data from a parent component into a child component
 
    return ( 

        <div className="blog-list">
            <h1>{ title }</h1>
            {
                blogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>Written by: { blog.author } </p>
                            <button onClick = { () => handleDelete(blog.id)}>delete blog</button>
                        </div>
                    )                     
                )
            }
        </div>
    );
}
 
export default BlogList;