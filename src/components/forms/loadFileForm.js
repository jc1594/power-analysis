import React from 'react';
import '../../App.css';
import authContext from '../../helpers/auth/authContext';
import FileUploader from '../../helpers/fileUploader';

const LoadFileForm = ({ callback }) => {
    const { auth, handleFileSubmit } = React.useContext(authContext);

    const [selectedFile, setSelectedFile] = React.useState(null);

    const submitFile = (e) => {
        e.preventDefault();
        handleFileSubmit({ auth }, callback, selectedFile);
    };

    return (
        <div className="loadFileForm">
            <form onSubmit={submitFile}>
                <FileUploader onFileSelect={(file) => setSelectedFile(file)} />
            </form>
        </div>
    );
};

export default LoadFileForm;
