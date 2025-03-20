import "../styles/componentStyles.css"

interface CustomButtonProps {
    width?: number
    height?: number
    title: string
    onPress: () => void
}

function CustomButton(props: CustomButtonProps) {

    return (
        <button onClick={props.onPress} id="customButton">
            <p style={{margin: 0, color: 'white', fontSize: 20, fontFamily:"Arial"}}>{props.title}</p>
        </button>
    )
}
export default CustomButton