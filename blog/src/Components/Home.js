import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Mario')

    const handleClick = (e) => {
        setName('Luigi')
    }
    // const handleClickAgain = (student,e) => {
    //     console.log('Hello' + student, e.target)
    // }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('Warui',e)}>Click student</button> */}

        </div>
     );
}
 
export default Home;