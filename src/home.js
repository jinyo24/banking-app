import React from 'react';
import Card from './components/card';
import { UserContext } from "./context";
import imgHome from './images/imgHome.jpg'; 

function Home() {
    const ctx = React.useContext(UserContext);
    return (
        <>
            <h1>HOME PAGE</h1>
            <br/>
            <p>{JSON.stringify(ctx)}</p> 
            <br/>
            <Card
                header = "Welcome Page"
                title = "This is your bank"
                body = {<img src={imgHome} className="img-fluid" alt="logo" />}
            />    
        </>
    );
}

export default Home;