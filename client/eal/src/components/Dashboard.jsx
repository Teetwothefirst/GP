


const Dashboard = ()=>{
   function dateCheck(){
    const dateToday = new Date()
    console.log(dateToday)
    const timer = document.getElementById('timer')
    // console.log(timer)
    // timer.innerHTML = `today is ${dateToday} `
   }
//    function createChart(){
//     const ctx = document.getElementById('myChart');


//     new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });

//    }
   
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
                                <div className="taskHeader flex justify-between">
                                    <h5 className="text-primary">Assigned</h5>
                                    <small> Joel</small>
                                </div>
                                <div className="taskdescription">
                                    <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                    </p>
                                </div>
                                <div className="taskfooter">
                                    <div className="flex justify-between">
                                        <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                        <a type="button" className="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <small>Read More</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-6 col-xl-3">
                                <div className="border rounded shadow-sm px-3 py-2">
                                    <div className="taskHeader flex justify-between">
                                        <h5 className="text-warning">Pending</h5>
                                        <small> Joel</small>
                                    </div>
                                    <div className="taskdescription">
                                        <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                        </p>
                                    </div>
                                    <div className="taskfooter">
                                        <div className="flex justify-between">
                                            <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                            
                                            <a type="button" className="text-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <small>Read More</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-xl-3">
                                <div className="border rounded shadow-sm px-3 py-2">
                                    <div className="taskHeader flex justify-between">
                                        <h5 className="text-danger">Missed</h5>
                                        <small> Joel</small>
                                    </div>
                                    <div className="taskdescription">
                                        <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                        </p>
                                    </div>
                                    <div className="taskfooter">
                                        <div className="flex justify-between">
                                            <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                            
                                            <a type="button" className="text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <small>Read More</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-xl-3">
                                <div className="border rounded shadow-sm px-3 py-2">
                                    <div className="taskHeader flex justify-between">
                                        <h5 className="text-success">Done</h5>
                                        <small> Joel</small>
                                    </div>
                                    <div className="taskdescription">
                                        <p className="text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Tenetur maxime laudantium non deserunt consequatur delectus architecto numquam? 
                                        </p>
                                    </div>
                                    <div className="taskfooter">
                                        <div className="flex justify-between">
                                            <small id="timer" onLoad={dateCheck()}>17/12/2025</small>
                                            <a type="button" className="text-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <small>Read More</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="col-12 col-lg-12 mt-3">
                                <div className="border rounded shadow-sm px-3 py-2">
                                    <div className="workrateHeader">
                                        <h6>Work/Time Rate</h6>
                                    </div>
                                    <div className="workratecontent">
                                        <div className="content">
                                            {/* onLoad={createChart()} */}
                                            <canvas id="myChart"></canvas>
                                        </div>
                                    </div>
                                    <div className="workratefooter">
                                        <div className="flex justify-center">------EAL corp 2025---------</div>
                                    </div>
                                </div>
                            </div>
                            </div>    
                        </div>                      
                    </div>
                </div>
            </div>
            {/* 
            /*
            code for modal
            */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Dashboard;