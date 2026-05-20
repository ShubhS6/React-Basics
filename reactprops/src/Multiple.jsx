export function Multiple({names}){
    return(
        <>
        {names.map((m)=>(
            <h1 >{m}</h1>)
        )}
        </>
    );
}