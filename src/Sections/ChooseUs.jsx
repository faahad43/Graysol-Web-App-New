import React from "react";
import styles from "../styles";
import arrow from "../assets/icons/arrow.svg";
import smile from "../assets/icons/smile.svg";
import project from "../assets/icons/project.svg";
import clock from "../assets/icons/clock.svg";
import client from "../assets/icons/clients.svg";

const ChooseUs = () => {
  const stats = [
    {
      title: "Team",
      number: 35,
      img: smile,
    },
    {
      title: "Projects",
      number: 80,
      img: project,
    },
    {
      title: "Running Project",
      number: 23,
      img: clock,
    },
    {
      title: "Clients",
      number: 41,
      img: client,
    },
  ];

  return (
    <div
      className={`bg-dark-900 py-20 flex flex-col gap-16 items-center ${styles.paddingX}`}
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-6 ">
          <h2 className={`${styles.headingText} text-center`}>Why Graysol.</h2>
          <ul
            className={`${styles.descriptionText} text-[20px] flex flex-col gap-3`}
          >
            <li className="">
              <img
                className="w-[20px] h-[17px] inline mr-6"
                src={arrow}
                alt=""
              />
              Communication
            </li>
            <li className="">
              <img
                className="w-[20px] h-[17px] inline mr-6"
                src={arrow}
                alt=""
              />
              Code quality
            </li>
            <li className="">
              <img
                className="w-[20px] h-[17px] inline mr-6"
                src={arrow}
                alt=""
              />
              Milestone payments
            </li>
            <li className="">
              <img
                className="w-[20px] h-[17px] inline mr-6"
                src={arrow}
                alt=""
              />
              Maintenance and support
            </li>
            <li className="">
              <img
                className="w-[20px] h-[17px] inline mr-6"
                src={arrow}
                alt=""
              />
              Intellectual property rights
            </li>
            <li className="">
              <img
                className="w-[20px] h-[17px] inline mr-6"
                src={arrow}
                alt=""
              />
              Confidentiality and NDA
            </li>
            <li className="">
              <img
                className="w-[20px] h-[17px] inline mr-6"
                src={arrow}
                alt=""
              />
              First time right process
            </li>
          </ul>
        </div>
        {/* image will come here */}
      </div>
      {/* Graysol Statistics */}
      <div
        className={` ${styles.descriptionText} relative w-64 h-fit py-8 border border-primary-default bg-primary-900 rounded flex flex-col gap-8 justify-center`}
      >
        <div className="absolute left-[calc(15%+1.5rem)] transform -translate-x-1/2 h-full w-[1px] border-dashed border-l-2 border-primary-default"></div>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex  text-center items-center pl-[15%] z-10"
          >
            <img className="w-12" src={stat.img} alt="" />
            <p className="leading-6 mx-auto">
              {stat.title}
              <br />
              {stat.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
