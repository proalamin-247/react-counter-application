import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((preCount) => preCount + 1);
    };

    const decrement = () => {
        setCount((preCount) => preCount - 1);
    };

    return (
        <div class="text-center bg-white p-4 space-y-5 bg-white rounded shadow">
            <div>
                <h1 class="text-2xl text-semibold" id="counter">{count}</h1>
            </div>
            <div class="space-x-2">
                <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment" onClick={increment}>
                    Increment
                </button>
                <button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement" onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    )
}
