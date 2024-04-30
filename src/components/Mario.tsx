import { useNavigate} from "react-router-dom";

function Mario (){
    const navigate = useNavigate();
    return(
        <>
        <div>
            <h2>HI I AM MARIO!!!!</h2>
            <nav>
                <li>
                    <button onClick={()=>navigate('/')}>Here to main page...</button>
                </li>
            </nav>
        </div>
        </>
    );
}

export default Mario;