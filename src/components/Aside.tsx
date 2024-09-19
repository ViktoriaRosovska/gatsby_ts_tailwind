import * as React from "react";
import Photo from "../images/photo.jpg";

const Aside = () => {
  return (
    <div className="bg-[#1b2341] text-[#fff] px-7 py-6 text-[14px]">
      <div className="size-40 rounded-full overflow-hidden m-auto mb-[--h2-mb]">
        <img className="size-40" src={Photo} alt="my photo" />
      </div>
      <ul>
        <li>
          <div>
            <h2 className="text-[length:--h2-text-size] mb-[--h2-mb] border-solid border-b borders-[#fff] pb-[--h2-pb]">
              Contacts
            </h2>
            <ul className="mb-[--ul-mb]">
              <li className="mb-[--list-mb]">+38 (067) 362-69-38</li>
              <li className="mb-[--list-mb]">torimeister@gmail.com</li>
              <li className="mb-[--list-mb]">Telegram</li>
              <li className="mb-[--list-mb]">LinkedIn</li>
              <li className="mb-[--list-mb]">Github</li>
              <li className="mb-[--list-mb]">Irpin, Ukraine</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2 className="text-[length:--h2-text-size] mb-[--h2-mb] border-solid border-b borders-[#fff] pb-[--h2-pb]">
              Hard Skills
            </h2>
            <ul className="list-disc list-inside mb-[--ul-mb]">
              <li className="mb-[--list-mb]">HTML</li>
              <li className="mb-[--list-mb]">Javascript</li>
              <li className="mb-[--list-mb]">CSS, Styled Component, MUI, tailwind</li>
              <li className="mb-[--list-mb]">React.js, Redux</li>
              <li className="mb-[--list-mb]">Node.js, Express</li>
              <li className="mb-[--list-mb]">MongoDB, mongoose</li>
              <li className="mb-[--list-mb]">Trello, Git, Figma</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2 className="text-[length:--h2-text-size] mb-[--h2-mb] border-solid border-b borders-[#fff] pb-[--h2-pb]">
              Soft Skills
            </h2>
            <ul className="list-disc list-inside mb-[--ul-mb]">
              <li className="mb-[--list-mb]">Responsibility</li>
              <li className="mb-[--list-mb]">Attention to details</li>
              <li className="mb-[--list-mb]">Persistent</li>
              <li className="mb-[--list-mb]">Leadership</li>
              <li className="mb-[--list-mb]">Reliable</li>
              <li className="mb-[--list-mb]">Conflict-free</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2 className="text-[length:--h2-text-size] mb-[--h2-mb] border-solid border-b borders-[#fff] pb-[--h2-pb]">
              Languages
            </h2>
            <ul className="">
              <li className="mb-[--list-mb]">English - Intermediate</li>
              <li className="mb-[--list-mb]">Ukrainian - Native</li>
              <li className="">Russian - Native</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
