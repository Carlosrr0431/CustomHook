import { useState } from "react"


export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = ( value = 2 ) => {
        setCounter( (current) => current + value );
    }

    const decrement = (value = 2) => {
        if(counter <= 1 ) return;
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter(10);
    }

    
    return {
        counter,
        increment,
        decrement,
        reset
    }

}