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
                                        {/* <img src="./dist/img/EAL.jpg" alt="" width="50px"/>  */}
										{/* <img src="src/assets/EAL.jpg" alt="" width="50px"/> */}
										{/* <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBIQEhUVFRUQFRUVFRUVFRUSFRUXGBUVFRUYHSggGBolGxUVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy8lICYtLS8rLS0tLS0tLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADcQAAEDAgQEBAUDBAIDAQAAAAEAAhEDIQQSMUEFUWFxIoGRoQYTMrHwFOHxI1LB0UJicpOiFf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACoRAAICAgIABQMEAwAAAAAAAAABAhEDIRIxBBMiQVEUMmFScYGhQpGx/9oADAMBAAIRAxEAPwD1cKQFwRBeQZHBq7KjC5AgIUwpK4IA4BEFC4IAIBTC4FSgZEKQFCmUATCmFErpQFkwoyqMy7MnY7JyroUZlGZKxWSUBXFyEuTsLOKEqCUMpWKwioQkoSUuQBFQgldKOQWEUBKglASlY7DlclyuRYWWgUbUtECgQwKZQSulHILCXIZUgpWAYUoZXSnYBhSglTKYBSulDKiUAGuQSpSAkqFBKGUmwClSgUgpWBJQFSXISUAQhK4lRKlsDigKMlAUCIUFEhckAKEqVBCLAFcuXJWBcUgIgF0LooqjgF0IlCTSCiIUqQFMJUFAqVMLgEUFEgKVwClOgoEhQiXQihEAKYRAKYToKFkIYTcq4tUuIUKhRCZC6EuIULIUFqdC6FXEdFcsQ5VZLUshJxChRCGE1TCXEKEwhcFYLUDgjiPiIhQWp0LiEuI1Ar5VyflUI4ofAcCiBS2uU5lpQ7QxcAhzKQUCtDGhSUAchL0ibGKQlh6hz0AOUqt85GKiEwGKQkl61eHUGgBz7HUduauKtjiuTpFWlRcTABPkrdPhdQ7AdyrtTijGixB6/wAKu7i7YJkLXhFGywgO4TUGmU9j/tU61FzbOBHdXhxJpaHsdYqxQxYqDxCQdUOEX0N4daMMqJTcZSyOLfTtsqpeueWuznehkqZSg5TmQmKwyUpylzkpz0N0DYYRpDaik1UJoVjC5A4pZeuzotD5EkriUDiluek5UHIdmUJOdclzQcmH8xEHpbgiYjkacRgcizpZXNTslobmQlykJTym9EtBiouc5KYnEKFbEJzXT6aVCdR1CIqmCRq06NFsOqZp5E2WfxDjtF1QUho45AQNCsjjfF4cWg2a0k+Q1XkeD4g1ajqh+lnO2Z508tV0p+yPRhjjGNnssZiwNHT1IGm0ALz3xB8TGm35NCmKtUwXkhzgxpOzG3c77apww7qzpc4gbBth7LS4fwYjR4pN1LiL+XVXDvYS6KHwFWxAdUbWaW0yczc0hxBP9smF9Gp06cfVAOy8bjsWwENpO8LfqcTqVncS4nnYaYqOp2+oQXfnRF3IdUj0+K4jQd4RiGvc0kEuyi02Ei1tEjMvgWNp1A8y4ugxPnEr7pwDBxgMK4Zp+UGuk5iHDmRvCXiMCS5I4civZba5dnS5QlcfKjKxpekuKmUJCb2AIcuLlK6FIiM6jMuIUJ8QDzJbnKXJJKmQw8y5LlQlQrHvqqBXCk0pVaphzKXK+jfJCcey22sFxqqtTwzk4Yd3JNSFwyV0PbUQlyOnhiVzsMUeauivJyVdEsKlzkdPDGEYoFS8qiXj8Lkkyu0qatXK0u5AlPdhSs3j0soOI3IHkrhNSoF4ecZ00eUxlUmnUedXnL5D/ZPsqnAyBT11IPp+BMrv/pj/AMiVV4NVaG5TY6e67Y9M6pvo9NhMWA7nCpcd+KWUyGOIEzAA2GpMbJX6vKbLy3xTwpz3/ObcFoaQNgP5KqCTdMzk2uj02E44x7Za5txIuN/9rK4pxNgF3jflOnIefqvNYd1IzLjTfYAH6DsSXbWWvh+FsqgOZeQdI2F/YHyXQsVMlOxeD4VWxNN9agGj5d3fMtLbaEdOa+nfC2NnCik4tJYROXQE6Qd1kcC4cXYV+Ga4Nc4tgn6S2RIkdYtrdbnB+CjDtLQ4uzQTyzCdOkR6Lm8TNx9LH5a4P5LhMpRV5uHCB2GXnykjn+mmVmsKItV0Ycwk1GXThL5Ll4dxRUIUK2KBKL9NzROSXQoeGlIzi5CHq4+gEDMPdT5iSsS8LPlQhwSHlaVWlZUDTkqoTUlYZfDShJIVnXKx+nXJeah/STNGhTCsNoBZtOqQrbMVa6ylyiqPShwyO2WDTaudlVX9Qk/OndZxg7OibikXc4RAzss81E6jiQE3DiSpKXRcY9S4hV/ntKmpXACmOK9sqUt+kacQAkYqm2qwsO6qudKilMroUF7HPLLvZ43jfCHUGF0y0me11hU6LrOsJg9wvq/xDhm1KH6c3khzj1mYXkOJYJs2Edl6EIyitmEpJvRm0PE267MRYgkJzBl8Kb+ob9JF+1lTiZ2YeN4XSqGSB3Fj7LDo8Nr03ZmQCJgzsQR9ivYuYM0AbT0W5wnAU3GKjAeaqGSS0Eop7PP/AAnVxzqjabntayRmcRLg2bxfWF9GcrfBMFQa05abRNra+qr4lmVxFwJ9ll4luSTYK+gmOJTCEqnWaFD64K8ycbO/DrtjH17Kk+pdS7EiYKlxESE4yjVMMuPKndaGUcQBqprYgbKlUXF4AupkkmJKUtJDqb+aD54myzquKkwEsVSELHeycmbg+LWzVL5QspXlZ9GudU0Y46I3FUjSKU3+xfnsuWZ893JcjjI0pDcNi2usCmO6FeewNMtm6uU6pG61cchhkyeHX2M0s1kFGmZlVBiUQxuy0la6RxQnzdNms1oi6pVp2SP1BKu0qfhLiVKXuVNzbpexWZmCsUWzqVWZiVP6qE5RbQsWWpbejYp4YQn0cOJBG11ks4jNoW5hGAU3VDyIHcqcGPI5pM6cjx8bRkYyvLjfdYuO11V7Ei5WfWHO69Ns5EioWDUfnmk1KUXKuNA76+sWS8VSn6O3l+D3VIYrC0JMnQLQwOI8WWRGgJiP5SqVI5HGLxPnN1X4c0kBpEi3rIOvmiqA+g/DtUHw7gq58RYckBwBMWPRZ/B6zWgAax5z+Bb9Y5qbt7HRTKPKDQJ8ZJni3tJFkumCAur4wgloCRSqunxLy3l/B2rCvuvYwDcporDRE6s2NFVc5pulxi9lSyySrsY6tCJ2FLrqm+vaIuip45wEKY45doJZoJqLYLsNDkbqAi6AYgzJTKjS8WRmlKKSQsePHldp2dhA2YKViWgPslV2OpkJjGB8klF+i2bxUYS4xGSFCV8sc1Ky18m+/gqjCwgcw7K04me6ZSrWMxZditL5PBbUnrRSp0CR1SzhXSCVoh5HiEI6dUnUK4ScvYiSUemIpUosrAouIiVDomE+pWygWuqkkkTGUm0rKn6eyYWQE1tWdbIKri0SbqY+pWXJ+X6ew6FHMWkazC3eLVAGNpt6eZWNwysC7tJhTXxWd47rfBFJF83JWya1PdUK17FXcQ+yznka3XQyUVMTTEajzMIKBggH8lNrUgRfVZ9OoAbOsPZItG9RAdI6fkqnVs621vNBhaxveNCDyibJLMW5xOgvHv7JsEes4IIgnX8leuwrwWka2K8Lw3GTuZ0PJes4PWBsJuPyE4smR5qpUYCTCTiqReAWAyuxLXPecrDbVJZintdJtGy8PJj9XKO/wepCXpqen7MS/M3wuBVg12NAEXTqzvmMzugEJJpaSFTipRTloxjKalKvUDUozcWQspxrdFifCddlFN7YgnVdkYtR0cMpRcm62Ke0G6lmII0Vqnh6Z/5JFXBEXbBCznxlqRcI5IeqAFVxfqopPa0FhF1DyRAGqU919Lo8tVXsWs3GXLthwOS5R8zooV8Ym/10vgB0nWLBRhKodoNbQfugp4iweB9Vo5I2On/AiIG0IcdaZ5uOcKpqzQq0QIHSSl1CA61wPuqjsRBuZIG+u2qu4TEU8subcGDJ97KZz4Rt/wBFY8fmzqP9ldlSTm/AjfXBtG9inPZTcYYMrtYmxHO67EYem3wxmcBJgn0WSzRXyay8NOT9v4F0Hyb68lae+YBAHdQ91IAObMakmLCARPuEkODpcwhze4ke61WSNaZH0uXurRZp0g01HAizWjzM/wCIWVSqXnqtR0ijF/ES7ygAfZZGGHjvzXZHpDj0XMY5wiIVOrWLRLnDrAT8WQ6RdDRwgIjXuneyq0ZVeu76xdp9lmCqXO8OhMfstjG08gc3kJj86LGwkRmve/qrFZpNrAMc2YvbrE8lRwlbxkHurLcp0VOjXaa1v7ZPYTdCQWb+ErAOAEyTfkvfcBZMOHmvBcIol5DoudB9gvofB8PkAJJmPL0QlTG9o0jg6UzkEnlZE/h1F4ymm30vfqqmJxYa8jnB9VYoYmU1GN9CbbR5vj/CDRb4LsnfY8iqVLEU3eF0iwlez4jQFWk6mdxbvsvm9RwBAzAuk20NtbclxeI8LjTv2Zrj8Vlj6Vs2cU3DACblUIoH6WvG0qphagL4MWE72M7ptavnaYALrkQY05rJZ4xlwoqeCU4uar/oTHCcrBJMnyCj5RnxGIkQDZZlPGBsh7srnC0Tb00S31asWOYRvY30AI6LR3fRzwS4q3RqCkWguuYQjIXAnQqvTxdQUixpBkgy4bDl1Q0sQJv2ntdPbIk4xa47NXLR5LlQzD/r6rlPBl+a/hGf8uTLTFzb+PL0Q4/E5InxSIte4cAIjv7I2zBIGpzGBy356JuFxGTMHtaQ2SQ9odJEQR1F029aVnNjjctuhDH2vc5QCdR3Hq31TDiQRlJ3MjaW/snYfEm4ECWiREAm8+zvQKs6kM2gALrEm+X+AoXq7VGruC9Mh1esBIvodx5ERqNPZc3i052sMuEF02hp1I3NtggpYEf8yXTJAJ2NnNHIR+WQnhwcPmAlrmnKWm8i2V3rElVwTSFHJIKpVEAEkggyNLAi3/0jdTBlrBaQbba3PP8AdVmUGtcbZvCCALy6QL+nslmRUc41Msw3wzIaJBkaXlT5aY8fiMmJ9m/isTLG6aLPpOGb3SW1AWAOMj6SToZOnus+jVyVcpMtJsZuDpldz1EH/Nz2R6SNOV7ZqZiTqtTB6Xt03WYymJKuUakffyU3TNatFf4iof03uGoE+i8Th8dHb9l7/wCIHf0XEbgr5RUNiRo0gesx9iuhU0Ys9IzFgTfT7Kp8PMLqzydIA8pVHh1J1UhrQ6MrpMGBlBsfQeq1uF/03AQbxFtRz+6Yj33w/TgZrcgvV4Kqbcja68pwKoRTD5sTI/fovRcPxYNiR/pYzls1itDuL0zmYW6kZekTM9NU7CBwH+U2oySDawgnkOndTUxLWjeDuRAlarqyPwNpYmDBhfP+MUGtqvcJnM4a7SYIK9TUxID5zQRqJtGxCpY/hhdmeSxwJzDYi5kQbaFYZfUqHVNM80KAa4Pc05SNjAkyD7oqdMGnUbSjMJIkgTG3eZVjEgiQZgcwYm2++gQsZcsjxETymNwYsf8Afpyzg5Kghk4TsqspuJJAaHH6rCIjUH1XPwrmtcCI8M6gyY+11YxLBTY2pnaSTlDb5gDpI8uftoqkdj4TceLxCRcsMae6eJriHiOV2469vaxNSm4iGgANDQTIIJgxp29kmu8tMkDWSRuCDcRrdX6zwG+JpGwHJxtqPT05Km9skmL5Z+9428MeStptmCaF/wD6TObvRck/o6XT3/2uTpnRzwfpf+yy05b5iCItE2Eafm6iq1huLlw2nSdvdFUw+bX6pseR087FLwdJ1NxkAEvkco0gnUKZPVo5saUpVJ0h7qgaMp3I1EG208r+6D502dsSJg36Cd4m/RPquc4ZSGkSAbmx5g+SqtpEk3sJJ890o/kvKoquLu/4Dq4gCC0mIJg67Ae0+qZSxYMgaWuAJjUEHn+yoVC4kMYB4bOJ7rSp4eAZsREQd+yqnWjEY64ubxruBy0VJ2CDzZ0SZk8p3O/8KzmFwTcn+fsu5tEa2/hS2UqbKbMI1pcAYBH03IBsPzupw+FyXs6G5Y3voZVsMbmEkEi/bofRE5gzG1j7HomuSDkxD5a8AzH0zt0Vt7WhodJ0gxfQTbc8vNLZRzWMG+u9tIRvBLRAsJjvom20NTaOxrTUoFjSMxBI5gi6wsZ8J03UnicjiGzA0c1xuB2Lltl2WR380L6hHhI6dLo8xoTm2UMJwxjHsNMhrQ6XD+45HCT0GVvqkngLWD+m4y7M0GYhwcIA5WIW4XBo5EdNSRHpAVYm/iNxoBzOpVLI1oVtBUS9rWsmALdokGVeoGIAN5AJ6E3P5zVMPtldmh2+unNBTrCYsBPmeSnlvZp5slpHs28RyjKIcQ7IJte8/ZQ3GF+UZmuzhxyRGhAidjr6LyH6mRuDIvfz0TW4gtDSXOdt1BBm3SVXmXorzX3QfGmVJDASJIi0xlklruREdlTr4urIZL4uJ0AIaD59xuIVyrXJIzeIOmTOuYiHf5U2DAHwZkiddef5sh7Dzp+xn4H5oLy5xfOk/Tp+eia17yQXNkB3iOsExcO2n09iip0yHRe9vLqgpMMOzGAPE3p3I81mk+0S5t/cVcS0m4mLA+wBI2IEevdWqoJa0ZpytMECXdJ5zlKL54IDSZ1E/wCk3DkNzXuGxOs319lS1oHkbq/YzsW2q6A0O1aJsbzt2gT5pbs8FwDjqwCL5RqI56COiv8AzCbEmxnsTr23RB8OINyQIyxraPO2vVUvkiUr0Z3i/vr/APq/dctfI7+1StP4FyRnNPXeR1PVWsUIa29yCT0KzaT4Ic4X5bKwA4mSZB25LFPsEmFTrNGonRC6GyZ1sY17FDkIM2hCYAvBnQoGkOewDxDlp+bpja7S0TaLeSTTNolE8iwA7ynsfGIQpSSQdRCcG3kibR2VSlaSfZE90i1j90uJVJLR2STIVphIbyJOvRU21IROqExfyTSpEmgxjSLESb+fJLdVLIg3G3RVxWB0tCU+tNiiUb2TJWX21g6TAI5aEHokudmdmMgG3YaKmx9/ZWQNpKmSbRcUrVhvbMnWIEjpzKWA1pAgjdJzlstBIBuYQ/Pl0k9FEIP/ACLy8H9pZcCd9ifPkq4MEDXed5XNxgzcoQmoDJ9FpxMyxnmIAmb9tks1jYyRB9kAtdLqVQSjghWWj4vEYPt6Iw9thcgAx0KoB1oP4FDqkJ0NOi5VxRaHPPP2G0JmGxIgGZzA+/RZ7q0w2F1IlrpiEuLWxpxrovPpgGbjvqTuQlssSDz1Cz8RDn55M/4ViljC0h1pB5Ia+AlH4H1XHMYvYB3U6SmOqEHYFoGXtukVcUCZAjn1SxWkwe/lyT6ZLVo6H/8AdSi/Uhci2Tr4Bpx9JVrMAI35qjhz4pTqr5Rsq9Fh1URHOyFtENtIvdKyZoTHGyTe1Qm9gUxBHKbq3jGtDbaqlTpXuU5773T5A3tC6NPcqRSdOoDZScc98eGAqVDD1CPE5yaotuzZNNgEl4lVHYtrfrEjYhUBwcGS4me5VhmFgBuyq4jUl8DW1JuLTzTGndE1gIAU1MNFws3JBxlXQutV3XHEyEx9CQlNpHRK72SmDSM2lHiGtAhEGKKmHzKrQ/3K+GPNWnMgShw9CFq0Gsi4WWXIoKzXFheV1Eyzollsmy3a+GY5vh1WLVpuYdEsWeM3oeXBLH2gXC6WaRJsrDecLtXQNFvZz0V20jMtTmnWfVWgwRAQvw9pmByQnY1GuzNmSYCFzDsFcFOBKJpMTEJDpmeHAEF1guq1Mx8ATcXRz62hBh6JaDzSp3Z1J4lDi+/kD5RXIvGuRciPKx/qP//Z" alt="" width="50px"/> */}
										<img src="https://drive.usercontent.google.com/download?id=1IYEj_vUkbOlL0izU_vP-2VfXaFIJIio7&export=download&authuser=0&confirm=t&uuid=f094f191-68fe-4a37-8e3d-4aacc0d76649&at=AEz70l6Ere07KUXmiLxg9zPw24ff:1740247069049" alt="" width={50} />
										{/* https://www.shutterstock.com/image-vector/eal-lettering-initial-monogram-logo-design-2207957599 */}
										{/* <img src="https://drive.google.com/file/d/1IYEj_vUkbOlL0izU_vP-2VfXaFIJIio7/view?usp=sharing" alt="" width="50px"/> */}
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
