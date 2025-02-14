import React from 'react';
import { PROFILEPAGES } from '../../../assets/placeholder/profile';
import { Button, Card, Input, makeStyles, Typography } from '@material-ui/core';
import theme from '../../../config/themes/light';
import newsletter from '../../../assets/images/profile/newsletterPic.png';
import { ChevronsLeft } from 'react-feather';
import ImageBox from '../widgets/ImageBox';

function Verified({ nLState }) {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      {/* <div className={classes.back} onClick={() => nLState(0)} >
        <ChevronsLeft />
      </div> */}
      <div className={classes.content}>
        <h1 className={classes.head}>Awesome! You’re all caught up. </h1>
        <div className={classes.text}>
          You’ve already signed up for the newsletter. Catch up on the latest
          news and happenings at NITR. See you then!
        </div>
        <div className={classes.text}>
          You’re receiving your newsletter on <br />
          <div>{PROFILEPAGES.PROFILE.INFO[2].value}</div>
          <br />
          <span>Change Email.</span>
        </div>
        <div className={classes.note}>
          Write to <span> morning.monday@gmail.com</span> incase you haven’t
          started receiving newsletters. These are delivered once in a week or
          in a fortnight during the working session of the institute
        </div>
      </div>
      <ImageBox widthImage='41%' img={newsletter} />
    </div>
  );
}

export default Verified;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    marginTop: '19px',

    height: '542px',
    paddingInline: '6%',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      height: 'auto',
      flexDirection: 'column',
      paddingBottom: '10%',
    },
  },
  back: {
    position: 'absolute',
    color: theme.palette.secondary.neutral80,
    top: '15px',
    left: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '52px',
    width: '47%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      alignItems: 'center',
    },
  },
  head: {
    textAlign: 'center',
    lineHeight: '2.25rem',
    color: theme.palette.common.black,
  },
  text: {
    marginTop: '29px',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.common.black,
    '& div': {
      fontWeight: '600',
    },
    '& span': {
      fontFamily: 'Source Sans Pro',
      fonWeight: '400',
      fontSize: '1rem',
      lineHeight: '26px',
      textDecoration: 'underline',
    },
  },
  note: {
    marginTop: '53px',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    '& span': {
      fontFamily: 'Source Sans Pro',
      textDecoration: 'underline',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '700',
    },
  },
}));
