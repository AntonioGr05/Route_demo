import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Sorry, this page does't exist!!!</h1>
            <button onClick={()=>navigate('/')}>Go back to the home page clicking here</button>
        </div>
    );
}

export default ErrorPage;