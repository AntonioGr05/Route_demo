import { useNavigate } from "react-router-dom";

function Luigi (){
    const navigation = useNavigate();
    return(
        <>
        <div>
            <h2>I AM LUIGI WWUUAAAA</h2>
            <nav>
                <ul>
                    <button onClick={()=>navigation('/')}>Here to main page...</button>
                </ul>
            </nav>
        </div>
        </>
    );
}

export default Luigi;