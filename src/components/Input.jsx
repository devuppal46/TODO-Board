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
            <form className='flex flex-row items-center gap-3'>
                <input
                    className='border rounded-lg py-1.5 px-2.5 text-lg'
                    type="text"
                    value={input} //the input box always shows whatever is stored in input.
                    placeholder="Add a new task"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                className='bg-violet-400 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-70 '
                onClick={handleAddTask}>Add</button>
            </form>
        </>
    );
}

export default Input;