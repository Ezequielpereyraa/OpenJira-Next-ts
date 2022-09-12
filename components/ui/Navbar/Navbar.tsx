import { useContext } from "react"
import { MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { UIContext } from "../../../context/ui"

const Navbar = () => {
 const { openSideBar } = useContext(UIContext)
 return (
  <AppBar sx={{
   backgroundColor: 'red'
  }} position="sticky">
   <Toolbar>
    <IconButton
     onClick={openSideBar}
     size='large'
     edge='start'
    >
     <MenuOutlined />
    </IconButton>
    <Typography variant='h6'>Open Jira</Typography>
   </Toolbar>
  </AppBar>
 )
}

export default Navbar