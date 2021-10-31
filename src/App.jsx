import React, {Component} from 'react';
import Login from './Components/Form/Login/Login';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
// import SearchField from './Components/Form/Search/SearchFilter';
import Navbar from './Components/Navbar/Navbar';
// import Social from './Components/Social/Social';
// import {footerLinks, title, quote, copyright} from './MockData/footer';
// import {title, items} from './MockData/dropdown';
// import {items} from './MockData/social';
import {items} from './MockData/nav';
class App extends Component {

    render(){
        return (
        <div style={{width: "100%"}}>
            <Navbar
                bgColor={"black"}
                txtColor={"gray"}
                navItems={items}
            />
            {/* <Social
                socialList={items}
            /> */}
        </div>
        );
    }
}

export default App;

 /* <Dropdown
                title={title}
                items={items}
                theme={"success"}
                toggle={true}
            />
            <Dropdown
                title={title}
                items={items}
                theme={"success"}
                toggle={false}
            /> */
            /* <Card 
                header={"Test Header"} 
                imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhs7iHlbQgFNbCtlfCjjE-VOuoGuVbIyhGA&usqp=CAU"}
                subHeader={"This an example Test Subheader"}
                innerContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at libero eu enim placerat bibendum. Aliquam placerat eget nisi in interdum. Phasellus ac ante mollis dui egestas mollis in vel dolor. Fusce a leo lorem. Nunc ex enim, malesuada non arcu sit amet, varius aliquet nunc. Integer feugiat mi ac augue hendrerit, sit amet mattis nisl viverra."}
            />;
            <Footer title={title} quote={quote} columns={footerLinks} copyright={copyright}/> */