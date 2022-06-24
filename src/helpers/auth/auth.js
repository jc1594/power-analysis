import React from 'react';
import AuthContext from './authContext';
import { CsvHelper } from '../csvHelper';
import powerAnalysis from '../powerAnalysis/powerAnalysis';

const AUTH_KEY = 'auth';

const AuthProvider = ({ children }) => {
    const authString = localStorage.getItem(AUTH_KEY);
    const auth = authString ? JSON.parse(authString) : authString;


    const handleFileSubmit = async (params, callback, file) => {
        await CsvHelper.parseCsv(file, callback, params);
    };

    //add function here to call from callback that sets data
    const setData = (data) => {
        let powerData = powerAnalysis(data);
        let auth = {'data':powerData};
        localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
        // console.log(
        //   `Test Callback: ${auth.data}`
        // );
        window.location.reload(false); //Not the best way to do this, but effective
    }

    const clearData = () => {
        localStorage.removeItem(AUTH_KEY);
        window.location.reload(false); //Not the best way to do this, but effective
        alert(`Download Completed`);

    };

    const value = {
        auth,
        handleFileSubmit,
        setData,
        clearData
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
