import {makeStyles} from "@material-ui/core";

export const colors={
    primaryColor:"#f5cf6e",
    secondaryColor:"#02c4fa"
}


const useStyles = makeStyles((theme)=>({
    icon:{
        marginRight:"1px",
        marginLeft:"1px",
        color:"#02c4fa"
    },
    appBar:{
        backgroundColor:"#f5cf6e",
        color:"black" 
    },
    soundcloud:{
        width:"24px",
        height:"24px"
    }
}));

export default useStyles;