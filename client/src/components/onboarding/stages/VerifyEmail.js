import React, { useState } from 'react';
import Image from 'next/image';

// Library
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import verifyEmailImg from '../../../assets/images/onboarding/verifyEmail.png';
import theme from '../../../config/themes/light';

// Components
import Button from '../../shared/button/Regular';
import Input from '../../shared/input/Regular';

// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

function VerifyEmail(props) {
  const classes = useStyles();

  // props
  const {
    email,
    setEmail,
    isEmailVerified,
    toggleIsEmailVerified,
    verifyEmail,
    onNext,
  } = props;

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid className={classes.content} item sm={12} md={12} lg={7}>
        <Typography className={classes.verifyTitle} variant='h1'>
          {ONBOARDING.VERIFY_EMAIL.PRIMARY.TITLE}
        </Typography>

        <Typography className={classes.verifyContent} variant='body1'>
          {!isEmailVerified
            ? ONBOARDING.VERIFY_EMAIL.PRIMARY.CONTENT
            : `We have sent an email to ${email}`}
        </Typography>

        {isEmailVerified ? (
          <Typography className={classes.verifyContent} variant='body1'>
            {ONBOARDING.VERIFY_EMAIL.SECONDARY.CONTENT}
          </Typography>
        ) : (
          <>
            <Typography className={classes.emailTitle} variant='h3'>
              {ONBOARDING.VERIFY_EMAIL.SECONDARY.TITLE}
            </Typography>
            <Input
              className={classes.emailInput}
              value={email}
              onChange={setEmail}
              placeholder={ONBOARDING.VERIFY_EMAIL.EMAIL_PLACEHOLDER}
            />
          </>
        )}

        <Button
          containerStyles={classes.button}
          text={
            isEmailVerified
              ? ONBOARDING.VERIFY_EMAIL.BUTTON.SECONDARY
              : ONBOARDING.VERIFY_EMAIL.BUTTON.PRIMARY
          }
          onClick={
            !isEmailVerified
              ? () => {
                  verifyEmail();
                  toggleIsEmailVerified();
                }
              : onNext
          }
        />

        <Typography className={classes.note} variant='body2'>
          {ONBOARDING.VERIFY_EMAIL.NOTE}
        </Typography>
      </Grid>

      <Grid className={classes.imgContainer} item sm={12} md={12} lg={5}>
        <Image
          className={classes.img}
          src={verifyEmailImg}
          alt='Verify Email'
        />
      </Grid>
    </Grid>
  );
}

export default VerifyEmail;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    padding: 10,
    paddingLeft: 40,
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  verifyTitle: {
    color: theme.palette.common.black,
    marginTop: 20,
  },
  verifyContent: {
    color: theme.palette.common.black,
    marginBottom: 30,
    fontWeight: '400',
    fontSize: '18px',
  },
  emailInput: {
    width: '85%',
  },
  button: {
    width: '85%',
    padding: 10,
  },
  imgContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '150%',
    height: 'auto',
    marginRight: 10,
  },
  note: {
    marginTop: 40,
    color: theme.palette.common.black,
  },
}));
