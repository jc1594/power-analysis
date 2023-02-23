import React from 'react';
import AuthContext from './authContext';
import { CsvHelper } from '../csvHelper';
import relPowerAnalysis from '../powerAnalysis/relPowerAnalysis';

//TODO Split out data into data context provider (rather than auth) - or redefine this provider

const AUTH_KEY = 'auth';

const AuthProvider = ({ children }) => {
  const authString = localStorage.getItem(AUTH_KEY);
  const auth = authString ? JSON.parse(authString) : authString;

  const handleFileSubmit = async (params, callback, file) => {
    await CsvHelper.parseCsv(file, callback, params);
  };

  //function to call from callback that sets data
  const setData = (setCsvData) => (data) => {
    //TODO May be able to intentionally omit declaring time?
    //TODO Need to get time from field, then set variable with value - then should be able to use 1 setData
    // Probably need to clear it after

    let time;
    let powerData = relPowerAnalysis(data, time);
    setCsvData(powerData);
  };

  const setTimeData = (data) => {
    let time = true;
    let powerData = relPowerAnalysis(data, time);
    let auth = { data: powerData };
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  };

  const clearData = () => {
    setTimeout(() => {
      localStorage.removeItem(AUTH_KEY);
      // window.location.reload(false) //Not the best way to do this, but effective
      // alert(`Download Completed`)
    }, 1000);
  };

  const value = {
    auth,
    handleFileSubmit,
    setData,
    setTimeData,
    clearData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
