import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React from 'react'

const StyledGrid=styled(Grid)`
padding:5px;
`
const Competition = () => {
  return (
    <Grid container sx={{padding:'0 10vw'}}>
        <StyledGrid item lg={12} md={12} sm={12} xs={12} sx={{textAlign:'center'}}>
            <Typography variant='h2' sx={{fontFamily:'TechnoBoard'}} gutterBottom>
                Event Title
            </Typography>
        </StyledGrid>

        <Grid container style={{background: 'rgba(150, 150, 150, 0.192)',backdropFilter: 'blur(60px)',boxShadow: '0 0 60px #23527e',borderRadius:'20px',padding:'20px',alignItems:'center'}}>
        <StyledGrid item lg={5} md={6} sm={12} xs={12}>
            <Box>
                <img src='https://images.unsplash.com/photo-1603783032802-460a687c4eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbHBhcGVyJTIwaGR8ZW58MHx8MHx8&w=1000&q=80' alt='eventlogo' width='90%' height='400px' style={{borderRadius:'20px'}}/>
                <br/>
                <br/>
                <Box sx={{width:'90%',display:'flex',justifyContent:'space-between'}}>

                <Button variant='outlined' sx={{width:'45%'}}>
                    Register
                </Button>
                <Button variant='outlined' sx={{width:'45%'}}>
                    Rule Book
                </Button>
                </Box>
            </Box>
        </StyledGrid>
        <StyledGrid item lg={7} md={6} sm={12} xs={12}>
        <Typography variant='h5' sx={{fontFamily:'Spaceboards',textAlign:'center'}} gutterBottom>
            Event Description
        </Typography>
        <Box sx={{padding:'10px 20px',border:'1px solid #7deaf8',borderRadius:'5px',wordWrap:'break-word'}}>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Box component='span'><Typography component='span'>heading</Typography><Typography component='span'>content</Typography></Box>
            <Typography variant='h4' sx={{fontWeight:600}}>Description</Typography>
            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Box>
        </StyledGrid>
        </Grid>
    </Grid>
  )
}

export default Competition