import React from 'react'

function Footer({todos, filteredTodos, setTodos, status, setStatus }) {

    // Listelemenin altındaki footer kısmını içeren kod bloğudur. ilk kısımda completed edilmemiş işlerden kaç adet kaldığını gösterir. Diğer kısım sadece sadece active işleri filtreler. Üçünücü kısım ise bitmiş işleri listeden temizler.

    const unCompleted = todos.filter((item) => item.completed === false);
    const completed = filteredTodos.filter((todo) => todo.completed === true);
  
    // Bitem işleri filtreleyen fonksiyon.
    const clearCompleted = (e) => {
      e.preventDefault();
      setTodos(todos.filter((todo) => todo.completed === false));
    };
    
    const changeStatus = (e) => {
      setStatus(e.target.id);
    };
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong> {`${unCompleted.length} items left`} </strong>
        </span>
  
        <ul className="filters">
          <li>
  
            <button
              onClick={changeStatus}
              className={status === "all" ? "selected" : ""}
              id="all"
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={changeStatus}
              className={status === 'active' ? 'selected' : ''} 
              id="active"
            >
              Active
            </button>
          </li>
          <li>
            <button
              
              onClick={changeStatus}
              className={status === "completed" ? "selected" : ""}
              id="completed"
            >
              Completed
            </button>
          </li>
        </ul>
  
        <button
          className={completed === 0 ? "hidden" : "clear-completed"}
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </footer>
    )
  }  

export default Footer