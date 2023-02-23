import React from 'react';
import FileHelper from '../../helpers/fileHelper';
import LoadFileForm from '../forms/loadFileForm';
import DownloadButton from '../forms/DownloadButton';
import absPowerAnalysis from '../../helpers/powerAnalysis/absPowerAnalysis';
import Sidebar from '../Sidebar';

export default function AbsPowerLayout() {
  const [csvData, setCsvData] = React.useState(null);

  const filename = FileHelper.nameFile('abs_power');

  const callback = (data) => {
    let time;
    let powerData = absPowerAnalysis(data);
    setCsvData(powerData);
  };

  return (
    <main style={{ padding: '1rem 0' }}>
      <Sidebar />
      <h2>Absolute Power Analysis</h2>
      <LoadFileForm callback={callback} />

      {csvData && <DownloadButton content={csvData} filename={filename} />}
    </main>
  );
}
