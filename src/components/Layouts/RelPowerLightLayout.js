import React from 'react';
import '../../App.css';
import FileHelper from '../../helpers/fileHelper';
import LoadFileForm from '../forms/loadFileForm';
import relPowerAnalysis from '../../helpers/powerAnalysis/relPowerAnalysis';
import DownloadButton from '../forms/DownloadButton';
import Sidebar from '../Sidebar';

export default function RelPowerLightLayout() {
  const [csvData, setCsvData] = React.useState(null);

  const filename = FileHelper.nameFile('rel_power');

  const callback = (data) => {
    let time;
    let powerData = relPowerAnalysis(data, time);
    setCsvData(powerData);
  };

  return (
    <main style={{ padding: '1rem 0' }}>
      <Sidebar />
      <h2>Light/Dark Power Analysis</h2>
      <LoadFileForm callback={callback} />

      {csvData && <DownloadButton content={csvData} filename={filename} />}
    </main>
  );
}
