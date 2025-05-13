import React,{useState,useEffect} from 'react';
export default function RandomColor(){
    const [type,setType]=useState('hex');
    const[color,setColor]=useState('black');

    function randomUtility(length)
    {
        return Math.floor(Math.random()*length)
    }
    function handlecreateHEX(){
        // #675775
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor="#";
        for(let i=0;i<6;i++)
        {
            hexColor+=hex[randomUtility(hex.length)]
        }
        setColor(hexColor);
    }
    function handlecreateRGB(){
        let r=randomUtility(256);
        let g=randomUtility(256);
        let b=randomUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(()=>{
        if(type==='rgb')
            handlecreateRGB();
        else
        handlecreateHEX();
    },[type]);
    return (<div style={{width:'100vw',
        height:'100vh',
        background:color,
    
    }} className="container">
        <button onClick={()=>setType("hex")}>Create HEX color</button>
        <button onClick={()=>setType("rgb")}>Create   RGB color</button>
        <button onClick={type==='hex'? handlecreateHEX:handlecreateRGB}>Generate random color</button>
        <div style={{display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'white',
            fontSize:'60px',
            marginTop:'50px'
        }}>
            <h3>{type}</h3>
            <br /><br />
            <h1>{color}</h1>
        </div>
    </div>);
}