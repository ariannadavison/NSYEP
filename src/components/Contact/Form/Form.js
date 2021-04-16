import { Paper } from "@material-ui/core/";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "./form.css";

const Form = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      boxSizing: "border-box",
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center",
      height: 'fit-content',
      maxWidth: '50vw',
      margin: '1rem',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className="form__body">
          <div className="form__language">
            Condimentum sit condimentum ac ultricies etiam ipsum cursus adipiscing
            augue magnis odio habitant ultricies class ante.A hendrerit venenatis
            eget scelerisque a eu facilisi porta arcu a risus a dignissim cum.
          </div>
          <div className="form__contactName">
            First Name, Last Name
          </div>
          <div className="form__email">
            email@email.com
          </div>
          <div className="form__phone">
            1234567890
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Form;
