import React from 'react';

const Todo = ({todo, index, deleteTodo}) => { //Estamos haciendo uso de un hook que nos permite acceder al estado en manera de argumento
    return(
        <div className='list'>
            <h3>{todo}</h3>
            <button className='btn-delete' onClick={() => deleteTodo(index)}>x</button>
            {/*Se creó un evento con función anonima que permite activar una función "deleteTodo"  con un argumento 
            que contendrá la posición del elemento que se quiere borrar en el state con array del componente Form */}
        </div>
    )
}

export default Todo;