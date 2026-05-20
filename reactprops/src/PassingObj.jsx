// export function PassingObj(props){
//     return (
//         <>
//         {props.obj.map((name,key)=>(
//             <div key={key}>
//            <h3>Name :{name.name}</h3>
//            <h3>Age :{name.age}</h3>
//            </div> 
//         ))}
//         </>
//     );
// }


export function PassingObj(props){
    return (
        <>
        {props.obj.map((name,key)=>(
            <div key={key}>
           <h3>Name :{name.name}</h3>
           <h3 onClick={()=>props.onaClick(name.age)}>Age :{name.age}</h3>
           </div> 
        ))}
        {props.na.map((name,key)=>(
            <div key={key}>
           <h3>OnlyName :{name}</h3>
           </div> 
        ))}
        </>
    );
}