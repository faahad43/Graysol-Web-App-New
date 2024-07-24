import React from "react";
import styles from "../styles";
import arrow from "../assets/icons/arrow.svg";
import smile from "../assets/icons/smile.svg";
import project from "../assets/icons/project.svg";
import clock from "../assets/icons/clock.svg";
import client from "../assets/icons/clients.svg";
import startup from "../assets/img/startup.png";
import useWindowSize from "../hooks/windowSize";

const ChooseUs = () => {
  const windowSize = useWindowSize()
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
      className={`w-screen bg-dark-900  py-20 flex flex-col gap-16 lg:gap-20 items-center ${styles.paddingX}`}
    >
      <div className="w-[90%] lg:w-[85%]  max-w-[1124px] flex md:flex-row-reverse items-center justify-center md:justify-between">
        <div className="flex flex-col gap-6 xl:gap-16 md:w-[50%] lg:w-[50%] xl:w-[45%]">
          <h2 className={`text-[40px] md:text-[45px] lg:text-[60px] xl:text-[70px] font-medium text-light-900  xl:font-medium text-center md:text-start`}>Why Graysol.</h2>
          <ul
            className={`text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-light text-light-900  lg:font-normal md:leading-sung xl:leading-[32.5px] text-[20px] flex flex-col gap-3`}
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
        <img className={`${windowSize <768 ? "hidden" : "visible"} w-[48%] lg:w-[45%] `} src={startup} alt="" />
      </div>
      {/* Graysol Statistics */}
      <div
        className={` ${styles.descriptionText} relative w-64 md:w-[95%] lg:w-[85%] max-w-[1124px] h-fit md:h-56 py-8 md:py-0 md:py-32 lg:py-40 xl:py-48  border border-primary-default bg-primary-900 rounded flex flex-col md:flex-row gap-8 justify-center md:justify-around md:items-center md:px-10`}
      >
        <div className="absolute left-[calc(15%+1.5rem)] md:left-0 md:top-[calc(50%-2.5rem)] xl:top-[calc(50%-4rem)] transform -translate-x-1/2 md:-translate-x-0 h-full md:h-[1px] w-[1px] md:w-full border-dashed border-l-2 md:border-l-0 md:border-b-2 border-primary-default"></div>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex md:flex-col text-center md:gap-4 xl:gap-8 items-center pl-[15%] md:pl-0 z-10"
          >
            <img className="w-12 sm:w-14  md:w-16 lg:w-20 xl:w-24" src={stat.img} alt="" />
            <p className="leading-snug mx-auto md:text-[18px] lg:text-[20px] xl:text-[30px] font-normal">
              {stat.title}
              <br />
              <span className="font-medium md:text-[25px] lg:text-[30px] xl:text-[40px]">{stat.number}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
