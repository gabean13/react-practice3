import { useState } from "react";
import "./App.css";
import InputForm from "./components/Input/InputForm.js";
import NewInput from "./components/NewInput/NewInput";
import Output from "./components/Output/Output";

const App = (props) => {
  const [userInfo, setUserInfo] = useState([])

    const userList = (newUserInfo) => {
      setUserInfo(prevUsers => {
        const updatedUserInfo = [...prevUsers];
        updatedUserInfo.unshift({newUserInfo});
        return updatedUserInfo;
      });
    }

    let contents = (
      <p>No User Info. Maybe add one!</p>
    )

    if(userInfo.length > 0){
      contents = (
        <Output items = {userInfo}/>
      );
    } 

  return (
    <div>
      <NewInput userContents = {userList}/>
      <div>
        {console.log(userInfo)}
        {contents}
      </div>
    </div>
  );
}

export default App;
