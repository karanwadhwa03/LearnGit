import ButtonArray from "./ButtonArray";

const Buttons=(props)=>{
    return(
        <div>
            {ButtonArray.map(btn=>{
                return (<button onClick={()=>props.clicked(btn.name)} key={btn.id}>{btn.name}</button>)}
                )}
        </div>
    )
}
export default Buttons