import {useState} from 'react';

const Input = ({taskList , setTaskList}) => {
    const [input , setInput] = useState(""); // state to hold the current value of the input box.

    const handleAddTask = (e) =>{
        e.preventDefault() // stops the page from refreshing, which happens by default when you submit a form in HTML.
        setTaskList([...taskList , input ]); // we spread the existing taskList and add the new input to it.
        setInput("");
    }
    return (
        <>
            <form >
                <input
                    className='border rounded px-2'
                    type="text"
                    value={input} //the input box always shows whatever is stored in input.
                    placeholder="Add a new task"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAddTask}>Add</button>
            </form>
        </>
    );
}

export default Input;