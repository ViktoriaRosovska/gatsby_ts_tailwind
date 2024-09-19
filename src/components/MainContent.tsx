import { Link } from "gatsby";
import * as React from "react";
const MainContent = () => {
  return (
    <section className="px-[25px] py-[30px]">
      <h1 className="text-center text-4xl font-sans">Viktoria Rosovska</h1>
      <p className="text-center mb-[20px]">Junior Frontend Developer</p>
      <p className="mb-[20px] ">
        I am currently studying web development and I want to apply my knowledge to real projects. I am ready to learn
        new things and gain new experience. I am reliable, responsible, and persistent in my working tasks.
      </p>
      <ul>
        <li className="mb-[20px]">
          <div>
            <h2 className="text-[length:--h2-text-size] mb-[--h2-mb] border-solid-2 border-b border-[#000] pb-[10px] ">
              Project experience
            </h2>
            <p>
              I have basic knowledges in HTML, CSS, JavaScript, React.js, Redux, REST API, CSS Styled component, JSON,
              Material UI, Bootstrap, Node.js, MongoDB.
            </p>
            <p>
              I try to improve my soft and hard skills and take part in different challenges. I participated in Dev
              challenge in AI-tech stack as a frontend developer. Also I finished my team pet project in TeamChallenge
              platform for junior developers. This is a sport wear shop - website written in React, Redux, React Router,
              Styled Component. Link on my project&nbsp;
              <Link
                to="https://viktoriarosovska.github.io/online-store-front-pulse/"
                target="_blanc"
                className="underline hover:text-[#3c8c26]"
              >
                PulseRun
              </Link>
             &nbsp;and it repository on&nbsp;
              <Link
                to="https://github.com/ViktoriaRosovska/online-store-front-pulse"
                target="_blanc"
                className="underline hover:text-[#3c8c26]"
              >
                GitHub.
              </Link>
            </p>
          </div>
        </li>
        <li className="mb-[20px]">
          <div>
            <h2 className="text-[length:--h2-text-size] mb-[--h2-mb] border-solid-2 border-b border-[#000] pb-[10px]">
              Work experience
            </h2>
            <p>
              I have worked as a babysitter. My work required non-conflict, calmness, patience, friendliness, mentoring
              and making quick decisions. Honesty and responsibility were the main qualities that employers demanded.
            </p>
          </div>
        </li>
        <li className="mb-[20px]">
          <div>
            <h2 className="text-[length:--h2-text-size] mb-[--h2-mb] border-solid-2 border-b border-[#000] pb-[10px]">
              Education
            </h2>
            <table className="table-auto w-full border-spacing-y-3">
              <tr className="h-fit">
                <td className="w-[250px]  align-[top] pb-[20px] pr-[20px]">PROMETHEUS</td>
                <td className="w-[200px]  align-[top] pb-[20px] pr-[20px]">Frontend. Базовий курс від Ciklum</td>
                <td className=" align-[top] pb-[20px]">03/2024 - 07/2024</td>
              </tr>
              <tr className="h-fit">
                <td className="w-[250px] align-[top] pb-[20px] pr-[20px]">IT-school GoIT</td>
                <td className="w-[200px]  align-[top] pb-[20px] pr-[20px]">Full-stack Developer</td>
                <td className="align-[top] pb-[20px] ">12/2022 - 11/2023</td>
              </tr>
              <tr className="h-fit">
                <td className="w-[250px] align-[top] pb-[20px] pr-[20px]">
                  National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”
                </td>
                <td className="w-[200px] align-[top] pb-[20px] pr-[20px]">Master’s degree in “Computer science”</td>
                <td className="align-[top] pb-[20px]">09/2003 - 02/2009</td>
              </tr>
            </table>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MainContent;
