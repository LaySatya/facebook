
function Posts() {
  return (
    <>
            <div className="bg-white p-4 rounded-lg shadow-sm border-spacing-1 border-slate-300 mt-3 border">
                <div className="flex items-center space-x-4">
                    <img
                    alt="User avatar"
                    className="rounded-full"
                    height="40"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-hgC33oPUZvZkYSzrfmoZ3MGS.png?st=2024-09-22T10%3A09%3A17Z&se=2024-09-22T12%3A09%3A17Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-22T00%3A13%3A57Z&ske=2024-09-23T00%3A13%3A57Z&sks=b&skv=2024-08-04&sig=nCIRtDxMHgGSqoD6oLlhdm6UByC6f83NM4LamES94hQ%3D"
                    width="40"
                    />
                    <input
                    className="flex-grow bg-gray-100 p-2 rounded-full focus:outline-none px-5 text-lg"
                    placeholder="What's on your mind, Lay?"
                    type="text"
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <button className="flex items-center space-x-2 text-red-500">
                    <i className="fas fa-video"></i>
                    <span>Live video</span>
                    </button>
                    <button className="flex items-center space-x-2 text-green-500">
                    <i className="fas fa-photo-video"></i>
                    <span>Photo/video</span>
                    </button>
                    <button className="flex items-center space-x-2 text-yellow-500">
                    <i className="fas fa-smile"></i>
                    <span>Feeling/activity</span>
                    </button>
                </div>
    
            </div>
            <div className="flex space-x-2 mt-4 relative scrollStory">
                <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                <div className="relative">
                    <img
                    alt="Create story image"
                    className="rounded-lg h-44 w-28"
                    height="120"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-39Wst8U1GjN2MdGiOY1Tc5hj.png?st=2024-09-22T10%3A09%3A15Z&se=2024-09-22T12%3A09%3A15Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A11%3A22Z&ske=2024-09-22T23%3A11%3A22Z&sks=b&skv=2024-08-04&sig=/4LZ4nmGYRfwuVzT%2B%2BdOvJx2iNCTYggOZiUC6NV/Cjw%3D"
                    width="80"
                    />
                    <div className="absolute bottom-0 rounded-b-lg h-12 flex justify-center bg-white w-full p-1">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center text-white border border-white border-lg border-spacing-5 -mt-6">
                            <i className="fas fa-plus"></i>
                        </div>
                        <span className="text-sm mt-2 absolute top-3 font-semibold">Create story</span>
                    </div>
                </div>
                </div>

                <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                <div className="relative">
                    <img
                    alt="Bennie Bd Carter story image"
                    className="rounded-lg h-44 w-28"
                    height="120"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-nuuRvLRnlXI567fh9PCzF2lM.png?st=2024-09-22T10%3A09%3A14Z&se=2024-09-22T12%3A09%3A14Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-22T00%3A02%3A08Z&ske=2024-09-23T00%3A02%3A08Z&sks=b&skv=2024-08-04&sig=dV8TYYhA2dBlIN%2B35uXdJQTr1L89r4pn//jZhk9xanY%3D"
                    width="80"
                    />
                    <div className="absolute top-2 left-2 border-2 border-white rounded-full">
                    <img
                        alt="Bennie Bd Carter avatar"
                        className="rounded-full"
                        height="30"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-QpC6ZISuHBo6unth9koeP3aN.png?st=2024-09-22T10%3A09%3A18Z&se=2024-09-22T12%3A09%3A18Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A37%3A01Z&ske=2024-09-22T23%3A37%3A01Z&sks=b&skv=2024-08-04&sig=YBg0LVYm2mFWWoFbeX6PKtRNZJmCCVaopc2X2URaasU%3D"
                        width="30"
                    />
                    </div>
                    <div className="relative -top-14 mx-auto text-white font-medium w-10/12">
                        <span className="text-sm">Bennie Bd Carter</span>
                    </div>
                </div>
                </div>

                <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                <div className="relative">
                    <img
                    alt="Dy Fianna story image"
                    className="rounded-lg h-44 w-28"
                    height="120"
                    src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-a6iIhnDZlHxwD39sI0oyCpmO.png?st=2024-09-22T10%3A09%3A20Z&se=2024-09-22T12%3A09%3A20Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A46%3A30Z&ske=2024-09-22T23%3A46%3A30Z&sks=b&skv=2024-08-04&sig=P%2B8GCbQuoyf9n/kacM77SCWiY2Knj2xINz4DL3g%2Be6Q%3D"
                    width="80"
                    />
                    <div className="absolute top-2 left-2 border-2 border-white rounded-full">
                    <img
                        alt="Dy Fianna avatar"
                        className="rounded-full"
                        height="30"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-uhQfU1gWAeE8r6YAB5BeLr0U.png?st=2024-09-22T10%3A09%3A14Z&se=2024-09-22T12%3A09%3A14Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-22T01%3A31%3A34Z&ske=2024-09-23T01%3A31%3A34Z&sks=b&skv=2024-08-04&sig=0OrCbb69%2B1sx8/ebGY9iEywzpd5mn5GL2u/Bd8ikktE%3D"
                        width="30"
                    />
                    </div>
                </div>
                <div className="relative -top-14 mx-auto text-white font-medium w-10/12">
                        <span className="text-sm">Nick Talor</span>
                    </div>
                </div>

                <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                <div className="relative">
                    <img alt="Nhim Ravy story image" className="rounded-lg h-44 w-28" src="https://placehold.co/80x120" />
                    <div className="absolute top-2 left-2 border-2 border-white rounded-full">
                    <img
                        alt="Nhim Ravy avatar"
                        className="rounded-full"
                        height="30"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-9wy1FS3TyGCBqtDouAsBjHAg.png?st=2024-09-22T10%3A09%3A16Z&se=2024-09-22T12%3A09%3A16Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A26%3A57Z&ske=2024-09-22T23%3A26%3A57Z&sks=b&skv=2024-08-04&sig=nZqccVSglqFMSvFOfVUPqv/LejU%2B8arCCYvKtCoflXw%3D"
                        width="30"
                    />
                    </div>
                </div>
                <div className="relative -top-14 mx-auto text-white font-medium w-10/12">
                        <span className="text-sm">Him Malyza</span>
                    </div>
                </div>

                <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                    <div className="relative">
                        <img alt="Meoun Veasna story image" className="rounded-lg h-44 w-28" src="https://placehold.co/80x120" />
                        <div className="absolute top-2 left-2 border-2 border-white rounded-full">
                        <img
                            alt="Meoun Veasna avatar"
                            className="rounded-full"
                            height="30"
                            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-2vowR6mlrQs3pVQ1qkMTkqNz.png?st=2024-09-22T10%3A09%3A12Z&se=2024-09-22T12%3A09%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A30%3A18Z&ske=2024-09-22T23%3A30%3A18Z&sks=b&skv=2024-08-04&sig=XSS7amrWSGzpIAJAsQ7W%2BFTfqbO8aZNgLQFbyrNUwMY%3D"
                            width="30"
                        />
                        </div>
                    </div>
                    <div className="relative -top-14 mx-auto text-white font-medium w-10/12">
                        <span className="text-sm">Bennie Bd Carter</span>
                    </div>
                </div>
                <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                    <div className="relative">
                        <img alt="Meoun Veasna story image" className="rounded-lg h-44 w-28" src="https://placehold.co/80x120" />
                        <div className="absolute top-2 left-2 border-2 border-white rounded-full">
                        <img
                            alt="Meoun Veasna avatar"
                            className="rounded-full"
                            height="30"
                            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-2vowR6mlrQs3pVQ1qkMTkqNz.png?st=2024-09-22T10%3A09%3A12Z&se=2024-09-22T12%3A09%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A30%3A18Z&ske=2024-09-22T23%3A30%3A18Z&sks=b&skv=2024-08-04&sig=XSS7amrWSGzpIAJAsQ7W%2BFTfqbO8aZNgLQFbyrNUwMY%3D"
                            width="30"
                        />
                        </div>
                    </div>
                    <div className="relative -top-14 mx-auto text-white font-medium w-10/12">
                        <span className="text-sm">Bennie Bd Carter</span>
                    </div>
                </div>
                 <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                    <div className="relative">
                        <img alt="Meoun Veasna story image" className="rounded-lg h-44 w-28" src="https://placehold.co/80x120" />
                        <div className="absolute top-2 left-2 border-2 border-white rounded-full">
                        <img
                            alt="Meoun Veasna avatar"
                            className="rounded-full"
                            height="30"
                            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-2vowR6mlrQs3pVQ1qkMTkqNz.png?st=2024-09-22T10%3A09%3A12Z&se=2024-09-22T12%3A09%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A30%3A18Z&ske=2024-09-22T23%3A30%3A18Z&sks=b&skv=2024-08-04&sig=XSS7amrWSGzpIAJAsQ7W%2BFTfqbO8aZNgLQFbyrNUwMY%3D"
                            width="30"
                        />
                        </div>
                    </div>
                    <div className="relative -top-14 mx-auto text-white font-medium w-10/12">
                        <span className="text-sm">Bennie Bd Carter</span>
                    </div>
                </div>
                <div className="flex flex-col items-center min-w-[80px] hover:opacity-80 cursor-pointer ">
                    <div className="relative">
                        <img alt="Meoun Veasna story image" className="rounded-lg h-44 w-28" src="https://placehold.co/80x120" />
                        <div className="absolute top-2 left-2 border-2 border-white rounded-full">
                        <img
                            alt="Meoun Veasna avatar"
                            className="rounded-full"
                            height="30"
                            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-2vowR6mlrQs3pVQ1qkMTkqNz.png?st=2024-09-22T10%3A09%3A12Z&se=2024-09-22T12%3A09%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-21T23%3A30%3A18Z&ske=2024-09-22T23%3A30%3A18Z&sks=b&skv=2024-08-04&sig=XSS7amrWSGzpIAJAsQ7W%2BFTfqbO8aZNgLQFbyrNUwMY%3D"
                            width="30"
                        />
                        </div>
                    </div>
                    <div className="relative -top-14 mx-auto text-white font-medium w-10/12">
                        <span className="text-sm">Bennie Bd Carter</span>
                    </div>
                </div>
            </div>
            <div className="mx-auto bg-white shadow-md rounded-lg overflow-y-auto h-s -mt-8 md:mb-12 mb-32">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                    <img alt="Profile picture" className="w-10 h-10 rounded-full" height="40" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-zIXlsaMtECbOqG7ycFqKDYwO.png?st=2024-09-22T10%3A57%3A31Z&amp;se=2024-09-22T12%3A57%3A31Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-21T23%3A25%3A44Z&amp;ske=2024-09-22T23%3A25%3A44Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=6bXCqI4cxPNv4d33vmMgpQQjkyFZA6sYkDPUz1BuANc%3D" width="40"/>
                    <div className="ml-3">
                    <div className="text-sm font-semibold">
                    Scorpio •
                    <span className="text-gray-500 px-1">
                        Follow
                    </span>
                    </div>
                    <div className="text-xs text-gray-500">
                    16 hours ago
                    <i className="fas fa-globe-americas px-1.5">
                    </i>
                    </div>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                    <i className="fas fa-ellipsis-h px-2">
                    </i>
                    <i className="fas fa-times">
                    </i>
                    </div>
                </div>
                <div className="px-4 pb-4">
                    <p className="text-base mb-4">
                    tired, but I will finish what I started.
                    </p>
                    <img alt="Person sleeping on a desk with study materials around" className="w-full rounded-lg" height="400" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-jvExcRLcRg9CKi5muPt11JvV.png?st=2024-09-22T10%3A57%3A35Z&amp;se=2024-09-22T12%3A57%3A35Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-21T23%3A41%3A22Z&amp;ske=2024-09-22T23%3A41%3A22Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=E0y5t4%2BkHj1iCsZTajLnl4mYqJicq%2BXIGI/lw2ostwM%3D" width="500"/>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                    <div className="flex items-center text-gray-500 text-sm">
                    <div className="flex items-center mr-4">
                    <i className="fas fa-heart text-red-500">
                    </i>
                    <i className="fas fa-laugh-squint text-yellow-500 ml-1">
                    </i>
                    <i className="fas fa-sad-tear text-blue-500 ml-1">
                    </i>
                    <span className="ml-2">
                    999
                    </span>
                    </div>
                    <div className="ml-auto px-1">
                    <span className="px-1">
                    72 comments
                    </span>
                    •
                    <span className="px-1">
                    4.2K shares
                    </span>
                    </div>
                    </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                    <div className="flex justify-around text-gray-500">
                    <div className="flex items-center space-x-1">
                    <i className="far fa-thumbs-up">
                    </i>
                    <span>
                    Like
                    </span>
                    </div>
                    <div className="flex items-center space-x-1 px-1">
                    <i className="far fa-comment">
                    </i>
                    <span>
                    Comment
                    </span>
                    </div>
                    <div className="flex items-center space-x-1">
                    <i className="far fa-share-square">
                    </i>
                    <span>
                    Share
                    </span>
                    </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Posts