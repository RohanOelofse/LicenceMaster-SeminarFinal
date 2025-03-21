import '../App.css'
import HeaderBar from '../components/Headerbar'
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }

    return (
        <>
            <div id="appContainer">
                <HeaderBar />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
                    <h1 style={{color: "#000"}}>Contact Us</h1>
                    <div id="contactBorder">
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <h2>Email:</h2>
                            <p style={{alignContent: "center", fontFamily: "Arial", fontSize: 20,}}>rooelo01@wsc.edu</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
                            <h2>Phone:</h2>
                            <p style={{alignContent: "center", fontFamily: "Arial", fontSize: 20,}}>(402) 456-4569</p>
                        </div>
                        
                    </div>
                    <div  style={{paddingBottom: "20px"}}>
                    <CustomButton title='Back' onPress={() => handleNavigation("/")}/>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

export default ContactUs