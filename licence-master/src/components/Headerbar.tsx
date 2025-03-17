import { useNavigate } from "react-router-dom"
import "../styles/HeaderBar.css"

interface HeaderBarProps {
    imageIcon: string
    onPress: () => void
}


const Logo = (props:HeaderBarProps) => (
    <div onClick={props.onPress} id="headerBar">      
        <img src={props.imageIcon} style={{width:"50px", height:"50px", marginRight:"5px", marginLeft:0}}></img>
        <p style={{color:"white", fontFamily:"Inria Serif", fontSize:28}}>Licence Master</p>
    </div>
)

const User = (props:HeaderBarProps) => (
    <div onClick={props.onPress}
        style={{position:'absolute',
                right:10,
                height: "50px",
                display: 'flex',
                alignItems: 'center'}}>
        <p style={{color:"black", marginRight: "5px", fontFamily:"Inria Serif", fontSize:28}}>Rohan Oelofse</p>
        <img src={props.imageIcon} style={{width:"50px", height:"50px", marginLeft:0}}></img>
    </div>
)

function HeaderBar() {

    const navigate = useNavigate()

    function handleNavigation(route: string) {
        navigate(route)
    }
    
    return (
    <div
        style={{
            width: "100vw",
            height: "60px",
            paddingTop:"10px",
            backgroundColor: "#B69246",
            position:'relative',
        }}>

        <Logo imageIcon="/logo/logo1.png" onPress={() => handleNavigation("/")}/>
        <User imageIcon="/logo/logo1.png" onPress={() => {}}/>

    </div>
    );
} 

export default HeaderBar