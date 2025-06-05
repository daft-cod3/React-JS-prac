import React,{useState , createContext} from 'react'
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext();

function ComponentA(){

    const[user] = useState("Daft");

    return(
        
        <div className="box">
            <h1>CompnentA</h1>
            <p>{`Hello ${user}`}</p>

            <UserContext.Provider value={user}>
                 <ComponentB user={user}/>
           </UserContext.Provider>
        </div>

    )
}

export default ComponentA