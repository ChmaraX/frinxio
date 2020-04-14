import React, { useState } from "react";
import { Button, Icon, Table } from "semantic-ui-react";

const perks = [
  "Working on projects for prestigious global companies",
  "Working at an international, dynamic, fast-growing company",
  "Flexible working hours",
  "Possibility to work from home",
  "Young, agile and friendly team",
  "Sick day",
  "Delicious coffee and tea anytime you want",
  "Casual dress code",
  '"Stay healthy" bonus',
  "Work-life balance",
  "Fun team-building events",
  "Cutting-edge design, development and delivery of highly available, scalable and secure networking applications, open source included",
  "Competitive compensation",
  "Support of personal growth and knowledge sharing",
];

const positions = [
  {
    title: "SOFTWARE ENGINEER JAVA",
    location: "Bratislava or Ružomberok office",
    salary: "1200€ - 3000€",
    time: "Full-time / Part-time, Options of home-office",
    exp: "JAVA (min 3 years), UNIX, Maven",
    jobDesc: [
      "Analysis and architectural design of software products",
      "Analysis and testing of proposals for software products",
      "Cooperation in the development project schedules",
      "Cooperation in the preparation of tenders",
      "Cooperation in projects within the respective project teams",
      "Cooperation with other department staff",
      "Implementation of proposed software products based on the prior analysis and design",
      "Development of technical documentation for software products",
      "Configuration and deployment of software products into operational environments",
      "Testing of software products based on the prior analysis and design",
      "Participation in internal meetings and meetings with clients, reporting",
      "Effective communication and collaboration with other departments and employees of the company, including business partners",
      "Other tasks as instructed by a superior",
    ],
    jobReq: {
      education: [
        "Secondary with school-leaving examination",
        "Follow-up/Higher Professional Education",
        "University education (Bachelor’s degree)",
        "University education (Master’s degree)",
        "Education Specialization in IT",
      ],
      personal: [
        "Advanced knowledge of JAVA (min 3 years)",
        "The ability to handle a full life cycle development from analysis, design, deployment and testing",
        "Knowledge or experience with these technologies is an advantage: network and communication protocols, client/server architecture, XML manipulation and parsing, UML, JSON, knowledge of ISO/OSI models, Unix, Maven",
        "Model-driven architecture/ domain-specific languages implementation is an advantage",
        "Willingness and ability to teach and share knowledge",
        "Knowledge of OpenDaylight technology is an advantage",
      ],
      lang: ["English – Upper intrermediate (B2)"],
    },
  },
  {
    title: "SOFTWARE DEVELOPER TRAINEE",
    location: "Bratislava or Ružomberok office",
    salary: "Salary starting at 4€/h",
    time: "Full-time / Part-time, Options of home-office",
    exp: "Any of: JAVA, KOTLIN, PYTHON, C++, GO, JavaScript",
    jobDesc: [
      "Analysis and architectural design of software products",
      "Analysis and testing of proposals for software products",
      "Cooperation in the development project schedules",
      "Cooperation in the preparation of tenders",
      "Cooperation in projects within the respective project teams",
      "Cooperation with other department staff",
      "Implementation of proposed software products based on the prior analysis and design",
      "Development of technical documentation for software products",
      "Configuration and deployment of software products into operational environments",
      "Testing of software products based on the prior analysis and design",
      "Participation in internal meetings and meetings with clients, reporting",
      "Effective communication and collaboration with other departments and employees of the company, including business partners",
      "Other tasks as instructed by a superior",
    ],
    jobReq: {
      education: [
        "Secondary with school-leaving examination",
        "Follow-up/Higher Professional Education",
        "University education (Bachelor’s degree)",
        "University education (Master’s degree)",
        "Education Specialization in IT",
      ],
      personal: [
        "Advanced knowledge of JAVA (min 3 years)",
        "The ability to handle a full life cycle development from analysis, design, deployment and testing",
        "Knowledge or experience with these technologies is an advantage: network and communication protocols, client/server architecture, XML manipulation and parsing, UML, JSON, knowledge of ISO/OSI models, Unix, Maven",
        "Model-driven architecture/ domain-specific languages implementation is an advantage",
        "Willingness and ability to teach and share knowledge",
        "Knowledge of OpenDaylight technology is an advantage",
      ],
      lang: ["English – Upper intrermediate (B2)"],
    },
  },
  {
    title: "SOFTWARE ENGINEER C++",
    location: "Bratislava or Ružomberok office",
    salary: "1200€ - 3000€",
    time: "Full-time / Part-time, Options of home-office",
    exp: "Experience in c++, Unix, Maven",
    jobDesc: [
      "Analysis and architectural design of software products",
      "Analysis and testing of proposals for software products",
      "Cooperation in the development project schedules",
      "Cooperation in the preparation of tenders",
      "Cooperation in projects within the respective project teams",
      "Cooperation with other department staff",
      "Implementation of proposed software products based on the prior analysis and design",
      "Development of technical documentation for software products",
      "Configuration and deployment of software products into operational environments",
      "Testing of software products based on the prior analysis and design",
      "Participation in internal meetings and meetings with clients, reporting",
      "Effective communication and collaboration with other departments and employees of the company, including business partners",
      "Other tasks as instructed by a superior",
    ],
    jobReq: {
      education: [
        "Secondary with school-leaving examination",
        "Follow-up/Higher Professional Education",
        "University education (Bachelor’s degree)",
        "University education (Master’s degree)",
        "Education Specialization in IT",
      ],
      personal: [
        "Advanced knowledge of JAVA (min 3 years)",
        "The ability to handle a full life cycle development from analysis, design, deployment and testing",
        "Knowledge or experience with these technologies is an advantage: network and communication protocols, client/server architecture, XML manipulation and parsing, UML, JSON, knowledge of ISO/OSI models, Unix, Maven",
        "Model-driven architecture/ domain-specific languages implementation is an advantage",
        "Willingness and ability to teach and share knowledge",
        "Knowledge of OpenDaylight technology is an advantage",
      ],
      lang: ["English – Upper intrermediate (B2)"],
    },
  },
  {
    title: "TEST AUTOMATION ENGINEER",
    location: "Bratislava or Ružomberok office",
    salary: "1200€ - 3000€",
    time: "Full-time / Part-time, Options of home-office",
    exp:
      "Jenkins, Maven , GIT, XML, JSON, Postman/Newman, Robot framework, bash, Python , JavaScript",
    jobDesc: [
      "Analysis and architectural design of software products",
      "Analysis and testing of proposals for software products",
      "Cooperation in the development project schedules",
      "Cooperation in the preparation of tenders",
      "Cooperation in projects within the respective project teams",
      "Cooperation with other department staff",
      "Implementation of proposed software products based on the prior analysis and design",
      "Development of technical documentation for software products",
      "Configuration and deployment of software products into operational environments",
      "Testing of software products based on the prior analysis and design",
      "Participation in internal meetings and meetings with clients, reporting",
      "Effective communication and collaboration with other departments and employees of the company, including business partners",
      "Other tasks as instructed by a superior",
    ],
    jobReq: {
      education: [
        "Secondary with school-leaving examination",
        "Follow-up/Higher Professional Education",
        "University education (Bachelor’s degree)",
        "University education (Master’s degree)",
        "Education Specialization in IT",
      ],
      personal: [
        "Advanced knowledge of JAVA (min 3 years)",
        "The ability to handle a full life cycle development from analysis, design, deployment and testing",
        "Knowledge or experience with these technologies is an advantage: network and communication protocols, client/server architecture, XML manipulation and parsing, UML, JSON, knowledge of ISO/OSI models, Unix, Maven",
        "Model-driven architecture/ domain-specific languages implementation is an advantage",
        "Willingness and ability to teach and share knowledge",
        "Knowledge of OpenDaylight technology is an advantage",
      ],
      lang: ["English – Upper intrermediate (B2)"],
    },
  },
  {
    title: "SOFTWARE ENGINEER PYHTON",
    location: "Bratislava or Ružomberok office",
    salary: "1200€ - 3000€",
    time: "Full-time / Part-time, Options of home-office",
    exp: "Experience in Python, Unix, Maven",
    jobDesc: [
      "Analysis and architectural design of software products",
      "Analysis and testing of proposals for software products",
      "Cooperation in the development project schedules",
      "Cooperation in the preparation of tenders",
      "Cooperation in projects within the respective project teams",
      "Cooperation with other department staff",
      "Implementation of proposed software products based on the prior analysis and design",
      "Development of technical documentation for software products",
      "Configuration and deployment of software products into operational environments",
      "Testing of software products based on the prior analysis and design",
      "Participation in internal meetings and meetings with clients, reporting",
      "Effective communication and collaboration with other departments and employees of the company, including business partners",
      "Other tasks as instructed by a superior",
    ],
    jobReq: {
      education: [
        "Secondary with school-leaving examination",
        "Follow-up/Higher Professional Education",
        "University education (Bachelor’s degree)",
        "University education (Master’s degree)",
        "Education Specialization in IT",
      ],
      personal: [
        "Advanced knowledge of JAVA (min 3 years)",
        "The ability to handle a full life cycle development from analysis, design, deployment and testing",
        "Knowledge or experience with these technologies is an advantage: network and communication protocols, client/server architecture, XML manipulation and parsing, UML, JSON, knowledge of ISO/OSI models, Unix, Maven",
        "Model-driven architecture/ domain-specific languages implementation is an advantage",
        "Willingness and ability to teach and share knowledge",
        "Knowledge of OpenDaylight technology is an advantage",
      ],
      lang: ["English – Upper intrermediate (B2)"],
    },
  },
  {
    title: "FRONTEND SOFTWARE ENGINEER",
    location: "Bratislava or Ružomberok office",
    salary: "1200€ - 3000€",
    time: "Full-time / Part-time, Options of home-office",
    exp:
      "Experience as Web/Frontend developer React or Angular, HTML, PHP, CSS, JavaScript",
    jobDesc: [
      "Analysis and architectural design of software products",
      "Analysis and testing of proposals for software products",
      "Cooperation in the development project schedules",
      "Cooperation in the preparation of tenders",
      "Cooperation in projects within the respective project teams",
      "Cooperation with other department staff",
      "Implementation of proposed software products based on the prior analysis and design",
      "Development of technical documentation for software products",
      "Configuration and deployment of software products into operational environments",
      "Testing of software products based on the prior analysis and design",
      "Participation in internal meetings and meetings with clients, reporting",
      "Effective communication and collaboration with other departments and employees of the company, including business partners",
      "Other tasks as instructed by a superior",
    ],
    jobReq: {
      education: [
        "Secondary with school-leaving examination",
        "Follow-up/Higher Professional Education",
        "University education (Bachelor’s degree)",
        "University education (Master’s degree)",
        "Education Specialization in IT",
      ],
      personal: [
        "Advanced knowledge of JAVA (min 3 years)",
        "The ability to handle a full life cycle development from analysis, design, deployment and testing",
        "Knowledge or experience with these technologies is an advantage: network and communication protocols, client/server architecture, XML manipulation and parsing, UML, JSON, knowledge of ISO/OSI models, Unix, Maven",
        "Model-driven architecture/ domain-specific languages implementation is an advantage",
        "Willingness and ability to teach and share knowledge",
        "Knowledge of OpenDaylight technology is an advantage",
      ],
      lang: ["English – Upper intrermediate (B2)"],
    },
  },
];

function Careers() {
  const [showDetails, setShowDetails] = useState({
    show: false,
    which: null,
    title: "",
  });

  const positionTable = (positions) => (
    <Table>
      <Table.Header className="table-header">
        <Table.Row>
          <Table.HeaderCell>
            {" "}
            <Icon name="user" />
            Position
          </Table.HeaderCell>
          <Table.HeaderCell>
            {" "}
            <Icon name="map marker" />
            Location
          </Table.HeaderCell>
          <Table.HeaderCell>
            {" "}
            <Icon name="eur" />
            Salary
          </Table.HeaderCell>
          <Table.HeaderCell>
            {" "}
            <Icon name="time" />
            Contract
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Icon name="code" />
            Experience
          </Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {positions.map((p, i) => {
          return (
            <Table.Row>
              <Table.Cell>
                <h4 style={{ color: "#2185d0" }}>{p.title}</h4>
              </Table.Cell>
              <Table.Cell> {p.location}</Table.Cell>
              <Table.Cell>{p.salary}</Table.Cell>
              <Table.Cell>{p.time}</Table.Cell>
              <Table.Cell>{p.exp}</Table.Cell>
              <Table.Cell>
                <Button
                  circular
                  primary
                  onClick={() =>
                    setShowDetails({ show: true, which: i, title: p.title })
                  }
                >
                  Show
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );

  const careerDetails = (i) => (
    <div className="careers-details">
      <Button circular onClick={() => setShowDetails({ show: false })}>
        Back to list
      </Button>

      <h2>{showDetails.title}</h2>
      <h3>
        <Icon name="info circle" />
        Job Description
      </h3>
      <div className="careers-details-list">
        {positions[i].jobDesc.map((jd) => {
          return <p> > {jd}</p>;
        })}
      </div>
      <h3>
        <Icon name="plus circle" />
        Employee perks and benefits
      </h3>
      <div className="careers-details-list">
        {perks.map((pk) => {
          return <p> > {pk}</p>;
        })}
      </div>
      <h3>
        <Icon name="box" />
        Job Requirements
      </h3>
      <div className="careers-details-list">
        <h4>Education</h4>
        {positions[i].jobReq.education.map((e) => (
          <p> > {e}</p>
        ))}
        <h4>Personal requirements and skills</h4>
        {positions[i].jobReq.personal.map((p) => (
          <p> > {p}</p>
        ))}
        <h4>Language skills</h4>
        {positions[i].jobReq.lang.map((l) => (
          <p> > {l}</p>
        ))}
      </div>
      {/* <Divider />
      <div style={{ width: "500px" }}>
        <h3>Interested?</h3>
        <p>Send us your email address and we will reach out to you.</p>
        <Input
          action={{
            color: "teal",
            labelPosition: "right",
            icon: "send",
            content: "Apply",
          }}
          fluid
          placeholder="Your email address"
          style={{ marginTop: "30px" }}
        />
      </div> */}
    </div>
  );

  return (
    <div className="careers-wrapper">
      <div className="careers-content-wrapper">
        <div className="careers-title">
          <h2>Careers at FRINX</h2>
          <h1>Open positions</h1>
        </div>
        <div className="careers-content">
          {showDetails.show
            ? careerDetails(showDetails.which)
            : positionTable(positions)}
        </div>
      </div>
      <div className="careers-bg" />
    </div>
  );
}

export default Careers;
