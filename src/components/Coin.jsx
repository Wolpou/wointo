import React from 'react';

//styles
import "./styles/Coin.scss";

const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {
    return (
        <div className='coin'>
            <img src={image} alt="coinimage"/>
            <span className='name'>{name}</span>
            <span className='symbol'>{symbol.toUpperCase()}</span>
            <span className='cprice'>{price.toLocaleString()} $</span>
            <span className={priceChange < 0 ? 'manfi' : 'mosbat'}>{priceChange} %</span>
            <span className='market'>{marketCap.toLocaleString()} $</span>
        </div>
    );
};

export default Coin;