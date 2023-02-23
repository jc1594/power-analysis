import { CSVLink } from 'react-csv';
import React from 'react';

const DownloadButton = (data) => {
  console.log(data.content);
  console.log(data.filename);
  return (
    <CSVLink
      className="Download-button"
      data={data.content}
      filename={data.filename}
    >
      Download
    </CSVLink>
  );
};

export default DownloadButton;
