import { useEffect, useState } from "react";

const Route = ({path, children}) =>{
    const [currentpath, setCurrentpath] =useState(window.location.pathname);
//to prevent multiple services running each time when user navigates to another panel
    useEffect(()=> {
        const onLocationChange =() =>{
setCurrentpath(window.location.pathname);
        };

        window.addEventListener('popstate',onLocationChange);

        return () => {
            window.removeEventListener('popstate',onLocationChange);
       };
       
    },[]);


    return currentpath===path ? children : null;
};

export default Route;