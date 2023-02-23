import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import {
  THEME_PRIMARY,
  THEME_SECONDARY,
} from '../components/MUI Themes/DisabledTheme';

const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);
  const [btnDisabled, setBtnDisabled] = React.useState(true);

  const handleFileInput = (e) => {
    // handle validations
    onFileSelect(e.target.files[0]);
    setBtnDisabled(!e.target.files[0]);
    console.log(btnDisabled);
  };
  //TODO Should e be passed?
  const handleClick = (e) => {
    fileInput.current && fileInput.current.click();
  };

  return (
    <div className="file-uploader">
      <Button
        stye={{ background: THEME_SECONDARY, borderColor: THEME_PRIMARY }}
        variant={'contained'}
        component={'label'}
      >
        Choose File
        <input hidden type={'file'} onChange={handleFileInput} />
      </Button>
      <Button
        variant={'contained'}
        disabled={btnDisabled}
        type={'submit'}
        onClick={handleClick}
      >
        Process File
      </Button>
    </div>
  );
};

export default FileUploader;
