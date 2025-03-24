import { useState } from 'react';
import './App.css'
import HeaderBar from './components/Headerbar'
import InputField from './components/InputField'
import CustomButton from './components/CustomButton';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {
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
          <h1>Login/Sign Up</h1>
          <div style={{display: "flex", flexDirection: "column", alignItems: "left"}}>
            <InputField type="" title="Email: " placeholder="Email" value={email} onValueChange={email => setEmail(email)}/>
            <InputField type="password" title="Password: " placeholder="Password" value={password} onValueChange={password => setPassword(password)}/>
          </div>
          <div style={{paddingBottom: "20px", display: 'flex', flexDirection: "column", alignItems: "center"}}>
            <CustomButton title='Login' onPress={() => handleNavigation("/MainMenu")}/>
            <CustomButton title='Create Account' onPress={() => handleNavigation("/CreateAccount")}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
