import React, {Component} from 'react';
// import Login from './Components/Form/Login/Login';
import Table from './Components/Table/Table';

class App extends Component {
    render(){
        return( 
            <div>
                {/* <Button size={'sm'}/>
                <Button size={'md'}/>
                <Button size={'lg'}/>
                <Button size={'xl'}/>
                <TextField label={"Test Label"} size={'lg'}/>
                <TextField placeholder={"Testing placeholder"} size={"xl"}/> */}
                {/* <Login/> */}
                <Table/>
            </div>
        );
    }
}

export default App;