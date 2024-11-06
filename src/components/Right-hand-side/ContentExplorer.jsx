import React, { useState } from "react";
import {
  BellIcon,
  CalendarIcon,
  CharBarIconGradietn,
  ChartBarIcon,
  ClockIcon,
  ClockIconGradient,
  CopyIcon,
  InfoIcon,
  QuestionIcon,
  TopArrowIcon,
  CodeIcon,
  PlayIcon,
} from "../../assets/icons";

const iconMapping = {
  playIcon: PlayIcon,
  questionIcon: QuestionIcon,
  question: QuestionIcon,
  codeIcon: CodeIcon,
  copyIcon: CopyIcon,
};

const ContentExplorer = () => {
  const chapters = [
    {
      name: "Chapter 1",
      time: "05:00:00",
      parts: [
        {
          title: "PART 1: ",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
        {
          title: "PART 2",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
      ],
    },
    {
      name: "Chapter 2",
      time: "05:00:00",
      parts: [
        {
          title: "PART 1: ",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
        {
          title: "PART 2",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
        {
          title: "PART 3",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
      ],
    },
    {
      name: "Chapter 3",
      time: "05:00:00",
      parts: [
        {
          title: "PART 1: ",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
        {
          title: "PART 2",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
        {
          title: "PART 3",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
        {
          title: "PART 4",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
      ],
    },

    {
      name: "Chapter 4",
      time: "05:00:00",
      parts: [
        {
          title: "PART 1: ",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
      ],
    },

    {
      name: "Chapter 5",
      time: "05:00:00",
      parts: [
        {
          title: "PART 1: ",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 45,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
        {
          title: "PART 2",
          heading: "Lorem Ipsum Dolor Sit Amet",
          duration: "02:00:00",
          difficulty: "Medium",
          completedPercentage: 20,
          items: [
            {
              type: "Video",
              name: "Video 1",
              time: "10:00",
              iconType: "playIcon",
            },
            {
              type: "Article",
              name: "Article 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Quiz",
              name: "Quiz 1",
              time: "10:00",
              iconType: "question",
            },
            {
              type: "Exercise",
              name: "Coding Exercise 1",
              time: "10:00",
              iconType: "codeIcon",
            },
            {
              type: "Resource",
              name: "Combined Resource 1",
              time: "10:00",
              iconType: "copyIcon",
            },
          ],
        },
      ],
    },
  ];

  // State to track the selected chapter index
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [expandedParts, setExpandedParts] = useState({});
  const [selected, setSelected] = useState("learning");

  const togglePart = (partIndex) => {
    setExpandedParts((prev) => ({
      ...prev,
      [partIndex]: !prev[partIndex], // Toggle the part's expanded state
    }));
  };

  return (
    <div className="w-[80%] overflow p-4 ">
      <div className="w-100 flex justify-end ">
        <div className="flex gap-2">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-[50px] w-[50px] bg-[#E7F8FF] ">
              <BellIcon width={25.6} height={22.4} fill="#000" />
            </div>
          </div>
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
        </div>
      </div>

      <div className="border rounded-lg p-3 mt-5">
        <div className="flex justify-between p-2 items-center">
          <div className="h-[82px] w-[563px] flex items-center justify-center rounded-lg bg-gradient-to-b from-[#EFF5FF] to-[rgba(239,245,255,0)]">
          <div className="flex space-x-5">
  <button
    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
      selected === "mentor" ? "bg-blue-50 shadow-md border-gradient" : "border"
    }`}
    onClick={() => setSelected("mentor")}
  >
    <span className="material-icons-outlined">
      <CalendarIcon width={32} height={32} fill="#000" />
    </span>
    <span className="ml-2 text-[22px]">Mentor Sessions</span>
  </button>

  <button
    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
      selected === "learning" ? "bg-blue-50 shadow-md border-gradient" : "border"
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

          <div className="flex gap-2 items-center border rounded-md pt-3 pb-3 pl-4 pr-4 border-[#99E4FF]">
            <InfoIcon width={32} height={32} fill="#000" />
            <p className="text-[22px]">How it works</p>
          </div>
        </div>

        <div className="w-100 h-[0.3px] bg-[#A4E6FF] ms-10 me-3 mb-[40px]"></div>

        <div className="flex">
          {/* Left Side: Chapter Navigation */}
          <div className="w-1/4 p-2">
            <ul>
              {chapters.map((chapter, index) => (
                <li key={index} className="mb-2">
                  <button
                    className={`flex justify-between items-center px-4 py-3 rounded-md w-[342px] h-[82px] ${
                      selectedChapterIndex === index ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedChapterIndex(index)} // Update selected chapter
                  >
                    <span
                      className={`text-[24px] ${
                        selectedChapterIndex === index ? "font-semibold" : ""
                      }`}
                    >
                      {chapter.name}
                    </span>
                    <div
                      className={`text-blue-500 flex gap-2  ${
                        selectedChapterIndex === index ? "" : "invisible"
                      }`}
                    >
                      <ClockIcon width={32} height={32} />
                      <p className="text-[22px] text-blue-400">
                        {" "}
                        {chapter.time}
                      </p>
                    </div>
                  </button>
                  <div
                    className={`gradient-border opacity-20  w-full h-[0.5px] ${
                      selectedChapterIndex !== index ? "" : "invisible"
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Chapter Content */}
          <div className="w-[1002px] p-2 space-y-4 max-h-[750px] overflow-y-scroll scrollbar-hide">
            {/* Render content based on the selected chapter */}
            {chapters[selectedChapterIndex].parts.map((part, partIndex) => (
              <div
                key={`part-${partIndex}`}
                className="border rounded-lg shadow-md mb-4 cursor-pointer "
                onClick={() => togglePart(partIndex)}
              >
                <div className="border-b-8 border-[#EFF5FF]  relative  rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="">
                      <h3 className="text-lg ">{part.title}</h3>
                      <h3 className="text-lg font-semibold">{part?.heading}</h3>
                    </div>

                    <div className=" w-[421px] h-[36px] flex items-center gap-2 justify-between">
                      <span className="text-gray-500 flex gap-2 items-center">
                        <ClockIconGradient />
                        <p className="text-[24px] text-gray-700">
                          {part.duration}
                        </p>
                      </span>
                      <div className="flex items-center gap-2">
                        <CharBarIconGradietn />
                        <p className="text-gray-700 text-[24px]">
                          {part.difficulty}
                        </p>
                      </div>

                      <div className="flex  items-center gap-2">
                        <CopyIcon width={32} height={32} fill="#000" />
                        <p className="text-[24px] text-gray-700">
                          {part.items.length}
                        </p>
                        <div
                          className={`transition-transform ml-2 duration-300 ${
                            expandedParts[partIndex] ? "rotate-180" : ""
                          }`}
                        >
                          <TopArrowIcon width={29} height={16} fill="#000" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex  justify-end">
                    <button className="border  px-2 py-1 rounded-lg bg-[#EFF5FF]">
                      {part.completedPercentage}% Completed
                    </button>
                  </div>

                  <div
                    className={`absolute rounded-bl-lg  left-[-1px] bottom-[-8px] h-2 bg-[#172B4DD9]`}
                    style={{ width: `${part.completedPercentage}%` }}
                  ></div>
                </div>
                {expandedParts[partIndex] && ( // Conditionally render items
                  <div className="p-3">
                    <ul className="space-y-2 ">
                      {part.items.map((item, itemIndex) => {
                        // Get the relevant icon from the mapping, with a fallback if necessary
                        const IconComponent = iconMapping[item.iconType];

                        return (
                          <div className="ps-2 pe-3" key={`item-${itemIndex}`}>
                            <li className="flex justify-between items-center h-20">
                              <span className="flex items-center gap-2">
                                <IconComponent
                                  width={32}
                                  height={32}
                                  fill="#000"
                                />
                                <p className="text-textDark font-bold">
                                  {item.type}: {item.name}
                                </p>
                              </span>
                              <span className="text-textlight flex  items-center gap-2">
                                <ClockIcon width={32} height={32} fill="black" />
                                <p className="text-[24px]">{item.time}</p>
                              </span>
                            </li>
                            {itemIndex < part.items.length - 1 && (
                              <div className="gradient-border w-full h-2"></div>
                            )}
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentExplorer;
