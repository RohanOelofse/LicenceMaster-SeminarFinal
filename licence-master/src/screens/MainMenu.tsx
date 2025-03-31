import '../App.css'
import "../styles/componentStyles.css"
import HeaderBar from '../components/Headerbar'
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function MainMenu(){

    return(
        <>
            <div id="appContainer">
                <HeaderBar />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
                    <h1>Main Menu</h1>
                    <CustomButton title='Traffic Signals' onPress={() => {}}/>
                    <CustomButton title='Traffic Signs' onPress={() => {}}/>
                    <CustomButton title='Road Markings' onPress={() => {}}/>
                    <CustomButton title='Rules of the Road' onPress={() => {}}/>
                    <CustomButton color="blue" title='Practice Exam' onPress={() => {}}/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainMenu