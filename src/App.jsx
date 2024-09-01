import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import themeConfiguration from './styles/theme';
import { lazy } from 'react';
import Header from './Pages/Header/Header';

const Home = lazy(() => import('./Pages/Home/Home'));
const ConnectionDetails = lazy(() => import('./Pages/ConnectionDetails/ConnectionDetails'));
// const Header = lazy(() => ('./Pages/Header'));
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={themeConfiguration()}>
      <div className="App">
        <Router>
          <Notifications />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<ConnectionDetails />}></Route>
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  );
}

export default App;
