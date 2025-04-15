import { useNavigate } from "react-router-dom";
import "../styles/componentStyles.css"

function Footer() {
    const navigate = useNavigate();

    return (
        <div id = "footerBar">
            <div id = "linkContainer">
                {/* <p style={{marginTop: 10, color:"white", fontFamily:"Arial", fontSize:20}} onClick={() => navigate("/AboutUs")}>About Us</p> */}
                <p style={{marginTop: 10, color:"white", fontFamily:"Arial", fontSize:20}} onClick={() => navigate("/ContactUs")}>Contact Us</p>
            </div>
            <div>
                <img src = "/logo/NEFlag.png" style={{width:"90px", height:"45px", marginRight:"5px", marginBottom: "10px", cursor: "pointer"}} onClick={() => window.location.href = "https://dmv.nebraska.gov/"}/>
            </div>
        </div>
    );
}


export default Footer;