import { useNavigate } from "react-router-dom"
import "../styles/componentStyles.css"

interface HeaderBarProps {
    imageIcon: string
    onPress: () => void
}


const Logo = (props:HeaderBarProps) => (
    <div onClick={props.onPress} id="logo">      
        <img src={props.imageIcon} style={{width:"50px", height:"50px", marginRight:"5px", marginLeft:0, cursor: "pointer"}}></img>
        <p style={{color:"white", fontFamily:"Arial", fontSize:28}}>Licence Master</p>
    </div>
)

function HeaderBar() {

    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }
    
    return (
    <div id="headerBar">

        <Logo imageIcon="/logo/logo1.png" onPress={() => handleNavigation("/")}/>

    </div>
    );
} 

export default HeaderBar