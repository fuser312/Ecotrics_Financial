import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Axios from 'axios';


const LiveQuote = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        console.log("hello");
        Axios.get('http://mboum.com/api/v1/qu/quote/?symbol=AAPL,F&apikey=vdxSh0PcgTcX82GT0LIJuDmjesuFoizUbkP4cbT2SkCK8bzaGQmBbwQn6eUj')
        .then(res => {
            console.log()
            console.log(res);
            console.log(`length is ${res.data.length}`)
            setPosts(res.data)
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
                    <li key = {post.bookValue}>Ye data hai API se  {post.averageDailyVolume10Day}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LiveQuote











// import React, { Component } from 'react';

// class LiveQuote extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }
//     }

//     componentDidMount() {
//         fetch('http://mboum.com/api/v1/qu/quote/?symbol=AAPL,F&apikey=vdxSh0PcgTcX82GT0LIJuDmjesuFoizUbkP4cbT2SkCK8bzaGQmBbwQn6eUj')
//             .then(res => res.json()).then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json,
//                 })
                
//             });
           
//     }

//     render(){

//         var { isLoaded, items } = this.state;

//         if(!isLoaded){
//             return <div>Loading...</div>;
//         }

//         else{

//         return (
//             <div className= "data">
//               Data is loaded
//             </div>
//         );
//         }
//     }
// }

// export default LiveQuote;