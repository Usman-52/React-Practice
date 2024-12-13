// import React from 'react'

function NavBar() {
    const navBar = [
      {
        name: "Product",
        url: "/Product"
      },
      {
        name: "Product Detail",
        ulr: "/ProductDetail"
      }
    ]
  return (
    <nav className="flex justify-center items-center h-[50px] bg-fuchsia-500 text-white ">
      <ul className="flex  gap-7">
{navBar.map(())}
      <li >

      </li>
      </ul>
       
      
    </nav>
  )
}

export default NavBar
