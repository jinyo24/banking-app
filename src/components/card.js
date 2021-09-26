function Card(props) {
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.textcolor ? ' text-' + props.textcolor : 'text-black'; 
        return 'card mb-3 shadow ' + bg + txt;
    }
    
    return (
        <>
            <div className={classes()} style= {{width:"50%", minWidth:"300px", maxWidth: "550px", marginTop: "100px"}}>
                <div className="card-header bg-info">{props.header}</div>
                <div className="card-body">
                    {props.title && (<h1 className="card-title">{props.title}</h1>)}
                    {props.text && (<p className="card-text">{props.text}</p>)}
                    {props.body}
                    {props.status && (<div>{props.status}</div>)}
                </div>
            </div>
        </>
    );
}

export default Card;