import {use, useState} from 'react';
const Input = () => {
    const [input , setInput] = useState("");
    console.log(input);
    return (
        <>
            <form >
                <input
                    className='border rounded px-2'
                    type="text"
                    value={input}
                    placeholder="Add a new task"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button >Add</button>
            </form>
        </>
    );
}

export default Input;