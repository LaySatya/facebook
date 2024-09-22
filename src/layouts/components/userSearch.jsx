

function UserSearch() {
  return (
    <>
        <div className="w-72">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold">Recent</h2>
                <a className="text-blue-500" href="#">
                Edit
                </a>
            </div>
            <div className="lg:space-y-2 space-y-1">
                {/* Example item */}
                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <img
                        alt="Cambodian Premier League logo"
                        className="w-10 h-10 rounded-full"
                        height="40"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-4zcmLeQ9nO8Xy8VNjQHubKtO.png?st=2024-09-22T08%3A52%3A19Z&se=2024-09-22T10%3A52%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A41%3A00Z&ske=2024-09-22T23%3A41%3A00Z&sks=b&skv=2024-08-04&sig=Wq1wyPFBF8RlyDMpWyPuZfbU32MhSVdpu3iA4g32U5k%3D"
                        width="40"
                        />
                        <div>
                        <p className="font-semibold">Cambodian Premier League</p>
                        <p className="text-sm text-gray-500 flex items-center">
                            <span className="text-blue-500 mr-1">•</span>
                            3 new
                        </p>
                        </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>
                
                {/* Additional items can be added similarly */}
                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <img
                        alt="MPL Cambodia logo"
                        className="w-10 h-10 rounded-full"
                        height="40"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-JbuIDo0w3XbRDdXAzvfDVRJf.png?st=2024-09-22T08%3A52%3A22Z&se=2024-09-22T10%3A52%3A22Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-22T06%3A03%3A56Z&ske=2024-09-23T06%3A03%3A56Z&sks=b&skv=2024-08-04&sig=Z%2BnDy9aQy5l5rZDPTu0336H2IRJC5H5PfxNwP0A52tE%3D"
                        width="40"
                        />
                        <div>
                        <p className="font-semibold">MPL Cambodia</p>
                        <p className="text-sm text-gray-500 flex items-center">
                            <span className="text-blue-500 mr-1">•</span>
                            1 new
                        </p>
                        </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>

                {/* Add other items similarly as shown above... */}
                {/* Example for the last item */}
                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <img
                        alt="Vatha NA profile picture"
                        className="w-10 h-10 rounded-full"
                        src="https://placehold.co/40x40"
                        />
                        <div>
                            <p className="font-semibold">Vatha NA</p>
                            <p className="text-sm text-gray-500 flex items-center">
                                <span className="text-blue-500 mr-1">•</span>
                                2 new
                            </p>
                        </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>

                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                    <img
                        alt="Him Malyza profile picture"
                        className="w-10 h-10 rounded-full"
                        height="40"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-2wqKzQOUo6Qbi1a3H55jm0e3.png?st=2024-09-22T08%3A52%3A18Z&se=2024-09-22T10%3A52%3A18Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A32%3A12Z&ske=2024-09-22T23%3A32%3A12Z&sks=b&skv=2024-08-04&sig=0F%2BTFedGEaVkAjflY5bL%2BKodI380s84St6kBNEQJLjw%3D"
                        width="40"
                    />
                    <div>
                        <p className="font-semibold">Him Malyza</p>
                        <p className="text-sm text-gray-500">Friend</p>
                    </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>

                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                    <img
                        alt="Person's profile picture"
                        className="w-10 h-10 rounded-full"
                        height="40"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-oooUAhZhgvb7nvwnuMxDO1tS.png?st=2024-09-22T08%3A52%3A19Z&se=2024-09-22T10%3A52%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A28%3A00Z&ske=2024-09-22T23%3A28%3A00Z&sks=b&skv=2024-08-04&sig=yCZreG7mk4WSeUW3Pyvd/DDvZTIVIzP3qDVVADZiZjs%3D"
                        width="40"
                    />
                    <div>
                        <p className="font-semibold">សប្បុរសធម៌</p>
                        <p className="text-sm text-gray-500 flex items-center">
                        <span className="text-blue-500 mr-1">•</span>
                        4 new
                        </p>
                    </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>

                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                    <img
                        alt="Prime Cineplex Cambodia logo"
                        className="w-10 h-10 rounded-full"
                        height="40"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-bOq7p9jf9TPk06WxIXCBnsU2.png?st=2024-09-22T08%3A52%3A23Z&se=2024-09-22T10%3A52%3A23Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A38%3A53Z&ske=2024-09-22T23%3A38%3A53Z&sks=b&skv=2024-08-04&sig=3DvXXLy%2B9YMXCrW6gqAl3JGXQvyi7Cya0fcGUmN1X8w%3D"
                        width="40"
                    />
                    <div>
                        <p className="font-semibold">Prime Cineplex Cambodia</p>
                        <p className="text-sm text-gray-500 flex items-center">
                        <span className="text-blue-500 mr-1">•</span>
                        9+ new
                        </p>
                    </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>

                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                    <img
                        alt="Vatha NA profile picture"
                        className="w-10 h-10 rounded-full"
                        src="https://placehold.co/40x40"
                    />
                    <div>
                        <p className="font-semibold">Vatha NA</p>
                        <p className="text-sm text-gray-500 flex items-center">
                        <span className="text-blue-500 mr-1">•</span>
                        2 new
                        </p>
                    </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>

                <div className="flex items-center justify-between hover:bg-slate-100 rounded-md p-2 cursor-pointer">
                    <div className="flex items-center space-x-3">
                    <img
                        alt="Nick Taylor profile picture"
                        className="w-10 h-10 rounded-full"
                        height="40"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-XXRJ3DrrLDaASGT4GAo8VBmr.png?st=2024-09-22T08%3A52%3A19Z&se=2024-09-22T10%3A52%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A11%3A36Z&ske=2024-09-22T23%3A11%3A36Z&sks=b&skv=2024-08-04&sig=R8YwZyN083By4U1d4o1JRoUnW1cts%2Byhy%2Bo42TJfiQM%3D"
                        width="40"
                    />
                    <div>
                        <p className="font-semibold">Nick Taylor</p>
                    </div>
                    </div>
                    <i className="fas fa-times text-gray-500"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserSearch