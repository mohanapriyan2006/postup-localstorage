import React from 'react'
// import './styles/Footer.css'

export const Footer = () => {
  const today = new Date();
  return (
    <footer>
    <p>Copyright &copy; {today.getFullYear()} Designed by <a style={{color: "white"}} href="https://mohanapriyan.netlify.app/"  target='new'><b>Mohanapriyan.M</b></a> </p>
    </footer>
  )
}
