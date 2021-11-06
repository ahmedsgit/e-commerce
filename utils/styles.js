import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    projectContainer:{
        position: 'relative',
    },
    navbar:{
        background: 'linear-gradient(to left,#00093c,#2d0b00)',
        '& a':{
            color: '#ffffff',
            marginLeft:10,
        },
    },
    main:{
        position: 'relative',
        minHeight: '80vh',
        marginBottom: '300px',
    },
    brand:{
        fontWeight: 'bold',
        fontSize:'1.5rem',
    },
    grow:{
        flexGrow:1,
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
    prodName:{
        fontSize:'1.2rem',
        fontFamily: 'sans'
    },
    footer:{
        position: 'absolute',
        display: 'flex',
        marginBottom:'-18rem',
        width: '100%',
        bottom: 0,
        background: 'linear-gradient(to left,#00093c,#2d0b00)',
        color: '#fff',
        padding: '10px 0 30px',
        borderTopLeftRadius: '125px',
        fontSize: '13px',
        lineHeight: '20px',
    },
    row:{
        width: '70%',
        paddingTop:'10px',
        margin: 'auto',
        display: 'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    column: {
        flexBasis:'25%',
        '& h3':{
            width: 'fit-content',
            margin:'10px',
            position: 'relative',
        },
        '& ul':{
            '& li':{
                listStyle:'none',
                '& a':{
                    textDecoration:'none',
                    color:'#fff',
                }
            }
        },
        '& input': {
            padding:'5px',
            '&::placeholder': {
                paddingLeft:'35px',
                color: '#ccc'
            }
        }
    }
});

export default useStyles;