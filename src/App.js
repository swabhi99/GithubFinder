import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import {GithubProvider} from './context/Github/GithubContext';

function App() {
  return (
    <GithubProvider>
     <Router>
       <div className="flex flex-col justify-between h-screen">
       <Navbar title="Github-Finder"></Navbar>
       <main className='container mx-auto px-3 pb-12'>
         <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/About' element={<About></About>}/>
            <Route path='/*' element={<NotFound></NotFound>}/>
         </Routes>
       </main>
       <Footer></Footer>
       </div>
     </Router>
     </GithubProvider>
  );
}

export default App;
