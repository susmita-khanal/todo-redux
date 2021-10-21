export const addToCart=(data)=>{
    return{
        type:"ADD_TO_CART",
        payload:{
            id:new Date().getTime().toString(),
            data:data
    }
}
}
export const deleteFromCart=(id)=>{
    return{
        type:"DELETE_FROM_CART",
        id
    }
}
export const removeAll=()=>{
    return{
        type:"REMOVE_ALL",
        
    }
}