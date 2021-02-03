import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion} from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    minWidth: '600px',
    margin: '5px auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
      backgroundColor: '#333',
      color: "#fff"
  }
}));

export default function HomeAccordion({data}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.container}
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{data.header}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.container}>
          <Typography>
            {data.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
