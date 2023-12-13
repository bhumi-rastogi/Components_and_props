import React from 'react'

const NavBar= () => {
  return (
    <div>
      <header>
        <img className="pt" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""></img>
        <nav>
          <ul className='link'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>More</a></li>
          </ul>

        </nav>
        <a className='contact' href='#'><button>Contact</button></a>
      </header>

    </div>
  )
}

export default  NavBar