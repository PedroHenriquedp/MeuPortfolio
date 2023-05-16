import { Height } from "@mui/icons-material"
import { Divider, Grid, Typography } from "@mui/material"

function Sobre(){
    return(
        <Grid container spacing={1}
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}
        >
            <Grid item sx={6} >
                <img 
                src="https://i.imgur.com/TeoWqsD.gif"
                alt=""
                style={{
                    height: "20vh", 
                    width: "auto",
                    marginTop: '-70px'
                }}/>
            </Grid>
            <Grid item sx={6}>
                <Typography
                variant='h2'
                style={{
                    height: "10vh", 
                    width: "auto",
                    marginTop:'-10px'
                }}
                >
                Sobre
                </Typography>
            </Grid>
        </Grid>
    )
}



export default Sobre