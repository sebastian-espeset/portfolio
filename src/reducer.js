export const initialState={
    viewerName:"",
    email:"",
    message:"",
    key:Date.now()
};

export const reducer= (state,action)=>{
    switch(action.type){
        case "UPDATE_FORM_DATA":
            return(
                pass
            )
        default:
            return state
    }
};