import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='justify-items-center mt-10'>
      <ul className='font-serif text-2xl underline text-blue-400'>
        <li className='py-3'>
          <Link to="/todo">Go to To-Do List</Link> 
        </li>
        <li>
          <Link to="/gitrepo">Go to Git Repo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation