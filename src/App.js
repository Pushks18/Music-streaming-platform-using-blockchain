import * as React from 'react';
import './App.css';
import bg1 from './assets/bg3.jpg'
import bg2 from './assets/bg12.jpg'
import bg3 from './assets/bg15.jpg'
import Hero from './components/Hero.js'
import Slider from './components/Slider.js'
import Navbar from './components/Navbar';


const navbarLinks = [
  { url: '/home', title: 'Home' },
  { url: 'https://www.google.com/', title: 'Upload' },
  { url: 'http://127.0.0.1:5500/tunesblock/public/register%20page/register.html', title: 'Register' },
  { url: 'http://127.0.0.1:5500/tunesblock/public/login%20page/login.html', title: 'Login' }
]



export default function App() {
  return (
    <div className='App'>
      <Navbar navbarLinks={navbarLinks}></Navbar>
      <Hero imageSrc={bg1}></Hero>
      <Slider imageSrc={bg2} title={'Chase Aesthetics Brah'} subtitle={'We listen to hardstyle in the gym'}>
      </Slider>
      <Slider imageSrc={bg3} title={'Chase Aesthetics Brah'} subtitle={'We listen to hardstyle in the gym'}
        flipped={true}>
      </Slider>
    </div >
  )
}
