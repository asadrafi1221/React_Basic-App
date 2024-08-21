import react from 'react'

function Navbar(){
   return (
    <div className='bg-blue-900 m-2 p-6 flex rounded-xl'>
      <ul className='flex justify-around w-full font-bold text-blue-300'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Portfolio</li>
      </ul>
    </div>
   )
}
export default Navbar;