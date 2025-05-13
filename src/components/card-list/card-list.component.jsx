// import {Component} from 'react';
import './card-list.styles.css';
import Card from './card/card.component';

const CardList = (props) =>{
    const {monsters} = props;
    return (
        <div className="card-list">
            {monsters.map((monster)=>
            {
                
                return(
                        <Card key = {monster.id} monster={monster}/>
                        );
            })}
        </div>
    );
}
// class CardList extends Component 
// {
//     render()
//     {
//         const {some_monsters} = this.props;
//         return (
//             <div className="card-list">
//                 {some_monsters.map((monster)=>
//                 {
                    
//                     return(
                        
//                             <Card
//                             monster={monster}/>
                        
//                     );
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;