import React, {useState} from 'react';

const DisplayTodo = (props) => {

    const {todoList, setTodoList} = props;

    const deleteTodo = (idFromBelowTodoDelete) => {
        setTodoList(todoList.filter((todo, index) => todo.id !== idFromBelowTodoDelete));
    }

    const handleCheckbox = (todo) => {
        todo.toggleToDoCheckBox = !todo.toggleToDoCheckBox;
        setTodoList([...todoList]);
    }

    const styled = (toggleToDoCheckBox) => {
        if(toggleToDoCheckBox === true) {
            return "completed"
        }
        else {
            return "notCompleted"
        }
    }

    return (
        <div>
            <div>

                {   // in the '<p>{todo.newTodo}</p>', we need to reference the object 'newTodo' in the form.js 'handleSubmitTodo' function or else we get an error.  '<p>{todo}</p>' will give an error.
                    todoList.map((todo, index) => ( 
                        <div key={index}> 
                        <input onClick={() => handleCheckbox(todo)} type="checkbox" style={{marginRight: "10px"}} />
                        <span className={styled(todo.toggleToDoCheckBox)}>{todo.newTodo}</span> 
                            <button onClick={()=> deleteTodo(todo.id)} style={{marginLeft: "10px"}} >Delete</button>
                        </div>// 'styled' in <p> is used when we write a css function in our file.  On top 'const styled' is used and the values 'completed' and 'notCompleted' are set in the 'App.css' file. 
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayTodo;