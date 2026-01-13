
import { Link, Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Product from './pages/product.jsx'
import Men from './pages/men.jsx'
import Course from './pages/course.jsx'
import Coursedetail from './pages/coursedetail.jsx'
import Errorpage from './pages/errorpage.jsx'

const App = () => {
  return (
    <>
      <div className='w-full p-4 bg-amber-500 flex gap-8  '>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/contact'}>contact</Link>
        <Link to={'/product'}>product</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='product/men' element={<Men />} />
        <Route path='product/course' element={<Course />} />
        <Route path='product/course/:id' element={<Coursedetail />} />
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </>
  )
}

export default App
