import React, {useState, useEffect } from 'react';
import aios from 'axios';
import Axios from 'axios';

const fetchStockData = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        Axios.get('https://cors.io/?https://mboum.com/api/v1/qu/quote/?symbol=AAPL,F&apikey=vdxSh0PcgTcX82GT0LIJuDmjesuFoizUbkP4cbT2SkCK8bzaGQmBbwQn6eUj')
        .then(res => {
            console.log(res);
            console.log(`length is ${res.length}`)
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                    <li key = {post.bookValue}>{post.averageDailyVolume10Day}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default fetchStockData
