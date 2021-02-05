import React, { useState } from 'react'
import Header from '../../Pages/Browse/components/Header'
import HomeFooter from '../HomeFooter';

export const MainLayout = ({children}) => {
    const [blackHeader, setBlackHeader] = useState(false);
    React.useEffect(()=>{
        const scrollListener = () => {
          if(window.scrollY > 10) {
            setBlackHeader(true);
          } else {
            setBlackHeader(false);
          }
        }
    
        window.addEventListener('scroll', scrollListener);
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
      }, []);
    return (
        <>
          <Header black={blackHeader}/>
                {children}
            <HomeFooter/>
        </>
    )
}
