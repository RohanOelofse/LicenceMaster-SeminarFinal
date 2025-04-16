import '../App.css'
import "../styles/componentStyles.css"
import CustomButton from "../components/CustomButton";
import HeaderBar from "../components/Headerbar";
import Content from '../components/Content';
import { useNavigate } from 'react-router-dom';
import trafficSignalData from '../Data/trafficSignals';


function TrafficSignals(){

    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }

    return(
        <>
            <div id="appContainer" style={{paddingBottom: 80}}>
                <HeaderBar />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px"}}>
                    <h1>Traffic Signals</h1>
                    {trafficSignalData.map((signal, index) => (
                            <Content index ={index} key={signal.id} image={signal.image} content={signal.information} />
                        ))}
                </div>
                <div style={{zIndex: 100, position: 'fixed', bottom: 10}}>
                    <CustomButton title='Back' onPress={() => handleNavigation('/MainMenu')} />
                    <CustomButton color= 'blue' title='Main Menu' onPress={() => handleNavigation('/MainMenu')} />
                </div>
                <div style={{zIndex: 100, position: 'fixed', bottom: 10, right: 10}}>
                    <CustomButton title='Next' onPress={() => handleNavigation("/TrafficSigns")} />
                </div>
            </div>
        </>
    )
}

export default TrafficSignals