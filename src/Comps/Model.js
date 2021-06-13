import React from 'react';
import { motion } from 'framer-motion';

export const Model = ({ selectedImg, setSelectedImg }) => {
    const deselect = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
    return (
        
            <motion.div className="backdrop" onClick={deselect} initial={{opacity:0}} animate={{opacity:1}}>
                <motion.div className="white" initial={{scale:0}} animate={{scale:1}}>
                    <img className="modelimg" src={selectedImg.url} alt='' />
                    <div className="spec">
                        <p>ID no : <b>{selectedImg.idno}</b></p>
                    </div>
                    <div className="specprice">
                    <hr /><p>Price for <b>100</b> card : {selectedImg.price1}</p><hr />
                        <p>Price for <b>500</b> card : {selectedImg.price2}</p><hr />
                        <p>Price for <b>1000</b> card : {selectedImg.price3}</p><hr />
                    </div>

                </motion.div>

            </motion.div>
            
    )
}
