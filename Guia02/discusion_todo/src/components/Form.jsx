import React, { useState} from 'react';
import Todo from './Todo';

const Form = () => {

    const [halfTodo, setMidTodo] = useState(["producto","","cantidad",""]);
    const [todos, setTodos] = useState([ 
        {producto: 'Aguacate',
         cantidad: 2},
        {producto: 'Papitas',
         cantidad: 1},
        {producto: 'Macarrones',
         cantidad: 3},
        {producto: 'Cheetos',
         cantidad: 6}
    ]);

    const handleChange = e => { 
        const tempTodos = halfTodo;
        tempTodos[0] = e.target.name;
        tempTodos[1] = e.target.value;
        setMidTodo(tempTodos);
    } 

    const handleCantidad = e => {
        const tempTodos = halfTodo;
        tempTodos[2] = e.target.name;
        tempTodos[3] = e.target.value;
        setMidTodo(tempTodos);
    }

    const HandleClick = e => {
        if(Object.keys(halfTodo).length === 0 || halfTodo[1] === "" || halfTodo[3] === ""){ //Se valida que el input no se encuentre vacío.
            alert('El campo no puede estar vacío');
            return
        }
        const toSaveTodos = [...halfTodo];
        console.log(toSaveTodos);
        setTodos([...todos,{
            [toSaveTodos[0]]: [toSaveTodos[1]],
            [toSaveTodos[2]]: [toSaveTodos[3]]
        }]);
        setMidTodo(["producto","","cantidad",""]);
    }
    

    const deleteTodo = (índice) => {
        const newTodos = [...todos]; //Se guardan todos los todos del estado actual en un nuevo array.
        newTodos.splice(índice, 1); //Se elimina el todo deseado con splice (en que posición se borrará, número de elementos a borrar).
        setTodos(newTodos); //Se sobreescribe el estado con el arreglo al cual se le acaba de eliminar el elemento deseado.
    }

    return(
        <> {/*preventDefault() sirve para evitar que el navegador se refresque al hacer submit al formulario*/}
            <form className='toBuyForm' onSubmit={e => e.preventDefault()}> {/*Se crea un formulario que al hacer Submit guarde la "variable" e (la que contiene la información)*/}
                <label>Agregue el producto y la cantidad</label>
                <div>
                    <label>Producto: </label>
                    <input type="text" name='producto' onChange={handleChange}/> {/*Cada que cambie este apartado, se verá actualizado el state*/}
                </div>
                <div>
                    <label>Cantidad: </label>
                    <input type="number" name='cantidad' onChange={handleCantidad}/>
                </div>
                <button onClick={HandleClick}>Agregar</button> {/*Cuando se le haga click, desencadena el handler anteriormente programado y mostrará en consola el texto debido*/}
            </form>
           <table>
            <tbody>
                <tr className='tableHead'>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Borrar</th>
                </tr>
            </tbody>
            {todos.map((value, index) => (
                    //El JS se escribe entre llaves. Accedemos al estado "todos" y le decimos que lo imprima debido a que es un arreglo, con la ayuda de .map
                    ( <Todo todo={value.producto} cantidad={value.cantidad} key={index} index={index} deleteTodo={deleteTodo} /> ) //También se creó una función anonima con flecha, para acceder a las propiedades de los objetos en el arreglo.
                ))                                //Se le pasó como "prop" el todo al componente Todo.
            }
           </table>
        </>
    )
}

export default Form;