import React from 'react';
import '../../App.css';
import { CSVLink } from 'react-csv';
import LoadFileForm from '../forms/loadFileForm';
import AuthContext from '../../helpers/auth/authContext';

export default function RelPowerLightLayout() {
  const { auth, setData, clearData } = React.useContext(AuthContext);

  let csvData = auth ? auth.data : '';

  // console.log(csvData);

  const runDate = new Date();

  const runStamp = `${
    runDate.getMonth() + 1
  }${runDate.getDate()}${runDate.getFullYear()}_${runDate.getHours()}:${runDate.getMinutes()}`;
  const filename = `Relative Power_${runStamp}`;

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Light/Dark Power Analysis</h2>
      <LoadFileForm callback={setData} />

      {csvData && (
        <CSVLink
          onClick={clearData}
          className="Download-button"
          data={csvData}
          filename={filename}
        >
          Download
        </CSVLink>
      )}

      {/*<button*/}
      {/*onClick={clearData}>Temp Button</button>*/}
    </main>
  );
}
