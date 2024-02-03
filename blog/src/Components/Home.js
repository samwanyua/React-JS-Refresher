const Home = () => {

    const handleClick = (e) => {
        console.log(e)
    }
    const handleClickAgain = (student,e) => {
        console.log('Hello' + student, e.target)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Warui',e)}>Click student</button>

        </div>
     );
}
 
export default Home;