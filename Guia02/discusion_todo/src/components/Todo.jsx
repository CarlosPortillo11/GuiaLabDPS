import React from 'react';

const Todo = ({todo,cantidad, index, deleteTodo}) => { //Estamos haciendo uso de un hook que nos permite acceder al estado en manera de argumento
    return(
        <>
            <tbody>
                <tr className='tableBody'>
                    <td>{todo}</td>
                    <td>{cantidad}</td>
                    <td> <button className='btn-delete' onClick={() => deleteTodo(index)}>x</button> </td>
                </tr>
            </tbody>
        </>
    )
}

export default Todo;