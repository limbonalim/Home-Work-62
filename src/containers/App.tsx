import {Route, Routes} from 'react-router-dom';
import Home from './Home/Home.tsx';
import About from './About/About.tsx';
import Contacts from './Contacts/Contacts.tsx';
import Toolbar from '../components/Toolbar/Toolbar.tsx';
import {email, address, workTime, tel} from '../Constants.ts';
import NotFound from './NotFound/NotFound.tsx';
import Portfolio from './Portfolio/Portfolio.tsx';
import BurgerApp from '../components/Burger/BurgerApp.tsx';
import FindRingApp from '../components/FindRing/FindRingApp.tsx';


const App = () => {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container mb-3">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/about" element={(
            <About/>
          )}/>
          <Route path="/contacts" element={(
            <Contacts address={address} email={email} tel={tel} workTime={workTime}/>
          )}/>
          <Route path="/portfolio" element={(
            <Portfolio/>
          )}>
            <Route path="burger" element={(
              <BurgerApp/>
            )}/>
            <Route path="findRing" element={(
              <FindRingApp/>
            )}/>
          </Route>
          <Route path="*" element={(
            <NotFound/>
          )}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
