import React, {Component} from 'react';
import styled from 'styled-components';

import Login from './Components/Form/Login/Login';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
// import SearchField from './Components/Form/Search/SearchFilter';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import img from './images/hero.png';
// import Social from './Components/Social/Social';
import {footerLinks, title, quote, copyright} from './MockData/footer';
// import {title, items} from './MockData/dropdown';
// import {items} from './MockData/social';
import Button from './Components/Button/Button';
import {items} from './MockData/nav';
import {BrowserRouter as Router} from "react-router-dom";
import Banner from './Components/Banner/Banner';
import buttonData from './MockData/button';
import SelectField from './Components/Form/SelectField/SelectField';

const options = [
    {label:"1", value:1},
    {label:"2", value:2},
    {label:"3", value:3},
    {label:"4", value:4},
    {label:"5", value:5},
    {label:"6", value:6},
    {label:"7", value:7},
    {label:"8", value:8},
    {label:"9", value:9}
];

const StyledSelect = styled(SelectField)`
    width: 300px;
    padding: 20px;
`
class App extends Component {

    render(){
        let className = this.props.className;
        return (
        <Router>
            <div style={{width: "100%"}}>
                <Banner title={"Big Sale!"} subTitle={`Use Promo Code "Fall20" To Save 20% Off At checkout`} button={buttonData} />
                <StyledSelect label={"Quantity"} options={options} size={"md"}/>
                {/* <Navbar
                    bgColor={"black"}
                    txtColor={"gray"}
                    navItems={items}
                /> */}
                {/* <Hero 
                    height={640}
                    width={1920}
                    src={img}
                /> */}
                <Button size={'lg'} label={'Explore All Products'} borderColor={"gray"} txtColor={"red"} height={100} width={500} borderWidth={10} bghoverColor={"red"}/>
                <Footer title={title} quote={quote} columns={footerLinks} copyright={copyright}/> */
                {/* <Social
                    socialList={items}
                /> */}
            </div>
        </Router>
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