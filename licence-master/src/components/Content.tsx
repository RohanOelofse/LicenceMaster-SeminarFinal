interface Contentprops{
    title?: string;
    image: string;
    content: string;
}

function Content(props: Contentprops){
    return (
        <div>
            <div>
                <img src={props.image} style={{}} />
            </div>
            <div>
                <p>{props.content}</p>
            </div>

        </div>
    );
}

export default Content;