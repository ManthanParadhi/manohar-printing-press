import React, { useEffect } from 'react';
import  useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, setSubmit }) => {
    const { progress, url } = useStorage(file);
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile]);
        
    return (
        <>
        <div>{progress}%</div>
        <div className='progress-bar' style={{width:progress +'%'}}></div>
        {progress===100 && setSubmit(false)}
        </>
    );
}

export default ProgressBar;