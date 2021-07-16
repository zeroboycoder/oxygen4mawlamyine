import { Switch, Route } from 'react-router-dom';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './Layout/Layout';
import Home from './container/Home/Home';
import './App.css';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0080FF',
      },
      secondary: {
        main: '#94cbff',
      },
    },
  });
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </ThemeProvider>
    </Layout>
  );
};

export default App;
