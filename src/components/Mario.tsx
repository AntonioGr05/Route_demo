import { Link } from "react-router-dom";

function Mario (){
    
    return(
        <>
        <div>
            <h2>HI I AM MARIO!!!!</h2>
            <nav>
                <li>
                    <ul>
                        <Link to='/'>Here to main page...</Link>
                    </ul>
                </li>
            </nav>
        </div>
        </>
    );
};

export default Mario;