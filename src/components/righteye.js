import React, {useEffect, useState} from 'react';


export const Righteye = () =>{

    const [cursorPos, setCursorPos] = useState({x:0, y:0});

    useEffect(()=>{
        window.addEventListener("mousemove", handleMouse);

        return ()=>{
            window.removeEventListener("mousemove", handleMouse);
        }
    });

    const handleMouse = (e) =>{
        setCursorPos({x: e.clientX, y:e.clientY});
        
        const righteyeball = document.getElementById("righteyeball");
        righteyeball.style.top =  8 + Math.min(cursorPos.y/20, 30) + "px";
        righteyeball.style.right = Math.min(75-cursorPos.x/23, 62)+ "px";
    };

    return(
        <div id="righteye">
            <div id="righteyeball">
            </div>
        </div>

        
        
    );
};

export default Righteye;