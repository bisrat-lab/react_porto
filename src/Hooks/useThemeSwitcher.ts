import { useEffect, useState } from "react";


const useThemeSwitcher = () => {
    const perferColor = "(perfer-color-scheme : dark)";
    const [mode, setmode]= useState<any>('');

    useEffect(()=>{
        const mediaQuery = window.matchMedia(perferColor);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPref){
                const check = userPref === 'dark' ? 'dark' : 'light';
                setmode(check);
                if(check === 'dark'){
                    document.documentElement.classList.add('dark')
                }else {
                    document.documentElement.classList.remove('dark')
                }
            }else {
                const check = mediaQuery.matches ? 'dark' : 'light';
                setmode(check);
                if(check === 'dark'){
                    document.documentElement.classList.add('dark')
                }else {
                    document.documentElement.classList.remove('dark')
                }
            }
        }
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    },[])

    useEffect (()=> {
         if(mode === 'dark'){
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark')
         }else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark')
         }
    },[mode])
  return [mode, setmode]
}

export default useThemeSwitcher