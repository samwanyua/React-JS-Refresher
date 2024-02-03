import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum....', author: 'mario', id: 1},
        {title: 'Welcome to Chicago', body: 'Lorem ipsum....', author: 'yoshi', id: 2},
        {title: 'Top 10 visiting places in Chicago', body: 'Lorem ipsum....', author: 'uiyo', id: 3}
    ]);
    return ( 
        <div className="home">
            <BlogList 
                blogs = {blogs}
                title = "All Blogs"
            
            />
        </div>
     );
}
 
export default Home;