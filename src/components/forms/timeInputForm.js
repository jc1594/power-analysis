import React from 'react';
import AuthContext from '../../helpers/auth/authContext';

//TODO Prompt for start and end time? Or interval? Save into arr or num

const AUTH_KEY = 'auth';

const TimeInputForm = () => {
  const auth = React.useContext(AuthContext);
  const [time, setTime] = React.useState('');
  const handleChange = (e) => setTime(e.target.value);
  //TODO this is wrong
  auth.time = time;
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  console.log(auth.time);

  return (
    //TODO Remove hidden field and label
    <label>
      {/*Bin Interval (Hours):*/}
      <input
        type="number"
        value={time}
        className="Time-Input"
        onChange={handleChange}
        hidden={true}
      />
    </label>
  );
};

export default TimeInputForm;
