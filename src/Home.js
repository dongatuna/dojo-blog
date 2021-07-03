import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id )
        setBlogs(newBlogs)
    }
    //use effect runs on every render
    useEffect(() => {
        console.log(`use effect ran`)
    //    console.log(`blogs ${blogs}`)
    }, [name]) //empty array depencies ensures use effect only runs after the first render
  
    

    return ( 
        <div className="home">
            <BlogList blogs = { blogs } title = 'All blogs!' handleDelete = {handleDelete} />
            {/* <BlogList blogs = { blogs.filter( blog => blog.author === 'mario')} title = "Mario's blogs!" /> */}
            <button onClick = {() => setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;