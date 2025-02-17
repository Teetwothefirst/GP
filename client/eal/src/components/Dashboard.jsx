


const Dashboard = ()=>{
   function dateCheck(){
    const dateToday = new Date()
    console.log(dateToday)
    const timer = document.getElementById('timer')
    // console.log(timer)
    // timer.innerHTML = `today is ${dateToday} `
   }
   
    return(
        <>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="shadow-sm px-3 py-4">
                                <div className="flex justify-between">
                                    <div className="flex items-end">
                                        <h5>Welcome Paul</h5></div>
                                    <div>
                                        <img class="avatar-md" src="../dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container pt-5">
                            <div className="row">
                            <div className="col-6 col-xl-3">
                            <div className="border rounded shadow-sm px-3 py-2">
                                <div className="taskHeader">
                                    <h5 className="text-primary">Assigned</h5>
                                </div>
                                <div className="taskdescription">
                                    <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                    </p>
                                </div>
                                <div className="taskfooter">
                                    <div className="flex justify-between">
                                        <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                        <small> Joel</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3">
                            <div className="border rounded shadow-sm px-3 py-2">
                                <div className="taskHeader">
                                    <h5 className="text-primary">Assigned</h5>
                                </div>
                                <div className="taskdescription">
                                    <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                    </p>
                                </div>
                                <div className="taskfooter">
                                    <div className="flex justify-between">
                                        <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                        <small> Joel</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3">
                            <div className="border rounded shadow-sm px-3 py-2">
                                <div className="taskHeader">
                                    <h5 className="text-primary">Assigned</h5>
                                </div>
                                <div className="taskdescription">
                                    <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                    </p>
                                </div>
                                <div className="taskfooter">
                                    <div className="flex justify-between">
                                        <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                        <small> Joel</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3">
                            <div className="border rounded shadow-sm px-3 py-2">
                                <div className="taskHeader">
                                    <h5 className="text-primary">Assigned</h5>
                                </div>
                                <div className="taskdescription">
                                    <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                    </p>
                                </div>
                                <div className="taskfooter">
                                    <div className="flex justify-between">
                                        <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                        <small> Joel</small>
                                    </div>
                                </div>
                            </div>
                        </div> 
                            </div>    
                        </div>                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;