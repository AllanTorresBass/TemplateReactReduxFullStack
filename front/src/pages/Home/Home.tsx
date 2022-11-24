import React from 'react';
import { Button, Switch, Typography, CircularProgress } from '@mui/material';
import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
import { login } from 'redux/slices/auth';
import { setThemeMode } from 'redux/slices/settings';
import {
  AppbarStyled,
  AppbarContainerStyled,
  BodyContainerStyled,
  CardStyled
} from './HomeStyles';
const Home: React.FC = () => {
  const {
    auth: { accessToken, isLoading },
    settings: { themeMode }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  console.log(accessToken);
  const handleLogin: any = () => {
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };
  const handleChangeTheme: any = () => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div>
      <AppbarStyled>
        <AppbarContainerStyled>
          <Typography variant="h6">
            React - Redux Toolkit - Material IU
          </Typography>
          <Switch onClick={handleChangeTheme} />
        </AppbarContainerStyled>
      </AppbarStyled>
      <BodyContainerStyled>
        <CardStyled>
          <Button onClick={handleLogin}>
            login {isLoading && <CircularProgress size={24} />}
          </Button>
        </CardStyled>
      </BodyContainerStyled>
    </div>
  );
};
export default Home;
