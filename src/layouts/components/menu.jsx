
function Menu() {
  return (
    <>
        <div className="max-w-2xl mx-auto bg-slate-200 rounded-lg shadow-md p-4 border h-[40rem]">
        <h1 className="text-2xl font-bold mb-4">Menu</h1>
        <div className="flex gap-4 h-full">
            {/* Left Column */}
            <div className="w-0.5/2 pr-4 bg-white p-5 rounded-lg border h-full">
                <div className="relative mb-4">
                    <input className="w-full p-2 rounded-full bg-gray-100 focus:outline-none px-9" placeholder="Search menu" type="text"/>
                    <i className="fas fa-search absolute top-3 left-3 text-gray-500"></i>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Social</h2>
                    <div className="mb-4">
                    {/** Event Item **/}
                    <div className="flex items-start mb-2 hover:bg-slate-100 rounded-md p-2 transition-all cursor-pointer">
                        <img alt="Events icon" className="h-10 w-10 mr-2 mt-3" height="25" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-7nhmFPKen0jmocay5zm1F0Jp.png?st=2024-09-20T13%3A25%3A06Z&se=2024-09-20T15%3A25%3A06Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A37%3A20Z&ske=2024-09-20T23%3A37%3A20Z&sks=b&skv=2024-08-04&sig=oKBxrBMlKTCGJQPmDbsAjL96CDqP30s7HmYP4msla0w%3D" width="24"/>
                        <div>
                            <p className="font-semibold">Events</p>
                            <p className="text-sm text-gray-600">Organize or find events and other things to do online and nearby.</p>
                        </div>
                    </div>
                    {/** Friends Item **/}
                    <div className="flex items-start mb-2 hover:bg-slate-100 rounded-md p-2 transition-all cursor-pointer">
                        <img alt="Friends icon" className="h-10 w-10 mr-2 mt-3" height="24" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-lWFORWIdxOUOKyNU8f2PqTkb.png?st=2024-09-20T13%3A25%3A02Z&se=2024-09-20T15%3A25%3A02Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-20T13%3A29%3A52Z&ske=2024-09-21T13%3A29%3A52Z&sks=b&skv=2024-08-04&sig=PIHZ1hsf05MzqXcrv11QOeHD5g0aARl2u6m0Rx3Kjhs%3D" width="24"/>
                        <div>
                            <p className="font-semibold">Friends</p>
                            <p className="text-sm text-gray-600">Search for friends or people you may know.</p>
                        </div>
                    </div>
                    {/** Groups Item **/}
                    <div className="flex items-start mb-2 hover:bg-slate-100 rounded-md p-2 transition-all cursor-pointer">
                        <img alt="Groups icon" className="h-10 w-10 mr-2 mt-3" height="24" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-TS34sWaRZHiyklgAGK9x0y8e.png?st=2024-09-20T13%3A25%3A12Z&se=2024-09-20T15%3A25%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A24%3A21Z&ske=2024-09-20T23%3A24%3A21Z&sks=b&skv=2024-08-04&sig=BVK41MJWLY8CANFuVDsIG/Ny5MdsLT6jFwH5uau/EYw%3D" width="24"/>
                        <div>
                            <p className="font-semibold">Groups</p>
                            <p className="text-sm text-gray-600">Connect with people who share your interests.</p>
                        </div>
                    </div>
                    {/** News Feed Item **/}
                    <div className="flex items-start mb-2 hover:bg-slate-100 rounded-md p-2 transition-all cursor-pointer">
                        <img alt="News Feed icon" className="h-10 w-10 mr-2 mt-3" height="24" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-pMFVtC4ubE3K2ypHQHW7WTTc.png?st=2024-09-20T13%3A25%3A05Z&se=2024-09-20T15%3A25%3A05Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A17%3A28Z&ske=2024-09-20T23%3A17%3A28Z&sks=b&skv=2024-08-04&sig=huFqXV4w9hVlFKvowsaHASRmDBFhinfdz57lSZLI1sg%3D" width="24"/>
                        <div>
                            <p className="font-semibold">News Feed</p>
                            <p className="text-sm text-gray-600">See relevant posts from people and Pages you follow.</p>
                        </div>
                    </div>
                    {/** Feeds Item **/}
                    <div className="flex items-start mb-2 hover:bg-slate-100 rounded-md p-2 transition-all cursor-pointer">
                        <img alt="Feeds icon" className="h-10 w-10 mr-2 mt-3" height="24" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-XC1DFiBAN1PBx0QBGvsHaNUu.png?st=2024-09-20T13%3A25%3A07Z&se=2024-09-20T15%3A25%3A07Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A18%3A22Z&ske=2024-09-20T23%3A18%3A22Z&sks=b&skv=2024-08-04&sig=Cz86RFma/ynJ3mQCFPAQ%2BFa5Kt0g/auk2AOvhHFEPDY%3D" width="24"/>
                        <div>
                            <p className="font-semibold">Feeds</p>
                            <p className="text-sm text-gray-600">See the most recent posts from your friends, groups, Pages and more.</p>
                        </div>
                    </div>
                    {/** Pages Item **/}
                    <div className="flex items-start mb-2 hover:bg-slate-100 rounded-md p-2 transition-all cursor-pointer">
                        <img alt="Pages icon" className="h-10 w-10 mr-2 mt-3" height="24" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Tuuw6QgFR39kBjXQDxlfqAYI.png?st=2024-09-20T13%3A25%3A07Z&se=2024-09-20T15%3A25%3A07Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-20T13%3A29%3A30Z&ske=2024-09-21T13%3A29%3A30Z&sks=b&skv=2024-08-04&sig=orKGL3WPo4KWWWM9epmKePGHbr7NXewcL6WozInntoM%3D" width="24"/>
                        <div>
                            <p className="font-semibold">Pages</p>
                            <p className="text-sm text-gray-600">Discover and connect with businesses on Facebook.</p>
                        </div>
                    </div>
                    </div>
                    <h2 className="text-lg font-semibold mb-2">Entertainment</h2>
                    <div className="mb-4">
                    {/** Gaming Video Item **/}
                    <div className="flex items-start mb-2 hover:bg-slate-100 rounded-md p-2 transition-all cursor-pointer">
                        <img alt="Gaming Video icon" className="h-10 w-10 mr-2 mt-3" height="24" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-nej8dlAzBm79gw7QqOJftSJn.png?st=2024-09-20T13%3A25%3A10Z&se=2024-09-20T15%3A25%3A10Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A13%3A46Z&ske=2024-09-20T23%3A13%3A46Z&sks=b&skv=2024-08-04&sig=YqfDyX6RNinAt5mqTmw3xSg8j2ZdrjIfm7W1r/fEfKs%3D" width="24"/>
                        <div>
                            <p className="font-semibold">Gaming Video</p>
                            <p className="text-sm text-gray-600">Watch and connect with your favorite games.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Right Column */}
            <div className="w-1/2 pl-4 bg-white rounded-lg border p-2 h-auto">
                <h2 className="text-lg font-semibold mb-2">Create</h2>
                <div className="mb-4">
                    {/** Post Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-pencil-alt text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Post</p>
                    </div>
                    {/** Story Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-book text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Story</p>
                    </div>
                    {/** Reel Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-video text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Reel</p>
                    </div>
                    {/** Life Event Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-star text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Life event</p>
                    </div>
                    <hr className="my-2"/>
                    {/** Page Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-file-alt text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Page</p>
                    </div>
                    {/** Ad Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-bullhorn text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Ad</p>
                    </div>
                    {/** Group Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-users text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Group</p>
                    </div>
                    {/** Event Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-calendar-alt text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Event</p>
                    </div>
                    {/** Marketplace Listing Item **/}
                    <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-shopping-bag text-gray-600"></i>
                    </div>
                    <p className="font-semibold">Marketplace listing</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Menu