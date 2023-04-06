import { useState } from 'react'

const emptyInput = {todoName: "" , completed: false}

function Header({todos, addTodos}) {

    // Yapılacak işin girileceği input setState ile boş şekilde tanımlanıp, içerisine bir veri girildiğinde durumu set edecek kod. Nesneler global space de tanımlanıp değişken ile birlikte setState' e  atandı. 
    const [todo,setTodo] = useState(emptyInput)

    // input üzerinde yazı yazıldığında veri girişi yapıldığında anlık veri girişini gösterecek fonksiyon bloğu.
    const onChangeInput = (e) => {
        setTodo({...todo, todoName: e.target.value})
        console.log(e.target.value);
    }

    // Veri girişini submit edecek fonksiyon bloğu.

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