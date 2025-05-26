import React, {useState} from 'react';

function Counter() {

    const[count, setCount] = useState(0)
    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

    const Reset = () => {
        setCount(0);
    }

    return(
        <div>
        <p>{count}</p>
        <button onClick={Increment}>Increase</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrease</button>
        </div>
    );
}

export default Counter