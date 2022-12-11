import ClockLoader from "react-spinners/ClockLoader";
import {Box} from "@mui/material";
import Swal from 'sweetalert2'

export function LogOut(){

    setTimeout(() => {
        window.location.href = "/";
      }, 1000);

        Swal.fire({
            title: 'You have successfully logged out!',
            showConfirmButton: false,
            position: 'center',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

    return( 

            <Box sx={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

                <ClockLoader color="#010101" size={200} />

            </Box>

        )
}