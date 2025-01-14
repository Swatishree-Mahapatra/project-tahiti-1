import React from 'react';

// Libraries
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

// Components
import ArticleCardStack from '../widgets/article/ArticleCardStack';
import Witsdom from '../expressions/Witsdom';
import PhotoStory from '../expressions/PhotoStory';

const Works = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.sectionWrapper}>
          {/* Content */}
          <Typography
            variant='h1'
            color='primary'
            className={classes.sectionHead}
          >
            Content
          </Typography>
          <ArticleCardStack />
        </div>
        <div className={classes.sectionWrapper}>
          {/* Design */}
          <Typography
            variant='h1'
            color='primary'
            className={classes.sectionHead}
          >
            Design
          </Typography>
          <Grid container spacing={4}>
            {[0, 1].map((key) => (
              <Grid key={key} item sm={6}>
                <Witsdom />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.sectionWrapper}>
          {/* Photography */}
          <Typography
            variant='h1'
            color='primary'
            className={classes.sectionHead}
          >
            Photography
          </Typography>
          <Grid container spacing={4}>
            {[0].map((key) => (
              <Grid key={key} item sm={6}>
                <PhotoStory />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
};
export default Works;

const useStyles = makeStyles(() => ({
  wrapper: {
    marginBottom: '4rem',
  },
  sectionWrapper: {
    marginTop: '2rem',
  },
  sectionHead: {
    marginBottom: '1rem',
  },
}));
