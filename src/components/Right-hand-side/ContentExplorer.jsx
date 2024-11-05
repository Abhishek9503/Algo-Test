import React, { useState } from "react";
import { BellIcon, CalendarIcon, ChartBarIcon, ClockIcon, CopyIcon, InfoIcon } from "../../assets/icons";
import Button from "../Button";

const ContentExplorer = () => {
  const chapters = [
    {
      name: "Chapter 1",
      time: "05:00:00",
      parts: [
        {
          title: "Part 1: ",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            { type: "Video", name: "Video 1", time: "10:00" },
            { type: "Article", name: "Article 1", time: "10:00" },
            { type: "Quiz", name: "Quiz 1", time: "10:00" },
            { type: "Exercise", name: "Coding Exercise 1", time: "10:00" },
            { type: "Resource", name: "Combined Resource 1", time: "10:00" },
          ],
        },
        {
          title: "Part 2: Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            { type: "Video", name: "Video 2", time: "10:00" },
            { type: "Article", name: "Article 2", time: "10:00" },
          ],
        },
      ],
    },

    {
      name: "Chapter 2",
      time: "05:00:00",
      parts: [
        {
          title: "Part 1",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            { type: "Video", name: "Video 1", time: "10:00" },
            { type: "Article", name: "Article 1", time: "10:00" },
            { type: "Quiz", name: "Quiz 1", time: "10:00" },
            { type: "Exercise", name: "Coding Exercise 1", time: "10:00" },
            { type: "Resource", name: "Combined Resource 1", time: "10:00" },
          ],
        },
        {
          title: "Part 2: Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            { type: "Video", name: "Video 2", time: "10:00" },
            { type: "Article", name: "Article 2", time: "10:00" },
          ],
        },
      ],
    },

    {
      name: "Chapter 3",
      time: "02:30:46",
      parts: [
        {
          title: "Part 1",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            { type: "Video", name: "Video 1", time: "10:00" },
            { type: "Article", name: "Article 1", time: "10:00" },
            { type: "Quiz", name: "Quiz 1", time: "10:00" },
            { type: "Exercise", name: "Coding Exercise 1", time: "10:00" },
            { type: "Resource", name: "Combined Resource 1", time: "10:00" },
          ],
        },
        {
          title: "Part 4",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            { type: "Video", name: "Video 2", time: "10:00" },
            { type: "Article", name: "Article 2", time: "10:00" },
          ],
        },
      ],
    },

    {
      name: "Chapter 4",
      time: "06:00:00",
      parts: [
        {
          title: "Part 1: Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            { type: "Video", name: "Video 1", time: "10:00" },
            { type: "Article", name: "Article 1", time: "10:00" },
            { type: "Quiz", name: "Quiz 1", time: "10:00" },
            { type: "Exercise", name: "Coding Exercise 1", time: "10:00" },
            { type: "Resource", name: "Combined Resource 1", time: "10:00" },
          ],
        },
        {
          title: "Part 2: Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            { type: "Video", name: "Video 2", time: "10:00" },
            { type: "Article", name: "Article 2", time: "10:00" },
          ],
        },
      ],
    },

    {
      name: "Chapter 5",
      time: "03:00:00",
      parts: [
        {
          title: "Part 1: Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            { type: "Video", name: "Video 1", time: "10:00" },
            { type: "Article", name: "Article 1", time: "10:00" },
            { type: "Quiz", name: "Quiz 1", time: "10:00" },
            { type: "Exercise", name: "Coding Exercise 1", time: "10:00" },
            { type: "Resource", name: "Combined Resource 1", time: "10:00" },
          ],
        },
        {
          title: "Part 2: Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            { type: "Video", name: "Video 2", time: "10:00" },
            { type: "Article", name: "Article 2", time: "10:00" },
          ],
        },
      ],
    },
    // Add more chapters as needed
  ];

  const [selected, setSelected] = useState("learning");

  return (
    <div className="w-[80%] overflow p-4 ">
      <div className="w-100 flex justify-end ">
        <div className="flex  gap-2">
          <div className=" flex items-center justify-center  ">
            <div className="flex items-center justify-center h-[50px] w-[50px] bg-[#E7F8FF] ">
              <BellIcon width={25.6} height={22.4} fill="#000" />
            </div>
          </div>
          <div class="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
        </div>
      </div>

      <div className="border rounded-lg p-3 mt-5">
        <div className="flex justify-between p-2 items-center">
          <div className="h-[82px] w-[563px] flex items-center justify-center rounded-lg bg-gradient-to-b from-[#EFF5FF] to-[rgba(239,245,255,0)]">
            <div className="flex space-x-5">
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors duration-300 ${
                  selected === "mentor" ? "bg-blue-50 shadow-md" : ""
                }`}
                onClick={() => setSelected("mentor")}
              >
                <span className="material-icons-outlined">
                  <CalendarIcon width={32} height={32} fill="#000" />
                </span>
                <span className="ml-2 text-[22px]">Mentor Sessions</span>
              </button>
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors duration-300 ${
                  selected === "learning" ? "bg-blue-50 shadow-md" : ""
                }`}
                onClick={() => setSelected("learning")}
              >
                <span className="material-icons-outlined">
                  <CalendarIcon width={32} height={32} fill="#000" />
                </span>
                <span className="ml-2 text-[22px]">Learning Material</span>
              </button>
            </div>
          </div>

          <div className="flex gap-2 items-center border rounded-md pt-3 pb-3 pl-4 pr-4  border-[#99E4FF]">
            <InfoIcon width={32} height={32} fill="#000" />
            <p className="text-[22px]">How it works</p>
          </div>
        </div>

        <div className="w-100 h-[0.3px] bg-[#A4E6FF] ms-10 me-3 mb-[40px]">

        </div>

        <div className="flex">
          {/* Left Side: Chapter Navigation */}
          <div className="w-1/4 p-2">
            <ul>
              {chapters.map((chapter, index) => (
                <li key={index} className="mb-2">
                  <button className="flex justify-between items-center px-4 py-3 bg-blue-50 rounded-md w-[342px] h-[82px]">
                    <span className="text-[24px]">{chapter.name}</span>
                  <div className="text-blue-500  flex gap-2">
                     <ClockIcon  width={32} height={32} fill="#000"  />
                     <p className="text-[22px]"> {chapter.time}</p>
                
                  </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Chapter Content */}
          <div className="w-[1002px] p-2 space-y-4 max-h-[650px] overflow-y-scroll scrollbar-hide">
            {chapters.map((chapter, chapterIndex) => (
              <div key={`chapter-${chapterIndex}`}>
                {chapter.parts.map((part, partIndex) => (
                  <div
                    key={`part-${partIndex}`}
                    className="border  rounded-lg shadow-xl mb-4"
                  >
                    <div className="border-b-8 border-blue-400 rounded-lg p-3">
                      <div className=" flex justify-between items-center mb-2">
                        <div className="">
                          <h3 className="text-lg font-semibold">
                            {part.title}
                          </h3>
                          <h3 className="text-lg font-semibold">
                            {part?.heading}
                          </h3>
                        </div>

                        <div className=" flex items-center gap-2 justify-between ">
                          <span className="text-gray-500 flex items-center">
                            <ClockIcon   width={27} height={27} fill="#000" />
                            <p className="text-[24px] text-grey-400 "> {part.duration}</p>
                          </span>
                           <div className="flex items-center  gap-2">
                           <ChartBarIcon  width={32} height={32} fill="#000" />
                          <p className="text-sm text-gray-500">
                            {part.difficulty} 
                          </p>
                           </div>
                           <div className="flex items-center">
                            <CopyIcon  width={32} height={32} fill="#000" />
                           {part.items.length} items
                           </div>
                        </div>
                      </div>

                      {/* <div className="flex justify-end">
                        <button className="border px-2 py-1 rounded-lg">
                          {part.completedPercentage}% Completed
                        </button>
                      </div> */}
                    </div>
                    
                    {/* Part Items */}
                    <ul className="space-y-2 p-3">
                      {part.items.map((item, itemIndex) => (
                        <li
                          key={`item-${itemIndex}`}
                          className="flex justify-between items-center"
                        >
                          <span>
                            {item.type} {itemIndex + 1}
                          </span>
                          <span>{item.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentExplorer;
