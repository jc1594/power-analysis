import React from 'react';
import '../../App.css';
import authContext from '../../helpers/auth/authContext';
import FileUploader from '../../helpers/fileUploader';
import { Typography } from '@mui/material';

const LoadFileForm = ({ callback }) => {
  const { auth, handleFileSubmit } = React.useContext(authContext);

  const [selectedFile, setSelectedFile] = React.useState(null);

  const submitFile = async (e) => {
    e.preventDefault();
    void handleFileSubmit({ auth }, callback, selectedFile);
  };

  return (
    <div className="loadFileForm">
      <form onSubmit={submitFile}>
        <FileUploader onFileSelect={(file) => setSelectedFile(file)} />
      </form>
      <Typography variant={'subtitle2'}>{selectedFile?.name}</Typography>
    </div>
  );
};

export default LoadFileForm;
