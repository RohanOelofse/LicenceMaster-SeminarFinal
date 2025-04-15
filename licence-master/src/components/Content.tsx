interface contentProps{
    key?: number;
    index: number;
    title?: string;
    image?: string;
    content: string;
}

function Content(props: contentProps){
    return (
        <div id="contentContainer"  style={{backgroundColor: props.index % 2 === 0 ? "#D1B464" : "#FFF"}}>
            {props.image ? (<img src={props.image} style={{}} />) : ("")}
            <div>
                <p style={{color: props.index % 2 === 0 ? "#FFF" : "#000"}}>{props.content}</p>
            </div>

        </div>
    );
}

export default Content;