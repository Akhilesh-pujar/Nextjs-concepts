import Link from 'next/link';
import React from 'react'
import { Todo } from '../../typing';

const fetchTodos = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos :Todo[] = await res.json();
    console.log("this todos",todos);
    return todos;

};

async function TodoList() {
    const todos = await fetchTodos();
  return 
    <>
     {todos.map((todo)=>{
      <p key={todo.id}>
        <Link href={`/todos/${todo.id}`}>Todo:{todo.id}</Link>
      </p>
     })}
      
    </>;
  
}

export default TodoList
