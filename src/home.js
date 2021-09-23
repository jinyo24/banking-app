import React from 'react';
import Card from './components/card';
import { UserContext } from "./context";
import imgHome from './images/imgHome.jpg'; 

function Home() {
    const ctx = React.useContext(UserContext);
    return (
        <>
            <div className="bgPage bgHome">
                <Card
                    header = "Welcome Page"
                    title = "This is your bank"
                    body = {<img src={imgHome} className="img-fluid" alt="logo" />}
                />
            </div>    
        </>
    );
}

export default Home;