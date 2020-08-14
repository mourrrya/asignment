import React, { Fragment } from "react";
import GoBack from "../components/goBack/goBack";

const apiData = [
  {
    name: "rajiv",
    rollNumber: "KV2017-5A2",
    marks: {
      Maths: 18,
      English: 21,
      Science: 45,
    },
  },
  {
    name: "abhishek",
    rollNumber: "KV2017-5A1",
    marks: {
      Maths: 43,
      English: 30,
      Science: 37,
    },
  },
  {
    name: "zoya",
    rollNumber: "KV2017-5A3",
    marks: {
      Maths: 42,
      English: 31,
      Science: 50,
    },
  },
];

let studentsTotalMarks = [];
let status;

const filteredData = apiData.map((studentData, index) => {
  const marks = Object.values(studentData.marks);
  studentsTotalMarks[index] = marks.reduce((a, b) => {
    return a + b;
  });

  const minimumMark = Math.min(...marks);

  status = minimumMark < 20 ? "fail" : "pass";

  return {
    ...studentData,
    totalMarks: studentsTotalMarks[index],
    status,
  };
});

const maxScore = Math.max(...studentsTotalMarks);

const sortedApiData = filteredData.sort(function (a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

export default function Result() {
  return (
    <div className="">
      <GoBack name="Go Back" />
      <div className="result-board">
        <p className="result-board__head">Students Result Board</p>
        <div className="board-main">
          {sortedApiData.map((studentData, index) => {
            if (maxScore <= studentData.totalMarks) {
              studentData.status = "topper";
            }

            return (
              <Fragment key={index}>
                {index === 0 && (
                  <>
                    <p className="board-main__content subHead">Student Name </p>
                    <p className="board-main__content subHead">Roll Number </p>
                    <p className="board-main__content subHead">Total Marks</p>
                    <p className="board-main__content subHead">Status</p>
                  </>
                )}
                <p className={`board-main__content name ${studentData.status}`}>
                  {studentData.name}
                </p>
                <p
                  className={`board-main__content rollNo ${studentData.status}`}
                >
                  {studentData.rollNumber}
                </p>
                <p
                  className={`board-main__content marks ${studentData.status}`}
                >
                  {studentData.totalMarks}
                </p>
                <p
                  className={`board-main__content status ${studentData.status}`}
                >
                  {studentData.status}
                </p>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
