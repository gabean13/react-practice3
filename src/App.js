import { useState } from "react";
import "./App.css";
import InputForm from "./components/Input/InputForm";
import OutputList from "./components/Output/OutputList";

const App = () => {
  const [userInfo, setUserInfo] = useState([]);

  const userList = (uName, uAge) => {
    setUserInfo((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge, id: Math.random().toString(),}];
    });
  };


  return (
    <div>
      <InputForm userContents={userList} />
      <OutputList user={userInfo} />
    </div>
  );
};

export default App;
