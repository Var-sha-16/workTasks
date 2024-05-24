import { DECREMENT, INCREMENT } from "./action";

const intialState = {
    counters:[0,0,0,0],

  sum:0,
};

const counterReducer=(state=intialState,action)=>{
    switch(action.type){
        case INCREMENT :{
            const index=action.payload;
            if(state.counters[index]<10){
                const newCounters=[...state.counters];
                newCounters[index]++;
               return{
                ...state,
                counters:newCounters,
                sum:state.sum+1,
               }

            }
return state;

        }
        case DECREMENT :{
            const index=action.payload;
            if(state.counters[index]>0){
                const newCounters=[...state.counters];
                newCounters[index]--;
               return{
                ...state,
                counters:newCounters,
                sum:state.sum-1,
               }

            }
        
return state;

        }
    }}
   export default counterReducer;
