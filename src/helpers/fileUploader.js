import React, { useRef } from 'react';

const FileUploader = ({ onFileSelect }) => {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0]);
    };

    const handleClick = (e) => {
        fileInput.current && fileInput.current.click();
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={handleClick} className="btn btn-primary">
                Submit File
            </button>
        </div>
    );
};

export default FileUploader;
