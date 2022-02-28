export const initialState= { 
    basket:[],
    total:0,
    list:[],
    search:'',
    nameReducer:"",
    isLoggedIn:false
};

 
const reducer=(state,action)=>{  
    switch(action.type){
        case 'ADD_TO_BASKET' : 
           let flag=0;
           let newb=state.basket.map(b=>{
                    if(b.id===action.item.id){
                        flag=1
                        return {...b,quantity:b.quantity+1}
                    }else{
                        return b;
                    }
            }
           )
           
           if(flag===0){
               newb=[...newb,action.item]
           }
           return{
               ...state,
                basket:newb,
                total:state.total+action.item.price
           }
        case 'REMOVE_FROM_BASKET' :
            return{
                ...state,
                basket:[
                    ...state.basket.filter(b=>(
                        b.id!==action.item.id
                    ))
                ],
                total:state.total-action.item.quantity*action.item.price
            }
        case 'INCREASE_QUANTITY' :
            return{
                ...state,
                basket:[
                    ...state.basket.map(b=>(
                        b.id===action.item.id ?
                        {...b,quantity:b.quantity+1}:
                        b                        
                    ))
                ],
                total:state.total+action.item.price
            }
        case 'DECREASE_QUANTITY' :
            return{
                ...state,
                basket:[
                    ...state.basket.map(b=>(
                       (b.id===action.item.id && b.quantity>=2) ?
                       {...b,quantity:b.quantity-1}:
                       b                        
                    ))
                ],
                total:action.item.quantity>=2?state.total-action.item.price:state.total
            }
        case 'ADD_LIST_NAME':
            return{
                ...state,
                list:[
                    ...state.list,action.item
                ]
            }

         case 'DELETE_LIST':
            return {
                    ...state,
                    list:state.list.filter(l=>(
                        l.name!==action.listName
                      )
                    )
            
                }
        case 'ADD_TO_LIST':
            return {
                ...state,
                list:state.list.map(l=>(l.name===action.name)?
                    {...l,items:[...action.item,...l.items]}:l
                )
            }
        case 'DELETE_FROM_LIST' :
            return{
                ...state,
                list:state.list.map(l=>(l.name===action.listName)?
                    {...l,items:l.items.filter(listItem=>(listItem.id!==action.id))}:l
                )
            }
        case 'EDIT_LIST_ITEM' :
            return{
                ...state,
                list:state.list.map(l=>(l.name===action.items.listName)?
                {...l,items:l.items.map(listItem=>
                    (listItem.id===action.items.id)?
                    {...listItem,product:action.items.item}:
                    listItem
                    )}:l
                )
            }
        case 'UPDATE_SEARCH' :
            console.log("update");
            return {
                ...state,
                search:action.value
            }
        case 'CLEAR_SEARCH' :
            return {
                ...state,
                search:''
            }
        case 'UPDATE_NAME' :
            return {
                ...state,
                nameReducer:action.name
            }
        case 'SET_LOGGEDIN':
            return {
                ...state,
                isLoggedIn:true
            }
        default:
            return state;
    }

}

export default reducer;


