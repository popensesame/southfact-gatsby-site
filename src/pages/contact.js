import React from "react"
import ButtonAppBar from '../components/AppBar'
import Typography from '@material-ui/core/Typography';

const contact = () => (
  <React.Fragment>
    <ButtonAppBar/>
    <Typography variant="h4">
      Contact
    </Typography>
    <Typography variant="h5">
      If you have any questions, comments, or concerns please send an email to info@southfact.com 
    </Typography>
  </React.Fragment>
)

export default contact