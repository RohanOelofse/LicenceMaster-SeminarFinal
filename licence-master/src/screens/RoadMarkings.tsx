import '../App.css'
import "../styles/componentStyles.css"
import CustomButton from "../components/CustomButton";
import HeaderBar from "../components/Headerbar";
import Content from '../components/Content';
import { useNavigate } from 'react-router-dom';
import roadMarkingsData from "../Data/roadMarkings"

function RoadMarkings(){

    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }

    return(
        <>
            <div id="appContainer" style={{paddingBottom: 80}}>
                <HeaderBar />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px"}}>
                    <h1>Road Markings</h1>
                    {roadMarkingsData.map((marking, index) => (
                            <Content index ={index} key={marking.id} image={marking.image} content={marking.information} />
                        ))}
                </div>
                <div style={{zIndex: 100, position: 'fixed', bottom: 10}}>
                    <CustomButton title='Back' onPress={() => handleNavigation('/TrafficSigns')} />
                    <CustomButton color= 'blue' title='Main Menu' onPress={() => handleNavigation('/MainMenu')} />
                </div>
                <div style={{zIndex: 100, position: 'fixed', bottom: 10, right: 10}}>
                    <CustomButton title='Next' onPress={() => handleNavigation("/RulesOfTheRoad")} />
                </div>
            </div>
        </>
    )
}

export default RoadMarkings