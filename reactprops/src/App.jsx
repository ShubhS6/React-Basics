import './App.css'
import { Multiple } from './Multiple';
import { PassingObj } from './PassingObj';
import { ProfileCard } from './ProfileCard';

function App() {
  const handleClick=(age)=>{
    alert(`You clied on : ${age}`)
  }

  const names=["Shubham","Ana","Shubh"]
  const obj=[
    {name:"shubham", age:21},
    {name:"shu", age:22},
    {name:"shubh", age:23}
  ]


  return (
    <div>
      <h1> Hello</h1>
      <ProfileCard name="Shubham" age="21" isMember={false}/>
      <Multiple names={names}/>
      <PassingObj obj={obj} na={names} onaClick={handleClick}/>
    </div>
      );
}

export default App
