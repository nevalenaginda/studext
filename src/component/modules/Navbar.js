import React from "react";

function Navbar() {
  return (
    <nav className="fixed-top navbar  navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <div className="ms-0 ms-md-3 navbar-brand" href="#">
          <img
            className="img-fluid"
            src={require("../../images/logo studext 1.svg")}
            alt="Logo"
          />
        </div>
        <form className="d-flex me-auto">
          <div className="input-group border flex-nowrap radius20 searchBar border-0">
            <span
              className="input-group-text ps-3 border-0 radiusLeft20"
              id="addon-wrapping"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.04795 11.1693C8.15468 11.6971 7.11271 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.11272 11.6971 8.15469 11.1693 9.04796L16.5459 14.4246C17.1317 15.0104 17.1317 15.9602 16.5459 16.5459C15.9602 17.1317 15.0104 17.1317 14.4246 16.5459L9.04795 11.1693ZM9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"
                  fill="#008FFF"
                />
              </svg>
            </span>
            <input
              type="text"
              className="form-control shadow-none border-0 radiusRight20 color2"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="addon-wrapping"
            />
          </div>
        </form>

        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-three-dots-vertical"></i>
        </button>
        <div
          className="collapse navbar-collapse bg-white"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <div className="nav-link icon" aria-current="page" href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.71368 0.499524C9.3217 0.100155 8.6783 0.100154 8.28633 0.499524L4.04392 4.82192C3.42301 5.45453 3.87119 6.52239 4.7576 6.52239H5.4V15.7724C5.4 16.877 6.29544 17.7724 7.40001 17.7724H10.6C11.7046 17.7724 12.6 16.877 12.6 15.7724V6.52239H13.2424C14.1288 6.52239 14.577 5.45453 13.9561 4.82192L9.71368 0.499524ZM8.99471 6.52239H9.00531C9.99698 6.52525 10.8 7.33004 10.8 8.32238C10.8 9.3165 9.99412 10.1224 9.00001 10.1224C8.0059 10.1224 7.20001 9.3165 7.20001 8.32238C7.20001 7.33004 8.00303 6.52525 8.99471 6.52239Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M1.8 8.32238C0.805888 8.32238 0 9.12827 0 10.1224V15.9724C0 16.9665 0.805888 17.7724 1.8 17.7724C2.79411 17.7724 3.6 16.9665 3.6 15.9724V10.1224C3.6 9.12827 2.79411 8.32238 1.8 8.32238Z"
                    fill="#5C5C5C"
                  />
                  <path
                    d="M16.2 8.32238C15.2059 8.32238 14.4 9.12827 14.4 10.1224V15.9724C14.4 16.9665 15.2059 17.7724 16.2 17.7724C17.1941 17.7724 18 16.9665 18 15.9724V10.1224C18 9.12827 17.1941 8.32238 16.2 8.32238Z"
                    fill="#5C5C5C"
                  />
                </svg>
                <span className="ms-2">Home</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link icon" aria-current="page" href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289C19.8946 3.48043 20 3.73478 20 4V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H7C6.20435 21 5.44129 20.6839 4.87868 20.1213C4.31607 19.5587 4 18.7956 4 18V6C4 5.20435 4.31607 4.44129 4.87868 3.87868C5.44129 3.31607 6.20435 3 7 3ZM6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19H18V17H7C6.73478 17 6.48043 17.1054 6.29289 17.2929C6.10536 17.4804 6 17.7348 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM10.4444 10C10.1989 10 10 9.79921 10 9.5514V8.67082C10 8.42302 10.1989 8.22222 10.4444 8.22222C10.69 8.22222 10.8889 8.42302 10.8889 8.67082V9.5514C10.8889 9.79915 10.69 10 10.4444 10ZM13.5556 10C13.31 10 13.1111 9.79921 13.1111 9.5514V8.67082C13.1111 8.42302 13.31 8.22222 13.5556 8.22222C13.8011 8.22222 14 8.42302 14 8.67082V9.5514C14 9.79915 13.801 10 13.5556 10ZM12 11.7778C11.6796 11.7778 11.375 11.6108 11.1642 11.3195C11.0859 11.2113 11.0953 11.0471 11.1852 10.9528C11.2751 10.8586 11.4114 10.8698 11.4898 10.978C11.6185 11.156 11.8045 11.258 12 11.258C12.1955 11.258 12.3815 11.156 12.5103 10.978C12.5885 10.8699 12.7249 10.8586 12.8148 10.9528C12.9047 11.0471 12.9141 11.2113 12.8358 11.3195C12.6249 11.6107 12.3203 11.7778 12 11.7778Z"
                    fill="#5C5C5C"
                  />
                </svg>

                <span className="ms-2">My Course</span>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link icon active"
                aria-current="page"
                href="#"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H4ZM9 3C8.17157 3 7.5 3.67157 7.5 4.5V13.5C7.5 14.3284 8.17157 15 9 15C9.82843 15 10.5 14.3284 10.5 13.5V4.5C10.5 3.67157 9.82843 3 9 3ZM4 9C3.17157 9 2.5 9.67157 2.5 10.5V13.5C2.5 14.3284 3.17157 15 4 15C4.82843 15 5.5 14.3284 5.5 13.5V10.5C5.5 9.67157 4.82843 9 4 9ZM12.5 8.5C12.5 7.67157 13.1716 7 14 7C14.8284 7 15.5 7.67157 15.5 8.5V13.5C15.5 14.3284 14.8284 15 14 15C13.1716 15 12.5 14.3284 12.5 13.5V8.5Z"
                    fill="#5C5C5C"
                  />
                </svg>
                <span className="ms-2">Dashboard</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link icon" aria-current="page" href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 9C18 10.6781 17.5407 12.2489 16.741 13.5936L17.5342 16.3696C17.7434 17.1019 17.0899 17.79 16.3478 17.6187L13.2908 16.9133C12.0154 17.6063 10.5537 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM5 10.5C5.82843 10.5 6.5 9.82843 6.5 9C6.5 8.17157 5.82843 7.5 5 7.5C4.17157 7.5 3.5 8.17157 3.5 9C3.5 9.82843 4.17157 10.5 5 10.5ZM9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5ZM14.5 9C14.5 9.82843 13.8284 10.5 13 10.5C12.1716 10.5 11.5 9.82843 11.5 9C11.5 8.17157 12.1716 7.5 13 7.5C13.8284 7.5 14.5 8.17157 14.5 9Z"
                    fill="#5C5C5C"
                  />
                </svg>
                <span className="ms-2">Chat</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link icon" aria-current="page" href="#">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99999 20C9.09999 20 9.99999 19.1 9.99999 18H5.99999C5.99999 18.5304 6.2107 19.0391 6.58578 19.4142C6.96085 19.7893 7.46956 20 7.99999 20ZM14 14V9C14 5.93 12.36 3.36 9.49999 2.68V2C9.49999 1.17 8.82999 0.5 7.99999 0.5C7.16999 0.5 6.49999 1.17 6.49999 2V2.68C3.62999 3.36 1.99999 5.92 1.99999 9V14L0.70999 15.29C0.0799904 15.92 0.51999 17 1.40999 17H14.58C15.47 17 15.92 15.92 15.29 15.29L14 14Z"
                    fill="#5C5C5C"
                  />
                </svg>
                <span className="ms-2">Notification</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link icon" aria-current="page" href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM4.5 7.99065C4.5 8.54821 4.9476 9 5.5 9C6.05253 9 6.5 8.54808 6.5 7.99065V6.00935C6.5 5.45179 6.0524 5 5.5 5C4.9476 5 4.5 5.45179 4.5 6.00935V7.99065ZM11.5 7.99065C11.5 8.54821 11.9476 9 12.5 9C13.0523 9 13.5 8.54808 13.5 7.99065V6.00935C13.5 5.45179 13.0524 5 12.5 5C11.9476 5 11.5 5.45179 11.5 6.00935V7.99065ZM7.11956 11.969C7.59382 12.6242 8.27921 13 8.99996 13C9.72071 13 10.4061 12.6241 10.8805 11.969C11.0567 11.7255 11.0356 11.3561 10.8334 11.1439C10.6311 10.9318 10.3242 10.9572 10.1481 11.2006C9.85833 11.601 9.4399 11.8305 9.00002 11.8305C8.56015 11.8305 8.14172 11.601 7.85197 11.2006C7.67562 10.9571 7.36896 10.9318 7.16664 11.1439C6.96439 11.3561 6.94328 11.7255 7.11956 11.969Z"
                    fill="#5C5C5C"
                  />
                </svg>
                <span className="ms-2">Profile</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .searchBar span,
        input {
          background: #f5f5f5 !important;
        }

        .searchIcon {
          color: #008fff !important;
          font-weight: 900 !important;
        }

        ul li {
          margin: 0 16px 0 0;
          cursor: pointer;
        }
        .icon > span {
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
        }

        .icon:hover span,
        .icon:hover path {
          color: #008fff !important;
          fill: #008fff;
        }

        .active span,
        .active path {
          color: #008fff !important;
          fill: #008fff;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
