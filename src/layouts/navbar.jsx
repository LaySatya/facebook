import { Popover } from "antd";

function Navbar() {
  return (
    <>
        <div className="flex items-center justify-between p-2 bg-white border-b border-gray-200">
   {/* Facebook Logo and Search Bar */}
   <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
         <i className="fab fa-facebook-f text-white"></i>
      </div>
      <div className="flex items-center bg-gray-100 rounded-full lg:px-3 px-1.5 py-1">
         <i className="fas fa-search text-gray-400 lg:translate-x-0.5 translate-x-2"></i>
         <input className="bg-transparent outline-none ml-2 text-gray-500 p-1 lg:w-full w-0" placeholder="Search Facebook" type="text" />
      </div>
   </div>
   {/* Navigation Icons */}
   <div className="flex items-center space-x-6 md:block hidden">
      <ul className="flex">
        <Popover content="Home">
            <li className="hover:bg-slate-100 p-2 xl:px-8 md:px-6 px-4 rounded-lg mr-1 cursor-pointer">
                <i className="fas fa-home text-blue-600 text-xl"></i>
            </li>
        </Popover>
        <Popover content="Videos">
            <li className="hover:bg-slate-100 p-2 xl:px-8 md:px-6 px-4 rounded-lg mr-1 cursor-pointer">
                <i className="fas fa-tv text-gray-500 text-xl"></i>
            </li>
        </Popover>
        <Popover content="Marketplaces">
            <li className="hover:bg-slate-100 p-2 xl:px-8 md:px-6 px-4 rounded-lg mr-1 cursor-pointer">
                <i className="fas fa-store text-gray-500 text-xl"></i>
            </li>
        </Popover>
        <Popover content="Groups">
            <li className="hover:bg-slate-100 p-2 xl:px-8 md:px-6 px-4 rounded-lg mr-1 cursor-pointer">
                <i className="fas fa-users text-gray-500 text-xl"></i>
            </li>
        </Popover>
        <Popover content="Gaming">
            <li className="hover:bg-slate-100 p-2 xl:px-8 md:px-6 px-4 rounded-lg mr-1 cursor-pointer">
                <i className="fas fa-gamepad text-gray-500 text-xl"></i>
            </li>
        </Popover>
      </ul>
   </div>
   {/* Right Side Icons */}
   <div className="flex items-center space-x-2">
        <Popover content="Menu">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                <i className="fas fa-th text-gray-500"></i>
            </div>
        </Popover>
        <Popover content="Messenger">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                <i className="fab fa-facebook-messenger text-gray-500"></i>
            </div>
        </Popover>
        <Popover content="Notifications">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                <i className="fas fa-bell text-gray-500"></i>
            </div>
        </Popover>
        <Popover content="Account">
            <div className="relative hover:bg-gray-200 cursor-pointer rounded-full">
                <img alt="User profile picture" className="w-10 h-10 rounded-full" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-J9KlwUuhbFsMt1gdWY2Imauv.png?st=2024-09-20T12%3A15%3A12Z&se=2024-09-20T14%3A15%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-20T02%3A36%3A57Z&ske=2024-09-21T02%3A36%3A57Z&sks=b&skv=2024-08-04&sig=OFyUf6/XgM%2BO4n5FRI8J2ddkfbODq7RN1HHflOYjtgI%3D" width="40" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full"></span>
            </div>
        </Popover>
   </div>
</div>


    </>
  )
}

export default Navbar