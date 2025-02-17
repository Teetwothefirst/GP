import { Link, Outlet } from "react-router-dom"

const Admin = ()=>{

    // function

    return(
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 shadow-sm bg-red-200">
                    <div className="sidepanel h-screen px-3 pt-3">
                        <div className="">
                            <div className="dashboard">
                                <Link to={`/D/main`} className=""><i className="bi bi-grid-1x2-fill"></i>Dashboard</Link>
                            </div>
                            <div className="chat">
                                <Link to={`/D/chat`} className=""><i className="bi bi-telegram"></i>Chat</Link>
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