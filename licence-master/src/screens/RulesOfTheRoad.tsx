import '../App.css'
import "../styles/componentStyles.css"
import CustomButton from "../components/CustomButton";
import HeaderBar from "../components/Headerbar";
import Content from '../components/Content';
import { useNavigate } from 'react-router-dom';
import rulesOfTheRoadData from '../Data/rulesOfTheRoad';



function RulesOfTheRoad(){

    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }

    return(
        <>
            <div id="appContainer" style={{paddingBottom: 80}}>
                <HeaderBar />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px"}}>
                    <h1>Rules of the Road</h1>
                    {rulesOfTheRoadData.map((rule, index) => (
                            <Content index ={index} key={rule.id} image={rule.image} content={rule.information} />
                        ))}
                </div>
                <div style={{zIndex: 100, position: 'fixed', bottom: 10}}>
                    <CustomButton title='Back' onPress={() => handleNavigation('/RoadMarkings')} />
                    <CustomButton color= 'blue' title='Main Menu' onPress={() => handleNavigation('/MainMenu')} />
                </div>
                {/* <div style={{zIndex: 100, position: 'fixed', bottom: 10, right: 10}}>
                    <CustomButton title='Next' onPress={() => handleNavigation("")} />
                </div> */}
            </div>
        </>
    )
}

export default RulesOfTheRoad