import React from 'react'
import VansData from '../VansData'
import { useParams } from 'react-router-dom';


const VanDetail = () => {
    const { id } = useParams(); 

    // Find the van based on the id
    const van = VansData.find(van => {
        return van.id === id;
    });

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt="van" />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
};

export default VanDetail;


