import React,{useState} from 'react';
import {addToCart,deleteFromCart,removeAll} from "../actions/action" 
import {useDispatch,useSelector} from "react-redux"
import "./Todo.css"

const Todo = () => {
    const [inputData,setInputData]=useState(" ");
     const list = useSelector(state => state.todoReducer.list)

    const dispatch=useDispatch()
    return (
        <>
        <div className="todo">
        <div className="container">
            <h3>Add your list here<i className="far fa-long-arrow-down arrow-down"></i></h3>
            <input type="text" className="todo-input" placeholder="add items..." value={inputData} onChange={(e)=>setInputData(e.target.value)} />
            <i className="far fa-plus add-button" onClick={()=>dispatch(addToCart(inputData),setInputData(""))}></i>
           
        {
            list.map((elem)=>{
                return(
                <div className="addedlist" key={elem.id}>
                <h5>{elem.data}</h5>
                <i className="far fa-trash-alt delete-button" onClick={()=>dispatch(deleteFromCart(elem.id))}></i>
                </div>)
            })
        }
        <div className="showItems">
            <button className="remove-button" onClick={()=>dispatch(removeAll())}>Remove All</button>
        </div>
        </div> 
        </div>  
        </>
    )
}

export default Todo
