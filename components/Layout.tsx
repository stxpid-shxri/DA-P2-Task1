import Nav from "./Nav"
const Layout = ({children}) => {

  const styling = {
    backgroundImage: `url('/blackhole.jpg')`,
  }

  return (
    <>
        <Nav />
        <div className="p-10 h-screen" style={styling}>
            <main>
                {children}
            </main>
        </div>
        <footer className="p-3">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://twitter.com/stxpid_shxri" className="hover:underline">shuri da dog</a>
          </span>
      </footer>
    </>
    
  )
}

export default Layout