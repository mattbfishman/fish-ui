import React, {Component} from 'react';
import Login from './Components/Form/Login/Login';
import Card from './Components/Card/Card';



// @styled-icons/fa-solid/Fish
class App extends Component {

    render(){
        return <
        Card 
            header={"Test Header"} 
            imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhs7iHlbQgFNbCtlfCjjE-VOuoGuVbIyhGA&usqp=CAU"}
            subHeader={"This an example Test Subheader"}
            innerContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at libero eu enim placerat bibendum. Aliquam placerat eget nisi in interdum. Phasellus ac ante mollis dui egestas mollis in vel dolor. Fusce a leo lorem. Nunc ex enim, malesuada non arcu sit amet, varius aliquet nunc. Integer feugiat mi ac augue hendrerit, sit amet mattis nisl viverra."}
        />;
    }
}

export default App;