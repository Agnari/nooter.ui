import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {CardMedia, Container} from "@mui/material";
import {useNavigate } from 'react-router-dom';
export function Greeting(){
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/login");
  }
  const signUp = () => {
    navigate("/register");
  }
  const readArticles = () => {
    navigate("/home");
  }
  return (
<Box sx={{display:'flex', align:'center',  '& button': { m: 1 }, margin: 7 }}>
<Container sx={{maxWidth:'95vw', width:'90vw', align:'center'}}>
<CardMedia sx={{objectFit: "contain" }}
                                component="img"
                                width="350px"
                                height="350px"
                                image="noot.jpg"
                                title="Image title"
                            />


<div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15vh',
      }}>
        <Button
         onClick=
           {signUp}
         sx={{ maxWidth: '18vw', maxHeight: '5.9vh', minWidth: '7vw', minHeight: '5.9vh', backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous", filter: "drop-shadow(0px 1.5px 1.5px #404040)", transform: "translate(0vw, 0.4vh)" }}  size="large" variant="contained">Sign up</Button>
        <Button
         onClick=
         {logIn}
          sx={{ maxWidth: '9vw', maxHeight: '5.9vh', minWidth: '7vw', minHeight: '5.9vh', backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous", filter: "drop-shadow(0px 1.5px 1.5px #404040)", transform: "translate(0vw, 0.4vh)" }} size="large" variant="contained">Login</Button>

        <Button
         onClick=
         {readArticles}
          sx={{ maxWidth: '9vw', maxHeight: '5.9vh', minWidth: '7vw', minHeight: '5.9vh', backgroundColor: "#A97637", color: "white", borderRadius: 3, fontFamily: "Righteous", filter: "drop-shadow(0px 1.5px 1.5px #404040)", transform: "translate(0vw, 0.4vh)" }} size="large" variant="contained">Read articles</Button>

</div>
</Container>
</Box>
 );

}