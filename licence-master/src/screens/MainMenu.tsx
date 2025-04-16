import '../App.css'
import "../styles/componentStyles.css"
import HeaderBar from '../components/Headerbar'
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';



function MainMenu(){
    
    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }

    return(
        <>
            <div id="appContainer">
                <HeaderBar />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
                    <h1>Main Menu</h1>
                    <CustomButton title='Traffic Signals' onPress={() => handleNavigation("/TrafficSignals")}/>
                    <CustomButton title='Traffic Signs' onPress={() => handleNavigation("/TrafficSigns")}/>
                    <CustomButton title='Road Markings' onPress={() => handleNavigation("/RoadMarkings")}/>
                    <CustomButton title='Rules of the Road' onPress={() => handleNavigation("/RulesOfTheRoad")}/>
                    <CustomButton color="blue" title='Practice Exam' onPress={() => handleNavigation("/PracticeExam")}/>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainMenu