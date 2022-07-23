import InputForm from '../Input/InputForm';
import './NewInput.css'

const NewInput = (props) => {

  const saveUserInfo = (enteredUserinfo) => {
    const UserInfo = {
      ...enteredUserinfo,
      id: Math.random().toString(),
    };
   {
     props.userContents(UserInfo);
   }
  }

    return (
      <InputForm onAddUserInfo={saveUserInfo}/>
    );
}

export default NewInput;