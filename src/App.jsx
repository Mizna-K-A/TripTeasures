import './App.css'
import Footer from './Footer'

function App() {

  return (
    <>
      <nav className='d-flex p-3' style={{ backgroundColor: 'rgb(45, 146, 180)',height:'67px' }}>
        <div className='w-100 fw-bolder fs-3 text-light'>Trip Teasures</div>
        <div className='w-100 float-end'>
          <a className='navlink float-end' href="">Contact</a>
          <a className='navlink float-end' href="">About</a>
          <a className='navlink float-end' href="">Home</a>
        </div>
      </nav>
      <section className='d-flex flex-column justify-content-center align-items-center fw-bolder' style={{ backgroundImage: "url('https://youmatter.world/app/uploads/2019/11/travel-world.jpg')",backgroundSize:'cover',height:'90vh' }}>
      <h2>Welcome to Trip Teasures</h2>
      <p>"Feel the Best experience"</p>
      <button className='btn border rounded btn-primary'>View Packages</button>
      </section>
      <section className='d-flex flex-column justify-content-center align-items-center fw-bolder ' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-844.jpg')",backgroundSize:'cover',height:'100vh' }}>
        <h1 className='text-light'>About Us</h1>
        <p className='fs-5 p-5 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt quia impedit iste accusantium nobis ullam. Unde velit voluptatum, hic nisi cupiditate reprehenderit tempore necessitatibus beatae asperiores eaque dolor aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam repellendus dolorem, pariatur officiis minus, laboriosam illo accusamus sit, vel porro. Doloremque dignissimos nobis ad. Eos consectetur non excepturi quia?
          Officia ipsum minima tempore quia esse, laboriosam pariatur sunt omnis quisquam laborum praesentium libero? Nemo voluptatum asperiores perferendis ?
        </p>
      </section>
      <Footer/>
    </>
  )
}

export default App
