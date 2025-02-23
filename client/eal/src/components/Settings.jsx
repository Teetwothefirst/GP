import { Link } from "react-router-dom"

const Settings = ()=>{

    //Logot will delete user session
    return (
        <>
            <div className="p-3">
                <ul className="flex flex-col gap-3">
                    <h2>Settings</h2>
                    <li>
                        <button className="border p-2 rounded w-40 text-center">Profile</button>
                    </li>
                    <li className="">
                        {/* Change Password, change account settings etc */}
                        <button className="border p-2 rounded w-40 text-center">Account & Security</button>
                    </li>
                    <li className="">
                        {/* Change Password, change account settings etc */}
                        <Link to={`/`} className="border p-2 rounded w-40 text-center">Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Settings