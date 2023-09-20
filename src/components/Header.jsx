import React, {useState,useEffect} from 'react';

//styles
import "./styles/Header.scss";

const Header = () => {
    //date and time
    const [date, setDate] =useState(new Date());
       
    useEffect(() => {
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);

    return (

            <div className='header'>
                <div className='header-item1'>
                    <h1>Wointo</h1>
                </div>
                <div className='header-item2'>
                    <span>{date.toLocaleTimeString()}</span>
                    <span>{date.toLocaleDateString()}</span>
                </div>
            </div>

    );
};

export default Header;