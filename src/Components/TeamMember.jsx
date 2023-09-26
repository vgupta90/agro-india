import React from 'react';

function TeamMember(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
        <div className="card-body p-4">
          <div className="member-profile position-absolute w-100 text-center">
            <img className="rounded-circle mx-auto d-inline-block shadow-sm" src={props.imageSrc} alt={props.name} />
          </div>
          <div className="card-text pt-1">
            <h5 className="member-name mb-0 text-center text-primary font-weight-bold">{props.name}</h5>
            <div className="mb-3 text-center"><strong>{props.role}</strong></div>
            <div>{props.bio}</div>
          </div>
        </div>
        <div className="card-footer theme-bg-primary border-0 text-center">
          <ul className="social-list list-inline mb-0 mx-auto">
            {/* {props.socialLinks.map((link, index) => (
              <li className="list-inline-item" key={index}>
                <a className="text-dark" href={link.url}>
                  <svg
                    className={`svg-inline--fa ${link.iconClass} fa-fw`}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon={link.icon}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path fill="currentColor" d={link.iconPath}></path>
                  </svg>
                </a>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
