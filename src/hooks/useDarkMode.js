import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = (key)=>{
    const [value, setValue] = useLocalStorage(key)
    useEffect(() => {
        const body = document.body;
        if(value === true){
            
        return  body.classList.add("dark-mode");
        }else {
            return body.classList.remove("dark-mode")
        }

    },[setValue])
}