import React, {useState,useEffect} from 'react';

//api
import {getCoin} from "../services/Cryptoapi";

//component
import Coin from './Coin';

//style
import "./styles/Crypto.scss";

//header
import Header from './Header';


const Crypto = () => {

//states
    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");

//getcoins
     useEffect(()=>{
         const fetchAPI = async ()=>{
             const data = await getCoin();
             console.log(data);
             setCoins(data);
         }
         fetchAPI();
     },[])
//searchhandler
     const searchHandler = event => {
           setSearch(event.target.value)
     }
     
     const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));


    return (
        <div className='container'>

            
            <Header />    
            
            {
                coins.length ? 
            
            <div className='coins'>
                 {
                    searchedCoins.map(coin => <Coin 
                     key={coin.id}
                     name={coin.name}
                     image={coin.image}
                     symbol={coin.symbol}
                     price={coin.current_price}
                     marketCap={coin.market_cap}
                     priceChange={coin.market_cap_change_percentage_24h}
                    />)
                 }
            </div> :
                <div className="loader">
                    <h3>Loading</h3>
                </div>
            }
            </div>

        
    );
};

export default Crypto;