import React from 'react';

const TeamMember = ({ imgSrc, name, designation, socialLinks }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="row g-0">
        <div className="col-10">
          <div className="position-relative">
            <img className="img-fluid w-100" src={imgSrc} alt="" />
            <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
              <h4 className="text-white">{name}</h4>
              <span className="text-white">{designation}</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
            {socialLinks.map((link, index) => (
              <a key={index} className="btn btn-square rounded-circle bg-white" href={link.url}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMembersSection = () => {
  const teamMembers = [
    {
      imgSrc: "img/team-1.jpg",
      name: "Name 1",
      designation: "Designation 1",
      socialLinks: [
        { url: "#", icon: "fab fa-twitter text-secondary" },
        { url: "#", icon: "fab fa-facebook-f text-secondary" },
        { url: "#", icon: "fab fa-linkedin-in text-secondary" },
        { url: "#", icon: "fab fa-instagram text-secondary" },
      ],
    },
    {
      imgSrc: "img/team-2.jpg",
      name: "Name 2",
      designation: "Designation 2",
      socialLinks: [
        { url: "#", icon: "fab fa-twitter text-secondary" },
        { url: "#", icon: "fab fa-facebook-f text-secondary" },
        { url: "#", icon: "fab fa-linkedin-in text-secondary" },
        { url: "#", icon: "fab fa-instagram text-secondary" },
      ],
    },
    {
      imgSrc: "img/team-3.jpg",
      name: "Name 3",
      designation: "Designation 3",
      socialLinks: [
        { url: "#", icon: "fab fa-twitter text-secondary" },
        { url: "#", icon: "fab fa-facebook-f text-secondary" },
        { url: "#", icon: "fab fa-linkedin-in text-secondary" },
        { url: "#", icon: "fab fa-instagram text-secondary" },
      ],
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
          {/* <h6 className="text-primary text-uppercase">The Team</h6> */}
          <h1 className=" text-uppercase">Our Team</h1>
        </div>
        <div className="row g-5">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              designation={member.designation}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembersSection;
