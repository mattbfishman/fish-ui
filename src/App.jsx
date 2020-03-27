import React, {Component} from 'react';
// import Login from './Components/Form/Login/Login';
import Card from './Components/Card/Card';
import {Fish} from '@styled-icons/fa-solid/Fish';

// @styled-icons/fa-solid/Fish
class App extends Component {
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
            <Card title={"Red Snapper"} typeLogo={<Fish/>} type={"fish"} price={"3000"}/>
            </div>
        );
    }
}

export default App;