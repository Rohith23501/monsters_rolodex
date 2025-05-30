// import {Component} from 'react'; 
import './search-box.styles.css';

const SearchBox = (props) => {
    const {className, placeholder, onChangeHandler} = props;
    return (
        <input 
        className={`search-box ${className}` }
        type="search" 
        placeholder={placeholder} 
        onChange={onChangeHandler}
        />
    )
}
// class SearchBox extends Component
// {
//     render()
//     {
//         const {className, placeholder, onChangeHandler} = this.props;
//         return (
//             <input 
//             className={`search-box ${className}` }
//             type="search" 
//             placeholder={placeholder} 
//             onChange={onChangeHandler}
//             />
//         )

//     }

// }

export default SearchBox;