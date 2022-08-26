import React, {useState} from 'react';
import Todo from './Todo';

const Form = () => {

    const [todo, setTodo] = useState({});//Se declara un estado conformado por un solo objeto ({})
    const [todos, setTodos] = useState([ //Se declara un estado conformado por un array ([]) que contiene objetos ({}).
        {todo: 'todo1'},
        {todo: 'todo2'},
        {todo: 'todo3'},
        {todo: 'todo4'}
    ]);

    const handleChange = e => setTodo({[e.target.name]: e.target.value}); //Se crea un trigger de evento, que seteará un objeto, índicandole el nombre (en base al input donde proviene) y valor del mismo.
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){ //Se valida que el input no se encuentre vacío.
            alert('El campo no puede estar vacío');
            return
        }
        setTodos([...todos, todo]); //Se "sobreescribe" el estado con el array de objetos, con el array de objetos que ya poseía (...) más el nuevo objeto que almacena el otro estado.
    }

    const deleteTodo = (índice) => {
        const newTodos = [...todos]; //Se guardan todos los todos del estado actual en un nuevo array.
        newTodos.splice(índice, 1); //Se elimina el todo deseado con splice (en que posición se borrará, número de elementos a borrar).
        setTodos(newTodos); //Se sobreescribe el estado con el arreglo al cual se le acaba de eliminar el elemento deseado.
    }

    return(
        <> {/*preventDefault() sirve para evitar que el navegador se refresque al hacer submit al formulario*/}
            <form onSubmit={e => e.preventDefault()}> {/*Se crea un formulario que al hacer Submit guarde la "variable" e (la que contiene la información)*/}
                <label>Agregar tarea</label><br />
                <input type="text" name='todo' onChange={handleChange} /> {/*Cada que cambie este apartado, se verá actualizado el state*/}
                <button onClick={handleClick}>Agregar</button> {/*Cuando se le haga click, desencadena el handler anteriormente programado y mostrará en consola el texto debido*/}
            </form>
           {
            todos.map((value, index) => (
                //El JS se escribe entre llaves. Accedemos al estado "todos" y le decimos que lo imprima debido a que es un arreglo, con la ayuda de .map
                ( <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} /> ) //También se creó una función anonima con flecha, para acceder a las propiedades de los objetos en el arreglo.
            ))                                //Se le pasó como "prop" el todo al componente Todo.
           }
        </>
    )
}

export default Form;