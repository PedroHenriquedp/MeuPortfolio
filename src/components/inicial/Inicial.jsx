import { Height } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

function Inicial() {
  return (
    <Grid 
    container
    style={{
        display:'flex',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        height: '100vh'
    }}
    >
    <Grid item xs={6}>
    <Typography
    variant='h4'
    >
    Olá Povo bonito! 👋
    Me chamo
    </Typography>
    <img 
    src="https://i.imgur.com/p0Vz1Dt.gif" 
    alt="Logo Pedro Henrique"
    style={{
        width:'100%'
    }}
    />
    </Grid>
    <Grid item xs={6}>
        <img src="https://i.imgur.com/BuBXpo5.gif" alt="Gif do totoro do studio ghibli andando"/>
    </Grid>
        <Grid>

        </Grid>
    </Grid>
  )
}

export default Inicial
