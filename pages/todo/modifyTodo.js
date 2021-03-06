import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tableStyles from '../common/styles/table.module.css'

export default function ModifyTodo(){
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setTodo({...todo, [name]:value})
    }
    return (
        <form onSubmit={ e => {
            e.preventDefault()
            dispatch(todoActions.taskRequest(todo))
            setTodo({
              userid: '', task: '', completed: ''
            })
        }}>
          <table className={tableStyles.table}>
          <thead>
              <tr>
                  <th colSpan={2}><h2>투두수정</h2></th>
              </tr>
          </thead>
          <tbody>
              <tr >
                  <td><label>할일수정</label></td>
                  <td>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={handleChange}
          />
          <button type="submit" style={{marginLeft:"20px"}}  className="btn btn__primary btn__lg">
            Modify
          </button></td >
              </tr>
              
                  </tbody>
              </table>
              </form>
       
    );
}