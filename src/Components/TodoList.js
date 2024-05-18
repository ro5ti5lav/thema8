
import React, { useState, useMemo, useCallback, useRef } from 'react';
import AddTodoModal from './AddTodoModal';

const TodoList = ({ initialTodos }) => {
    const [todos, setTodos] = useState(initialTodos);
    const modalRef = useRef(null);

    const addTodo = useCallback((title) => {
        const newTodo = { title, completed: false };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }, []);

    const removeTodo = useCallback((index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    }, []);

    const toggleCompletion = useCallback((index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, []);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.open();
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const memoizedTodos = useMemo(() => {
        return todos.map((todo, index) => (
            <li key={index} className="todo-item">
                <span
                    className={todo.completed ? 'completed' : ''}
                    onClick={() => toggleCompletion(index)}
                >
                    {todo.title}
                </span>
                <button onClick={() => removeTodo(index)}>Удалить</button>
            </li>
        ));
    }, [todos, removeTodo, toggleCompletion]);

    return (
        <div>
            <ul className="todo-list">{memoizedTodos}</ul>
            <button className="add-todo-button" onClick={openModal}>Добавить задачу</button>
            <AddTodoModal ref={modalRef} onAdd={(title) => {
                addTodo(title);
                closeModal();
            }} />
        </div>
    );
};

export default TodoList;
