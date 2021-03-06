import React, { useEffect } from 'react';
import  useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, setSubmit, setViewmf, price1, price2, price3, idno }) => {
    const { progress, url } = useStorage(file, price1, price2, price3, idno);
    useEffect(() => {
        if(url) {
            setFile(null);
            setSubmit(false);
            setViewmf(prev=>!prev)
        }
    }, [url, setFile, setSubmit, setViewmf]);
        
    return (
        <>
        <div>{progress}%</div>
        <div className='progress-bar' style={{width:progress +'%'}}></div>
        
        </>
    );
}

export default ProgressBar;