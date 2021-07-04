import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {    

    const { data : blogs, isPending, error } = useFetch('http://localhost:9000/blogs')
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