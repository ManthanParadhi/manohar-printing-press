import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    
    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <div className="img-wrap" key = {doc.id} onClick={()=> setSelectedImg(doc)}>
                    <img src={doc.url} alt = {doc.name}/>
                </div>
            ))}
        </div>
    )
}
export default ImageGrid;