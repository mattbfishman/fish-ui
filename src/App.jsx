import React, {Component} from 'react';
// import Login from './Components/Form/Login/Login';
// import Card from './Components/Card/Card';
// import {Fish} from '@styled-icons/fa-solid/Fish';
// import SearchField from './Components/Form/Search/SearchField';
import FilterField from './Components/Form/Filter/FilterField';


// @styled-icons/fa-solid/Fish
class App extends Component {

    // filter(e){
    //     console.log(e.target.value);
    //     // console.log("TEST");
    // }
    test(event){
        console.log(event.target.checked);
        debugger;
    }
    render(){
        // var rowData = [
        //     ["Dab","300","Fish"  ],
        //     ["Olive Flounder","800","Fish"  ],
        //     ["Red Snapper","3000","Fish"  ],
        //     ["Sea Butterfly","1000","Fish"  ],
        //     ["Carp","300","Fish"  ],
        //     ["Horse Mackerel","150","Fish"  ],
        //     ["Bitterling","900","Fish"  ],
        //     ["Loach","400","Fish"  ]];
        var checkboxes = [
            {label: "Fish", name: "fish"},
            {label: "Insect", name:"insect"},
            {label: "Misc", name:"misc"}
        ]
        return( 
            <div>
                {/* <Button size={'sm'}/>
                <Button size={'md'}/>
                <Button size={'lg'}/>
                <Button size={'xl'}/>
                <TextField label={"Test Label"} size={'lg'}/>
                <TextField placeholder={"Testing placeholder"} size={"xl"}/> */}
                {/* <Login/> */}
                {/* <Table rows={rowData}/> */}
            {/* <Card title={"Red Snapper"} typeLogo={<Fish/>} type={"fish"} price={"3000"}/> */}
            {/* <SearchField filter={this.filter} placeholder={"Search for a price"}/> */}
            <FilterField checkboxes={checkboxes} changeFilter={this.test}/>
            </div>
        );
    }
}

export default App;