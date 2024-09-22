import Contact from "./layouts/contacts"
import Navbar from "./layouts/navbar"
import Posts from "./layouts/posts"
import ProfileList from "./layouts/profileList"

function App() {

  return (
    <>
      <div className="h-screen  bg-slate-200 overflow-hidden">
        <div className="w-full z-50 relative">
          {/* Navbar */}
          <Navbar />
        </div>
          <div className="flex">
            {/* <div className="lg:block hidden w-4/12">
              <ProfileList/>
            </div> */}
            <div className="block lg:w-5/12 md:w-11/12 w-full mx-auto relative z-10 md:h-[45rem] h-[50rem] scrollBar">
              <Posts/>
            </div>
            {/* <div className="md:block hidden w-3/12">  
              <Contact/>
            </div> */}
          </div>
      </div>
    </>
  )
}

export default App
