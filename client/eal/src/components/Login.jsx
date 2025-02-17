import { useState } from "react";
import { Link } from "react-router-dom";


const Login = ()=>{
    
    
    return (
        <>
            <div className="start bg-dark">
            <main>
			<div className="layout">
				{/* <!-- Start of Sign In --> */}
				<div className="main order-md-1">
					<div className="start h-full w-full">
						<div className="container">
							<div className="col-md-12 flex justify-center">
								<div className="content">
                                    <div className="flex justify-center">
                                        <img src="./dist/img/EAL.jpg" alt="" width="50px"/> 
                                    </div>
									
									{/* <!-- <h1>Sign in to Swipe</h1> --> */}
									<h1>Sign in</h1>
									{/* <!-- <div class="third-party">
										<button class="btn item bg-blue">
											<i class="material-icons">pages</i>
										</button>
										<button class="btn item bg-teal">
											<i class="material-icons">party_mode</i>
										</button>
										<button class="btn item bg-purple">
											<i class="material-icons">whatshot</i>
										</button>
									</div> --> */}
									{/* <!-- <p>or use your email account:</p> --> */}
									<form>
										<div className="form-group">
											<input type="email" id="inputEmail" className="form-control" placeholder="Email Address" required />
											<button className="btn icon"><i className="material-icons">mail_outline</i></button>
										</div>
										<div className="form-group">
											<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
											<button className="btn icon"><i className="material-icons">lock_outline</i></button>
										</div>
										{/* <button type="submit" class="btn button btn-blue-200" id="signinbtn">Sign In</button> */}
                                        <Link to={`/D`} className="btn button btn-blue-200" id="signinbtn">Sign In</Link>
                                        {/* <!--formaction="index-2.html"--> */}
										{/* <div class="callout" id="callout"> */}
                                            <div>
                                            <span>Don't have account? <Link to={`/signup`} className="text-dark">Create Account</Link></span>
                                            </div>
											
										{/* </div> */}
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End of Sign In --> */}
				{/* <!-- Start of Sidebar --> */}
				<div className="aside order-md-2">
					<div className="container">
						<div className="col-md-12">
							<div className="preference">
								<h2>Hello, Friend!</h2>
								<p>Enter your personal details and start your journey with Swipe today.</p>
								<Link to={`/signup`} className="btn button">Sign Up</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End of Sidebar --> */}
			</div>
             {/* <!-- Layout --> */}
		</main>
        </div>
        </>
    )
}


export default Login;
