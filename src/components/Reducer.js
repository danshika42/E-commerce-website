export const initialState= { 
    basket:[],
    total:0,
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
                basket:newb,
                total:state.total+action.item.price
           }
        case 'REMOVE_FROM_BASKET' :
            return{
                basket:[
                    ...state.basket.filter(b=>(
                        b.id!=action.item.id
                    ))
                ],
                total:state.total-action.item.quantity*action.item.price
            }
        case 'INCREASE_QUANTITY' :
            return{
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
                basket:[
                    ...state.basket.map(b=>(
                       (b.id===action.item.id && b.quantity>=2) ?
                       {...b,quantity:b.quantity-1}:
                       b                        
                    ))
                ],
                total:action.item.quantity>=2?state.total-action.item.price:state.total
            }
    }

}

export default reducer;


