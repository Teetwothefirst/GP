import '../App.css'

import { Link, Outlet } from "react-router-dom"

const Admin = ()=>{

    // function

    return(
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 shadow-sm side-panel-color">
                    <div className="sidepanel h-screen px-3 pt-3">
                        <div className="flex flex-col gap-4">
                            <div className="dashboard">
                                <Link to={`/D/main`} className="text-white flex gap-3 items-center"><i className="bi bi-grid-1x2-fill"></i> <h6 className='m-0'> Dashboard</h6></Link>
                            </div>
                            <div className="chat">
                                <Link to={`/D/chat`} className="text-white flex gap-3 items-center"><i className="bi bi-telegram"></i> <h6 className="m-0">Chat</h6></Link>
                            </div>
                            <div className="chat">
                                <Link to={`/D/settings`} className="text-white flex gap-3 items-center"><i className="bi bi-gear"></i> <h6 className="m-0">Settings</h6></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 mainContent p-0">
                    <Outlet></Outlet>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Admin;