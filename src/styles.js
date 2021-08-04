import {makeStyles} from "@material-ui/core";

export const colors={
    //Orange
    primaryColor:"#f5cf6e",
    //Blueish
    secondaryColor:"#327fa8"
}


const useStyles = makeStyles((theme)=>({
    icon:{
        marginRight:"1px",
        marginLeft:"1px",
        color:"#327fa8"
    },
    iconContainer:{
        marginLeft:"10px"
    },
    appBar:{
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"#f5cf6e",
    },
    firstName:{
        fontSize:"30px",
        color:"#327fa8",
    },
    aboutMe:{
        marginTop:"150px",
        marginLeft:"50px",
        padding:"10px",
        width:"50%",
    },
    projectImage:{
        width:"50%",
    },
    projectDescription:{
        
    },
    projectContainer:{
        maxWidth:"100%",
        display:"flex",

    },
    emailForm:{
        position:"absolute",
        float:"left",
        left:"50%",
        top:"50%",
    }
}));

export default useStyles;