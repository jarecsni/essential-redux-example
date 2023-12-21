import React, { useState } from 'react';
import { increment, decrement, incrementByAmount, selectCount } from './CounterSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementBy, setIncrementBy] = useState('2');
    const incrementByValue = Number(incrementBy) || 0;
    return (
        <div>
            <button
                onClick={() => { dispatch(increment()) }}
            >
                +
            </button>
            <div style={{ display: 'inline-block', padding: '10px' }}>{count}</div>
            <button
                onClick={() => { dispatch(decrement()) }}
            >
                -
            </button>
            <input
                aria-label='Set Increment Amount'
                value={incrementBy}
                onChange={(e) => setIncrementBy(e.target.value)}
            ></input>
            <button
                onClick={()=>dispatch(incrementByAmount(incrementByValue))}
            >
                Add amount
            </button>
        </div>
    );
}
