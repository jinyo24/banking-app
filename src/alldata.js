import React from 'react';
import { UserContext } from "./context";

function AllData() {
    const {users} = React.useContext(UserContext);
    return (
        <>
            <div className="bgPage bgAllData ">
                <div className="card mb-3 shadow" style= {{width:"98%", minWidth:"300px", marginTop: "75px"}}>
                <div className="card-header bg-info">All Data</div>
                <div className="card-body text-body">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.users.map((element,i) => {                                 
                                if (i!==0)
                                {console.log(element.password);
                                    return (
                                    <tr key={element.id}>
                                        <th scope="row" key={element.id}>{i}</th>
                                        <td key={element.id}>{element.name}</td>
                                        <td key={element.id}>{element.email}</td>
                                        <td key={element.id}>{element.password}</td>
                                        <td key={element.id}>{element.balance}</td>
                                    </tr>
                                    )} return (console.log("empty default element"));
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
                
            </div>    
        </>
    );
}

export default AllData;