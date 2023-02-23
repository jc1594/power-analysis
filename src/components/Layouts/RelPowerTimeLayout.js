import React from 'react';
import '../../App.css';
import { CSVLink } from 'react-csv';
import LoadFileForm from '../forms/loadFileForm';
import TimeInputForm from '../forms/timeInputForm';
import AuthContext from '../../helpers/auth/authContext';

//todo relpowerlayout is one layout - time vs lightdark are two different layouts.
// One has a time input field, one doesn't.
// OR it's the same layout, but renders differently based on how you get there?
// For everything else, pass through time - if it's null, render form for ld analysis

export default function RelPowerTimeLayout() {
  const { auth, setTimeData, clearData } = React.useContext(AuthContext);

  let csvData = auth ? auth.data : '';

  console.log(csvData);

  const runDate = new Date();

  const runStamp = `${
    runDate.getMonth() + 1
  }${runDate.getDate()}${runDate.getFullYear()}_${runDate.getHours()}:${runDate.getMinutes()}`;
  const filename = `Relative Power_${runStamp}`;

  const DownloadButton = () => {
    if (csvData) {
      return (
        <CSVLink
          onClick={clearData}
          className="Download-button"
          data={csvData}
          filename={filename}
        >
          Download
        </CSVLink>
      );
    }
  };

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Custom Power Analysis</h2>
      <TimeInputForm />
      <LoadFileForm callback={setTimeData} />

      <DownloadButton />

      {/*<button*/}
      {/*onClick={clearData}>Temp Button</button>*/}
    </main>
  );
}
