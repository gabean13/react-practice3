import "./Output.css";
import OutputList from "./OutputList";

const Output = (props) => {
  return (
    <ul>
      {props.items.map(contents => (
        <OutputList key={contents.id} id={contents.id}>
          {contents.text}
        </OutputList>
      ))}
    </ul>
  );
};

export default Output;
