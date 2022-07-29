import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='p-5 bg-black'>
      <ul className="flex">
        <li className="mr-6 text-slate-100">
          <Link href='/'>Doge Capital Proj</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav