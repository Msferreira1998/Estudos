import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Tarefas.css';


export default function Tarefas({tarefa, handleEdit, handleDelete}){
  return(
    <ul className="tarefas">
    {tarefa.map((tarefa, index )=> (
      <li key={tarefa}>{tarefa}
      <span>
        <FaEdit onClick={(e) => handleEdit(e, index)} className="edit"/>
        <FaWindowClose onClick={(e)=> handleDelete(e, index)} className="close"/>
      </span>
      </li>
    ))}
  </ul>
  )
}

Tarefas.propTypes = {
  tarefa: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
