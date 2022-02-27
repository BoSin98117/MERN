import React, {useState} from 'react';

const Todo = (props) => {

    const {todoList, setTodoList} = props;

    const [newTodo, setNewTodo] = useState("");

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        setTodoList([...todoList, { // Instead of adding just a 'newTodo' here, we want to add an OBJECT because we want to include an 'id' as well so that we can reference the 'id' when we delete an item.
            newTodo: newTodo,
            id: Math.floor(Math.random() * 10000).toString(),
            toggleToDoCheckBox: false
        }]);
        setNewTodo("");
    }



    return (
        <div>
            <form onSubmit={handleSubmitTodo}>
                <div>
                    <label><h1>Todo</h1>  </label>
                    <input onChange={(e) => setNewTodo(e.target.value)} type="text" value={newTodo}/>
                </div>

                <div>
                    <button style={{marginBottom: "20px"}}>Add Todo</button>
                </div>
            </form>
        </div>
    );
};

export default Todo;