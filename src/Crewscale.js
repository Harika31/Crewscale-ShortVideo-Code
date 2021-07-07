import React, { useEffect } from "react";
import Scrambler from 'scrambling-letters';

/*******
 * 
 * @author: harika
 */

export default function Crewscale() {
    const sentence = "Be part of the elite community of top 1% talent today with Crewscale";

    useEffect(() => {
        const myUseThis = () => {
            Scrambler({
                target: '#scramble-text-id',
                random: [1000, 7000],
                speed: 175
            });
        }
        myUseThis()
    }, [])
    
    return (
        <div style={{paddingTop: "100px"}}>
            <img className="stnd skip-lazy default-logo" width="" height="100px" alt="CrewScale" src="https://www.crewscale.com/wp-content/uploads/2021/05/crewscale_logo.svg"/>
            <h2 id="scramble-text-id" style={{paddingTop: "10px", fontSize: "30px"}}>{sentence}</h2>
            
        </div>
    )
}