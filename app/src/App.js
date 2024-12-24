import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Fashion from './components/Fashion';
import Jewelery from './components/Jewelery';
import Electronics from './components/Electronics';
import Home from './components/Home';
import '../src/components/Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singleinfo from './components/Singleinfo';
import Result from './components/Result';
import { Provider } from 'react-redux';
import store from './components/Store';
import Cart from './components/Cart';
import Footer from './components/Footer';
import React, { useState } from 'react'
import Checkout from './components/Checkout';
import Loginpage from './components/Loginpage';
import Payment from './components/Payment';
export default function App() {
  const [str, setStr] = useState()
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<> {str ? <><Header data={setStr} /> <Result data={str} /></> :
            <>
              <Header
                data={setStr} />
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </>}</>}></Route>
          <Route path='/fashion' element={<>{str ? <><Header data={setStr} /> <Result data={str} /></> : <>
            <Header
              data={setStr} />
            <Navbar></Navbar>
            <Fashion></Fashion>
            <Footer></Footer>
          </>}</>}></Route>
          <Route path='/electronics' element={<>{str ? <><Header data={setStr} /> <Result data={str} /></> : <>
            <Header
              data={setStr} />
            <Navbar></Navbar>
            <Electronics></Electronics>
            <Footer></Footer>
          </>} </>} ></Route>
          <Route path='/jewelery' element={<>{str ? <><Header data={setStr} /> <Result data={str} /></> : <>
            <Header
              data={setStr} />
            <Navbar></Navbar>
            <Jewelery></Jewelery>
            <Footer></Footer>
          </>} </>}></Route>
          <Route path='/singleinfo/:id' element={<>{str ? <><Header data={setStr} /> <Result data={str} /></> : <>
            <Header
              data={setStr} />
            <Navbar></Navbar>
            <Singleinfo></Singleinfo>
            <Footer></Footer>
          </>}</>}></Route>
          <Route path='/cart' element={<><Navbar></Navbar> <Cart></Cart> <Footer></Footer> </>}></Route>
          <Route path='/checkout' element={<><Navbar></Navbar><Checkout></Checkout><Footer></Footer></>}></Route>
          <Route path='/login' element={<><Navbar></Navbar><Loginpage></Loginpage><Footer></Footer></>}></Route>
          <Route path='/payment' element={<><Navbar></Navbar><Payment></Payment><Footer></Footer></>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
