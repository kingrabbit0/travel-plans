import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


function Plans() {
    const { country } = useParams();
    const navigate = useNavigate();

    return(
        <div></div>
    );
}

export default Plans;