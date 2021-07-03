import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    //use effect runs on every render
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:9000/blogs`)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
        }, 1000);
        
    //    console.log(`blogs ${blogs}`)
    }, []) //empty array depencies ensures use effect only runs after the first render
  
    

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs = { blogs } title = 'All blogs!'  /> }
       
            {/* <button onClick = {() => setName('luigi')}>change name</button> */}
            {/* <p>{name}</p> */}
        </div>
     );
}
 
export default Home;