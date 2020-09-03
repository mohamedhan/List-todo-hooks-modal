import React from 'react'
import Todo from "./Todo"
function TodoList({todos,handleDelete,handleComplete,handleEdit}) {
    return (
        <div>
            {todos.map((todo)=>
                <Todo  key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete} />
                )}
        </div>
    )
}

export default TodoList
