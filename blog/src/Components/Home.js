import { useState } from "react";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum....', author: 'mario', id: 1},
        {title: 'Welcome to Chicago', body: 'Lorem ipsum....', author: 'yoshi', id: 2},
        {title: 'Top 10 visiting places in Chicago', body: 'Lorem ipsum....', author: 'uiyo', id: 3}
    ]);



   
    return ( 
        <div className="home">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;