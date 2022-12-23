import React from 'react';

//TODO Prompt for start and end time? Or interval? Save into arr or num

const TimeInputForm = () => {
  const [time, setTime] = React.useState('');
  const handleChange = (e) => setTime(e.target.value);

  return (
    <label>
      Time:
      <input
        type="text"
        value={time}
        className="Time-Input"
        onChange={handleChange}
      />
    </label>
  );
};

export default TimeInputForm;
