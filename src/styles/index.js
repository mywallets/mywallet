
import {makeStyles} from '@material-ui/core/styles'
const myStyle = makeStyles({
    body :{
        display : 'grid',
        placeItems : 'center' , 
        height : '100vh', 
        fontWeight :'300' , 
        lineHeight:'1'
    }, 
    //width = width + padding  + border 
    // height = height + padding  + border 
    div1: {
        width : '300px',
        height : '100px',
        border : '1px solid blue ', 
        boxSizing:'border-box',
        padding : '50px'

     },
    div2 : {
        width : '300px' , 
        height : '100px' ,
        padding : '50px', 
        border : '1px solid red',
        boxSizing:'border-box' 
    }


})
export default myStyle ;  