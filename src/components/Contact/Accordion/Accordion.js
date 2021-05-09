import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ExpandIcon = <FontAwesomeIcon icon={faChevronRight} />;

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    flexBasis: "400px",
    flexGrow: "1",
    margin: "1rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    textTransform: "uppercase",
  },
  body: {
    width: "100%",
  },
  noPadding: {
    padding: "0",
    // marginBottom: "0.5rem",
  },
  title: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.002), 0 1px 2px rgba(0,0,0,0.20)",
  },
}));

export default function SimpleAccordion({ title, text, unique }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion >
        <AccordionSummary
          expandIcon={ExpandIcon}
          aria-controls={`panel${unique}-content`}
          id={`panel${unique}-header`}
          className={classes.title}
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.noPadding}>
          <Typography className={classes.body}>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
