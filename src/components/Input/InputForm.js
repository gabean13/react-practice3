import { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInfo = {
      name : enteredName,
      age : enteredAge,
    };

    if(userInfo.name < 1) {
      {console.log("you must enter your name")}
      return ;
    }

    if(userInfo.age < 1){
      {console.log('You must be at least 1 years old')}
      return ;
    }

    props.onAddUserInfo(userInfo);
    
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" value={enteredName} onChange={NameChangeHandler} />
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          value={enteredAge}
          onChange={AgeChangeHandler}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default InputForm;
