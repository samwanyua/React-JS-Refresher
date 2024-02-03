import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum....', author: 'mario', id: 1},
        {title: 'Welcome to Chicago', body: 'Lorem ipsum....', author: 'yoshi', id: 2},
        {title: 'Top 10 visiting places in Chicago', body: 'Lorem ipsum....', author: 'mario', id: 3}
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('useEffect')
        console.log(name)
    }, [name]) // Dependency array - ensures the useEffect hook runs the function after first intial render
    return ( 
        <div className="home">
            <BlogList 
                blogs = {blogs}
                title = "All Blogs"
                handleDelete={handleDelete}
            />
            <BlogList 
                blogs = {blogs.filter((blog) => blog.author === 'mario')}
                title = "Mario's blogs"
                handleDelete={handleDelete}

            />
            <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;