import { Link, useLocation } from 'react-router-dom'
export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <>
      <div className='container shadow-sm p-3 mb-3 bg-light rounded sticky-top'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='nav'>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} > <h5 className={pathname === '/' ? 'active' : 'undefined'} >Home</h5></Link>
              <Link to={'/fashion'} style={{ textDecoration: 'none', color: 'black' }} ><h5 className={pathname === '/fashion' ? 'active' : 'undefined'} >Mobiles</h5></Link>
              <Link to={'/electronics'} style={{ textDecoration: 'none', color: 'black' }}><h5 className={pathname === '/electronics' ? 'active' : 'undefined'} >Gaming</h5></Link>
              <Link to={'/jewelery'} style={{ textDecoration: 'none', color: 'black' }} > <h5 className={pathname === '/jewelery' ? 'active' : 'undefined'} >Audios</h5></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
