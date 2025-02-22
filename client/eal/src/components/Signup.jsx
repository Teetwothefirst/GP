import { Link } from "react-router-dom";


const Signup = ()=>{



    return(
        <>
            <div className="start">
            <main>
			<div className="layout">
				{/* <!-- Start of Sign Up --> */}
				<div className="main order-md-2">
					<div className="start">
						<div className="container">
							<div className="col-md-12">
								<div className="content">
									{/* <img src="./dist/img/EAL.jpg" alt="" width="50px" />  */}
									<img src="src/assets/EAL.jpg" alt="" width="50px"/>
									<h1>Create Account</h1>
									<form className="signup">
										<div className="form-parent">
											<div className="form-group">
												<input type="text" id="inputName" className="form-control" placeholder="Username" required />
												<button className="btn icon"><i className="material-icons">person_outline</i></button>
											</div>
											<div className="form-group">
												<input type="email" id="inputEmail" className="form-control" placeholder="Email Address" required />
												<button className="btn icon"><i className="material-icons">mail_outline</i></button>
											</div>
										</div>
										<div className="form-group">
											<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
											<button className="btn icon"><i className="material-icons">lock_outline</i></button>
										</div>
										<button type="submit" className="btn button" formaction="index-2.html">Sign Up</button>
										<div className="callout">
											<span>Already a member? <a href="sign-in.html">Sign In</a></span>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End of Sign Up -->
				<!-- Start of Sidebar --> */}
				<div class="aside order-md-1">
					<div class="container">
						<div class="col-md-12">
							<div class="preference">
								<h2>Welcome Back!</h2>
								<p>To keep connected with your friends please login with your personal info.</p>
								<Link to={`/`} className="btn button">Sign In</Link>
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

export default Signup;