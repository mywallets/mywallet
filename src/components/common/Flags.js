import React from 'react' ; 
import usaflag from '../../imgs/usaflag.png'
import ukflag from '../../imgs/ukflag.png' 
import chinaflag from '../../imgs/chinaflag.png' 
export default function  Flags (){

return <>

<div className="flag_container">
    
    <div className="border-gradient border-gradient-green"> 
        <img src={usaflag} alt="usa flag"/>
        <p>19000$</p>

    </div>

    <div>
        <img src={ukflag} alt="uk flag"/>
            <p>15000*</p>

    </div>

    <div>
        <img src={chinaflag} alt="china flag"/>
        <p>4999999</p>

    </div>
</div>

</>

}

