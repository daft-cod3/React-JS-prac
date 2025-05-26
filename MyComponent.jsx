import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
       setName("John Doe");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Age Increment</button>

            <p>Employment Status: {isEmployed ? "Employed" : "Unemployed"}</p>
            <button onClick={() => setIsEmployed(!isEmployed)}>
                Toggle Status
            </button>
        </div>
    );
}

export default MyComponent