import React from 'react'

function Auth() {
  return (
    <>
    <section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
              <div className="card-body">

                {/* Heading */}
                <h6 className="mb-7">Returning Customer</h6>

                {/* Form */}
                <form>
                  <div className="row">
                    <div className="col-12">

                      {/* Email */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="loginEmail">
                          Email Address *
                        </label>
                        <input className="form-control form-control-sm" id="loginEmail" type="email" placeholder="Email Address *" required />
                      </div>

                    </div>
                    <div className="col-12">

                      {/* Password */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="loginPassword">
                          Password *
                        </label>
                        <input className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" required />
                      </div>

                    </div>
                    
                  
                    <div className="col-12">

                      {/* Button */}
                      <button className="btn btn-sm btn-dark" type="submit">
                        Sign In
                      </button>

                    </div>
                  </div>
                </form>

              </div>
            </div>

          </div>
          <div className="col-12 col-md-6">

            {/* Card */}
            <div className="card card-lg">
              <div className="card-body">

                {/* Heading */}
                <h6 className="mb-7">New Customer</h6>

                {/* Form */}
                <form>
                  <div className="row">
                    <div className="col-12">

                      {/* Email */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="registerFirstName">
                          First Name *
                        </label>
                        <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *" required />
                      </div>

                    </div>
                    <div className="col-12">

                      {/* Email */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="registerLastName">
                          Last Name *
                        </label>
                        <input className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *" required />
                      </div>

                    </div>
                    <div className="col-12">

                      {/* Email */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="registerEmail">
                          Email Address *
                        </label>
                        <input className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" required />
                      </div>

                    </div>
                    <div className="col-12 col-md-6">

                      {/* Password */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="registerPassword">
                          Password *
                        </label>
                        <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" required />
                      </div>

                    </div>
                    <div className="col-12 col-md-6">

                      {/* Password */}
                      <div className="form-group">
                        <label className="visually-hidden" htmlFor="registerPasswordConfirm">
                          Confirm Password *
                        </label>
                        <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" required />
                      </div>

                    </div>
                    <div className="col-12 col-md-auto">

                      {/* Link */}
                      <div className="form-group fs-sm text-muted">
                        By registering your details, you agree with our Terms & Conditions,
                        and Privacy and Cookie Policy.
                      </div>

                    </div>
                    
                    <div className="col-12">

                      {/* Button */}
                      <button className="btn btn-sm btn-dark" type="submit">
                        Register
                      </button>

                    </div>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Auth