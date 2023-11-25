import Home from './Home/Home.tsx';
import About from './About/About.tsx';
import Contacts from './Contacts/Contacts.tsx';
import Toolbar from '../components/Toolbar/Toolbar.tsx';
import {email, address, workTime, tel} from '../Constants.ts';
import {Route, Routes} from 'react-router-dom';


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
        </Routes>
      </main>
    </>
  );
};

export default App;
