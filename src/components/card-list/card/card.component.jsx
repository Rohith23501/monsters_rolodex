// import { Component } from "react";

import './card.styles.css';

const Card = (props) =>{
    const {name, email, id} = props.monster;
    return (
            <div  className="card-container" >
                <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        
    );
}
// class Card extends Component{
//     render(){
//         const {name, email, id } = this.props.monster;
//         return (
//             <div className="card-container">
//                 <div className='card-container' key={id}>
//                     <img
//                     alt={`monster ${name}`}
//                     src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                     <h1>{name}</h1>
//                     <p>{email}</p>

//                 </div>
//             </div>
//         );
//     }

// }

export default Card;