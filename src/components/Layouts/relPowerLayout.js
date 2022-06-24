import React from 'react';
import '../../App.css'
import { CSVLink } from 'react-csv'
import LoadFileForm from '../forms/loadFileForm';
import AuthContext from '../../helpers/authContext';

export default function RelPowerLayout() {
  const { auth, setData, clearData } = React.useContext(AuthContext);

  let csvData = (auth) ? auth.data : '';

  console.log(auth.data)

  const rundate = new Date();
  const runtime = `${rundate.getHours()}:${rundate.getMinutes()}`;
  const filename = `Relative Power_${runtime}`;

  const DownloadButton = () => {
    if(csvData) {
      return <CSVLink
        className="Download-button"
        data={csvData}
        filename={filename}>
        Download
      </CSVLink>
    }
  }

    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Relative Power Analysis</h2>
            <LoadFileForm
                callback={setData}
            />

          <DownloadButton/>

          {/*<button*/}
          {/*onClick={clearData}>Temp Button</button>*/}

        </main>
    );
}

