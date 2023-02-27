import { useState } from 'react'

const emptyInput = {todoName: "" , completed: false}

function Header({todos, addTodos}) {

    const [todo,setTodo] = useState(emptyInput)

    const onChangeInput = (e) => {
        setTodo({...todo, todoName: e.target.value})
        console.log(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if(todo.todoName === ""){
            return false;
        }
        addTodos([...todos,todo])
        setTodo(emptyInput)
    }


    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmitForm}>
                <input onChange={onChangeInput} value={todo.todoName} className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

export default Header;