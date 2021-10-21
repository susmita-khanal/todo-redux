const initialData={
    list:[]
}
const todoReducer=(state=initialData,action)=>{
        switch(action.type){
            case "ADD_TO_CART":
                const{id,data}=action.payload;
                return{
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id:id,
                            data:data
                    }
                ]
                }
                case "DELETE_FROM_CART":
                    const deleteItem=state.list.filter((elem)=>elem.id !== action.id)
                return{
                    ...state,
                    list:deleteItem
                }
                case "REMOVE_ALL":
                    return{
                        list:[]
                    }
                default:return state;
        
    }
}
export default todoReducer;