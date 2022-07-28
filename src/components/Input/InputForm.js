import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./InputForm.module.css";
import ErrorModal from "../UI/ErrorModal";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const NameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(> 0).",
      });
      return;
    }

    props.userContents(enteredName, enteredAge);

    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={NameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default InputForm;
