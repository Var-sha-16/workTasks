
export const INCREMENT ="INCREMENT";
export const DECREMENT ="DECREMENT";
export const increment=(index)=>({
type:INCREMENT,
payload:index,
})
export const decrement=(index)=>({
    type:DECREMENT,
    payload:index,
    });


