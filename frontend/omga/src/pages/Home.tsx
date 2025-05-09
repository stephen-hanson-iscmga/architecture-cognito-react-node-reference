import React from 'react';
import '../styles/bootstrap-min.css';
import '../styles/bootstrap-toggle.min.css';
import '../styles/bootstrap-colorpicker.min.css';
import '../styles/isc-login.css';

const Home: React.FC = () => {
  return (
    <div
      className="log-page-bg"
      style={{
        backgroundImage: "url('/content/loginbackground/1660.png')",
        backgroundSize: 'auto',
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
      }}
    >
      <div className="row" style={{ height: '100%' }}>
        <div className="col-sm-6">
          <div className="log-page-overlay">
            <img
              src="content/logos/1660.png"
              alt="Logo"
              className="log-page-overlay-logo"
            />
            <p>Please login to your account.</p>

            <form id="loginForm" method="POST" action="/amp/login/index">
              <div className="form-group">
                <input
                  className="form-control"
                  required
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Email"
                  defaultValue=""
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <a href="/amp/index/forgotPassword" className="pull-right">
                Forgot password
              </a>

              <div className="clearfix" />
              <input type="hidden" name="currentReferrer" value="" />
              <div className="form-group">
                <button type="submit" className="btn btn-lg btn-block btn-default">
                  LOG IN
                </button>
              </div>

              <div className="get-appointed">
                <p>Not appointed yet?</p>
                <div className="form-group">
                  <a
                    href="https://www.iscmga.com/getappointed/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn btn-lg btn-block btn-default">GET APPOINTED</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-sm-6 log-page-center hidden-xs">
          <h1>
            Insurance Programs
            <br />
            Made Easy
            <div style={{ marginTop: '10px' }} className="clearfix" />
            <span id="slogan">Get Your Clients Covered With ISC</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
