import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import {GithubProvider} from './context/Github/GithubContext';
import {AlertProvider} from './context/Alert/AlertContext'
import Alert from './components/layouts/Alert';
import User from './components/users/User';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
     <Router>
       <div className="flex flex-col justify-between h-screen">
       <Navbar title="Github-Finder"></Navbar>
       <main className='container mx-auto px-3 pb-12'>
         <Alert/>
         <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/About' element={<About></About>}/>
            <Route path='/user/:login' element={<User/>}/>
            <Route path='/*' element={<NotFound></NotFound>}/>
         </Routes>
       </main>
       <Footer></Footer>
       </div>
     </Router>
     </AlertProvider>
     </GithubProvider>
  );
}

export default App;
