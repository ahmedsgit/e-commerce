import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor:'#203040',
        '& a':{
            color: '#ffffff',
            marginLeft:10,
        },
    },
    main:{
        minHeight: '80vh',
    },

    card:{
        transformStyle: "preserve-3d",
        minHeight:'30vh',
        width: '20rem',
        borderRadius:'30px',
        padding: '0rem 2rem',
        boxShadow:'0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)',
    },
    cardImg:{
        marginTop: '10px',
        minHeight:'35vh',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: '10px',
        '& img':{
            marginTop:'10px',
            borderRadius:'10px',
            width: '15rem',
            height:'20rem',
            zIndex:2,
        },

    },
    footer:{
        textAlign:'center',
    },
});

export default useStyles;