import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import "./individualStories.css";

const IndividualStories = () => {
  let { state } = useLocation();

  const useStyles = makeStyles({
    root: {
      width: "100%",
      maxWidth: 500,
    },
    headers: {
      textTransform: "uppercase",
      paddingRight: "1rem",
      fontWeight: "bold",
    },
    name: {
      textTransform: "capitalize",
      fontWeight: "bold",
      paddingRight: "1rem",
    },
    age: {
      paddingRight: "1rem",
    },
    job: {
      textTransform: "italics",
      paddingRight: "1rem",
    },
  });

  const styles = useStyles();

  return (
    <div className="individualStories__container margins">
      <img
        className="individualStories_studentPicture"
        src={state.image}
        alt={`${state.name}`}
      />

      <div className="individualStories__nameDetailsBox">
       
        <div className="individualStories__nameAgeCountry">
          <div className="individualStories__textContain">
            <Typography variant="h5" className={styles.name}>
              {state.name}.
            </Typography>
            <Typography variant="h5" className={styles.age}>
              {state.age}.
            </Typography>
            <Typography variant="h5" className={styles.job}>
              {state.county}.
            </Typography>
          </div>
        </div>
        <div className="individualStories__jobPlacement">
          <div className="individualStories__textContain">
            <Typography variant="h5" className={styles.headers}>
              SYEP Job Placement:
            </Typography>
            <Typography variant="h6">{state.job}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualStories;
