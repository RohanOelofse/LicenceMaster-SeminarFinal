interface contentProps{
    key: number
    title?: string;
    image: string;
    content: string;
}

function Content(props: contentProps){
    return (
        <div id="contentContainer"  style={{backgroundColor: props.key % 2 === 0 ? "#A3B8E0" : "#FFF"}}>
            <img src={props.image} style={{}} />
            <div>
                <p>{props.content}</p>
            </div>

        </div>
    );
}

export default Content;