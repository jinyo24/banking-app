import React from 'react';
import Card from './components/card';
import imgHome from './images/imgHome.svg'; 

function Home() {

    return (
        <>
            <div className="bgPage bgHome">
                <Card
                    header = "Welcome to"
                    title = "BadBank"
                    text = "Earn more, save more, grow more. It can't be bad!"
                    body = {<>
                        <img src={imgHome} className="img-fluid" alt="logo"/>
                        <h6 style={{fontSize: "12px"}}>Image courtesy of <a href='https://www.freepik.es/vectores/negocios'>www.freepik.es</a></h6></>
                    }
                />
            </div>    
        </>
    );
}

export default Home;