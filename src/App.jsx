import React, {Component} from 'react';
// import Login from './Components/Form/Login/Login';
// import AddForm from './Components/Form/AddForm/AddForm';
// import Card from './Components/Card/Card';
// import {Fish} from '@styled-icons/fa-solid/Fish';
// import SearchField from './Components/Form/Search/SearchField';
// import Navbar from './Components/Navbar/Navbar';
// import logo from './logo.png';
import TextField from './Components/Form/TextField/TextField';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


// @styled-icons/fa-solid/Fish
class App extends Component {

    // filter(e){
    //     console.log(e.target.value);
    //     // console.log("TEST");
    // }
    // test(e, form){
    //     // console.log(document.getElementById("addForm"));
    //     console.log(form);
    //     e.preventDefault();
    // }
    render(){
        // <TextField label={"Item Name"} size={'lg'}/>
        //         <TextField label={"Price"} size={'lg'}/>
        //         <SelectField label={"type"} options={options}/>
        //         <Button size={'md'} label={"Add"}/>

        // var options = [
        //     {label:"Bug", value:"bug"},
        //     {label:"Fish", value:"fish"},
        //     {label:"Misc", value:"misc"}
        // ],
        // header = "Add Item", 
        // fields = [
        //     {type:"text", label:"Item Name", size:"lg", id:"name"},
        //     {type:"text", label:"Price", size:"lg", id:"price"},
        //     {type:"select", label:"Type", size:"md", options: options, id:"type"},
        //     {type:"button", label:"Add", size:"md"}
        // ];
        // var rowData = [
        //     ["Dab","300","Fish"  ],
        //     ["Olive Flounder","800","Fish"  ],
        //     ["Red Snapper","3000","Fish"  ],
        //     ["Sea Butterfly","1000","Fish"  ],
        //     ["Carp","300","Fish"  ],
        //     ["Horse Mackerel","150","Fish"  ],
        //     ["Bitterling","900","Fish"  ],
        //     ["Loach","400","Fish"  ]];
        // var checkboxes = [
        //     {label: "Fish", name: "fish"},
        //     {label: "Insect", name:"insect"},
        //     {label: "Misc", name:"misc"}
        // ]

        // var navItems = [
        //     {path: "/", label: "Home"},
        //     {path: "/add", label:"Add"}
        // ]
        return( 
            // <Router>
                <div>
                    {/* <Button size={'sm'}/>
                    <Button size={'md'}/>
                    <Button size={'lg'}/>
                    <Button size={'xl'}/>
                    <TextField label={"Test Label"} size={'lg'}/>
                    <TextField placeholder={"Testing placeholder"} size={"xl"}/> */}
                    {/* <Login/> */}
                    <TextField size={'md'} placeholder={"Testing placeholder"}/>
                    {/* <AddForm header={header} fields={fields} submit={this.test}/> */}
                    {/* <Table rows={rowData}/> */}
                {/* <Card title={"Red Snapper"} typeLogo={<Fish/>} type={"fish"} price={"3000"}/> */}
                {/* <SearchField filter={this.filter} placeholder={"Search for a price"}/> */}
                {/* <FilterField checkboxes={checkboxes} changeFilter={this.test}/> */}
                    {/* <Navbar logo={logo} navItems={navItems}/> */}
                </div>
            // </Router>
        );
    }
}

export default App;