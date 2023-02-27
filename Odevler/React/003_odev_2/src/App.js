import Header from './components/Header'
import Section from './components/Section';
import Footer from './components/Footer';
import InfoFooter from './components/InfoFooter';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }, [])


  useEffect(() => {
    const filterHandler = () => {

      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    saveLocalTodos()
    filterHandler();
    // eslint-disable-next-line
  }, [todos, status]);

  // Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  
  return (
    <>
      <section className="todoapp">
        <Header 
          todos = {filteredTodos}
          addTodos = {setTodos}
        />
        <Section
          todos={filteredTodos}
          setTodos={setTodos}
        />
        <Footer 
          todos={todos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
        />
      </section>
      <InfoFooter />

    </>
  );
}

export default App;
