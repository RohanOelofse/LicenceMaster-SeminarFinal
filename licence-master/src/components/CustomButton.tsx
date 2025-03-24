import "../styles/componentStyles.css"

interface CustomButtonProps {
    width?: number
    height?: number
    title: string
    color?: string
    onPress: () => void
}

function CustomButton(props: CustomButtonProps) {
    if (props.color == undefined){
        return (
            <button onClick={props.onPress} id="customButton">
                <p style={{margin: 0, color: 'white', fontSize: 20, fontFamily:"Arial"}}>{props.title}</p>
            </button>
        )
    }else if (props.color == "blue"){
        return (
            <button onClick={props.onPress} id="customButtonBlue">
                <p style={{margin: 0, color: 'white', fontSize: 20, fontFamily:"Arial"}}>{props.title}</p>
            </button>
        )
    }
    
}
export default CustomButton