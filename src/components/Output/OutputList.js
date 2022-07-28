import Card from "../UI/Card";
import classes from "./OutputList.module.css";

const OutputList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.user.map((user) => (
          <li key = {user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OutputList;
