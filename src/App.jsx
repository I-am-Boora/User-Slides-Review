import { useState } from "react";
import UserData from "./UserData.js";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import "./custom.scss";
function App() {
  const [index,setIndex] = useState(0);
  // const [userdata, setUserData] = useState(UserData);

  const { name, job, image, detail } = UserData[index];

  const handleBack=()=>{
    setIndex(index - 1)
    if(index <= 0){
      setIndex(UserData.length -1)
    }
    console.log(index)
  }
  const handleForward =()=>{
    setIndex(index + 1)


    if (index >= UserData.length - 1)
    {
      setIndex(0)
    }
    
  }
  return (
    <div className="App">
      <h1>Our Reviews</h1>
      <div className="user-container">
        <div className="image-container">
          <img src={image} alt="" />
        </div>
        <h4>{name}</h4>
        <h5>{job}</h5>
        <p>{detail}</p>
        <div className="icon-container">
          <AiFillCaretLeft className="icon" onClick={handleBack}/>
          <AiFillCaretRight className="icon" onClick={handleForward}/>
        </div>
      </div>
    </div>
  );
}

export default App;
