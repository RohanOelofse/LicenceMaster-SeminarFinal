import { useState } from 'react';
import "../styles/componentStyles.css"
import '../App.css'
import HeaderBar from '../components/Headerbar'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }

    return (
        <>
            <div id="appContainer">
                <HeaderBar />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
                <h1 style={{color: "#000"}}>Sign Up</h1>
                <div style={{display: "flex", flexDirection: "column", alignItems: "left"}}>
                    <InputField type="" title="Email: " placeholder="Email" value={email} onValueChange={email => setEmail(email)}/>
                    <InputField type="password" title="Password: " placeholder="Password" value={password} onValueChange={password => setPassword(password)}/>
                </div>
                <CustomButton title='Create Account' onPress={() => handleNavigation("/MainMenu")}/>
                <CustomButton title='Back' onPress={() => handleNavigation("/")}/>
            </div>
                <Footer />
            </div>
        </>
    )
}

export default CreateAccount