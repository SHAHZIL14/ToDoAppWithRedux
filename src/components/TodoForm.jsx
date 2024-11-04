import { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../todoSlice";
const  TodoForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return (<>
        <form onSubmit={addTodoHandler} className="space-x-3 mt-5 w-full flex justify-center">
            <input
                type="text"
                className="bg-white rounded w-1/4 border border-gray-700 focus:border-white focus:ring-2 focus:ring-gray-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-green-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    </>)
}
export default TodoForm;