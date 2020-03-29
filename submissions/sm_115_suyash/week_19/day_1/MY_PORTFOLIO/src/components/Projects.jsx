import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="text-center container">
      <h2 className="text-muted mt-5 pt-3 nothingCall">Projects</h2>
      <div className="row mt-5 ml-2 justify-content-center">
        <Card
          img="template.jpeg"
          title="Template"
          para="This temlated copy from TEMPLATE.COM"
          link="Click Me"
          linkSrc="https://ninja-templeted.netlify.com"
          gitSrc="https://github.com/SuyashMishra-dev/Template"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg"
          ]}
        />
        <Card
          img="masai_school.jpeg"
          title="Masai Clone"
          para="Copy of some pages of masai school"
          link="Click Me"
          linkSrc="https://masai-school.netlify.com/"
          gitSrc="https://github.com/SuyashMishra-dev/clone_masai_school"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg"
          ]}
        />
        <Card
          img="github.jpeg"
          title="Github Finder"
          para="Search user by username or by repositry name."
          link="Find User"
          linkSrc="https://github-finder-js.netlify.com/"
          gitSrc="https://github.com/SuyashMishra-dev/Git-hub-finder"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg"
          ]}
        />
        <Card
          img="edge.jpeg"
          title="Edge ledger"
          para="Little bit use of JS."
          link="Edge ledger"
          linkSrc="https://ninjaedgeledger.netlify.com"
          gitSrc="https://github.com/SuyashMishra-dev/clone_masai_school"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg"
          ]}
        />
        <Card
          img="stopwatch.jpeg"
          title="Stopwatch"
          para="Use of class component for making it."
          link="Start"
          linkSrc="https://stopwatch-timer.netlify.com/"
          gitSrc="https://github.com/masai-school/cohort_3/tree/master/submissions/sm_115_suyash/week_8/day_3/StopWatch%20and%20Timer"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg"
          ]}
        />
        <Card
          img="restorent.jpeg"
          title="Restaurant"
          para="Welcome to my restaurant."
          link="Click Here"
          linkSrc="https://ninjacoderatmasai.netlify.com"
          gitSrc="https://github.com/SuyashMishra-dev/masai-week-2-project"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg"
          ]}
        />
        <Card
          img="expanse_manager.jpeg"
          title="Expense Manager"
          para="Calculate your expense"
          link="Click Here"
          linkSrc="https://ninja-coder-expanse-manager.netlify.com"
          gitSrc="https://github.com/masai-school/cohort_3/tree/master/submissions/sm_115_suyash/week_14/day_6/Expense%20Manager"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg"
          ]}
        />
        <Card
          img="computer_solution.jpeg"
          title="Computer Solution"
          para="Here you can buy new Laptop."
          link="Click Here"
          linkSrc="https://computer-solution.netlify.com/"
          gitSrc="https://github.com/masai-school/cohort_3/tree/master/submissions/sm_115_suyash/week_9/day_3/coding_1"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg"
          ]}
        />
        <Card
          img="masai_frontend.jpeg"
          title="Meeting Room"
          para="Here you book meeting room "
          link="Book Room"
          linkSrc="https://masai-frontend-10-02-2020.netlify.com"
          gitSrc="https://github.com/masai-school/cohort_3/tree/master/submissions/sm_115_suyash/week_17/day_1/Sprint%20Evaluation%2010th-feb"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg"
          ]}
        />
        {/* <Card
          img="restorent.jpeg"
          title="Blog App"
          para="Come and start writing."
          link="Click Here"
          linkSrc="#"
          gitSrc="#"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
            "https://cdn.svgporn.com/logos/python.svg",
            "https://cdn.svgporn.com/logos/flask.svg",
            "https://cdn.svgporn.com/logos/mysql.svg"
          ]}
        />
        <Card
          img="hackathon.jpeg"
          title="Hackathon"
          para="Full flash application."
          link="Click Here"
          linkSrc="#"
          gitSrc="#"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
            "https://cdn.svgporn.com/logos/firebase.svg"
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Projects;
