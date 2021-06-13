import React, { useEffect } from 'react';

const Navigation = () => {

    const run=()=>{
        console.log("i performed")
    }   
    useEffect(() => {
        // while (true){
        //     run()
        // }
        
     
    });
    return (
        <div>
            <nav>
                <section className="cd-intro">
                    <h1 className="cd-headline letters rotate-3">
                        <span>Manohar</span>
                        <span className="cd-words-wrapper">
                            <b className="is-visible">Printing Press</b>
                            <b>Photo Studio</b>
                        </span>
                    </h1>
                </section>
            </nav>
        </div>
    )
}

export default Navigation;