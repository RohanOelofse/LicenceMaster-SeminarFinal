interface inputFieldProps {
    title: string,
    placeholder: string,
    value: string | number | any,
    type?: string,
    onValueChange: (newValue: string) => void
}

function InputField(props: inputFieldProps) {

    return (
        <div style={{display: "flex", flexDirection: 'row', padding: 20, alignItems: 'center'}}>
            <p style={{color: '#000', paddingRight: 10, fontSize: 25, margin: 0, fontFamily: 'Arial'}}>{props.title}</p>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <input 
                    type={props.type === "password" ? "password" : "text"}
                    style={{backgroundColor: "#fff", color: "#000", height: 40, width: 300, borderWidth: 1, borderRadius: 5}}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.onValueChange(e.target.value)}
                />
            </div>
        </div>
    )

}

export default InputField