import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <button className="btn btn-active"><Link to={"/"}>Go back to home</Link></button>
        </div>
    );
};

export default ErrorPage;