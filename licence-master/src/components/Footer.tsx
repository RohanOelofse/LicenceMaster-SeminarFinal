import { useNavigate } from "react-router-dom";
import "../styles/componentStyles.css"

function Footer() {
    const navigate = useNavigate();

    return (
        <div id = "footerBar">
            <div id = "linkContainer">
                <p style={{marginTop: 10, color:"white", fontFamily:"Arial", fontSize:20}} onClick={() => navigate("/about")}>About Us</p>
                <p style={{marginTop: 10, color:"white", fontFamily:"Arial", fontSize:20}} onClick={() => navigate("/about")}>Contact Us</p>
            </div>
            <div>
            </div>
        </div>
    );
}


export default Footer;