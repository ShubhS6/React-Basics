

export function ProfileCard(props){
    return(
        <div>
            <h2>Name:{props.name}</h2>
            <h2>Age:{props.age}</h2>
            <h2>Member:{props.isMember?"Member is true":"Member is false"}</h2>
        </div>
    );
}