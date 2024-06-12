import React, {useEffect, useState} from 'react';


export const Lefteye = () =>{

    const [cursorPos, setCursorPos] = useState({x:0, y:0});

    useEffect(()=>{
        window.addEventListener("mousemove", handleMouse);

        return ()=>{
            window.removeEventListener("mousemove", handleMouse);
        }
    });

    const handleMouse = (e) =>{
        setCursorPos({x: e.clientX, y:e.clientY});
        
        const lefteyeball = document.getElementById("lefteyeball");
        lefteyeball.style.top =  8 + Math.min(cursorPos.y/20, 30) + "px";
        lefteyeball.style.left =   Math.min(cursorPos.x/23, 55) + "px";
    };

    return(
        <div id="lefteye">
            <div id="lefteyeball">
            </div>
        </div>

        
        
    );
};

export default Lefteye;