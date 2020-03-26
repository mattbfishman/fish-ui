import React, {Component} from 'react';
// import Login from './Components/Form/Login/Login';
import SearchField from './Components/Form/Search/SearchField';

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
                <SearchField/>
            </div>
        );
    }
}

export default App;