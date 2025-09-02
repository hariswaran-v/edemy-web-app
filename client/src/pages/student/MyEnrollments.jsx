import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/student/Footer";

const MyEnrollments = () => {
  const {
    enrollCourses: enrolledCourses,
    calculateCourseDuration,
    navigate,
  } = useContext(AppContext);

  const [progressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 3 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 0, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 7 },
    { lectureCompleted: 5, totalLectures: 9 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 6, totalLectures: 10 },
    { lectureCompleted: 7, totalLectures: 12 },
    { lectureCompleted: 2, totalLectures: 5 },
    { lectureCompleted: 4, totalLectures: 6 },
    { lectureCompleted: 8, totalLectures: 14 },
    { lectureCompleted: 9, totalLectures: 15 },
  ]);

  return (
    <>
      <div className="md:px-36 px-6 pt-10">
        <h1 className="text-2xl font-semibold text-gray-800">My Enrollments</h1>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-900 text-sm uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4 font-semibold">Course</th>
                <th className="px-6 py-4 font-semibold max-sm:hidden">
                  Duration
                </th>
                <th className="px-6 py-4 font-semibold max-sm:hidden">
                  Completed
                </th>
                <th className="px-6 py-4 font-semibold text-right pr-16">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {enrolledCourses.map((course, i) => {
                const percent =
                  progressArray[i] &&
                  (progressArray[i].lectureCompleted /
                    progressArray[i].totalLectures) *
                    100;

                return (
                  <tr
                    key={i}
                    className="hover:bg-gray-50 transition duration-300"
                  >
                    {/* Course */}
                    <td className="px-6 py-4 flex items-center space-x-4">
                      <img
                        src={course.courseThumbnail}
                        alt=""
                        className="w-16 sm:w-24 md:w-28 rounded-lg shadow-sm border border-gray-200"
                      />
                      <div className="flex flex-col flex-1">
                        <p className="font-medium text-gray-800 max-sm:text-sm">
                          {course.courseTitle}
                        </p>
                        <Line
                          percent={
                            progressArray[i]
                              ? (progressArray[i].lectureCompleted * 100) /
                                progressArray[i].totalLectures
                              : 0
                          }
                          strokeWidth={2}
                          strokeColor="#2563eb"
                          trailColor="#e5e7eb"
                          className="mt-2 bg-gray-300 rounded-full"
                        />
                      </div>
                    </td>

                    {/* Duration */}
                    <td className="px-6 py-4 max-sm:hidden">
                      {calculateCourseDuration(course)}
                    </td>

                    {/* Completed */}
                    <td className="px-6 py-4 max-sm:hidden">
                      {progressArray[i] &&
                        `${progressArray[i].lectureCompleted} / ${progressArray[i].totalLectures}`}{" "}
                      <span className="text-sm text-gray-500">Lectures</span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => navigate("/player/" + course._id)}
                        className="px-4 sm:px-6 py-2 rounded-lg font-medium text-sm text-white shadow-md bg-blue-600 hover:bg-blue-700 active:scale-95 transform transition-all duration-200 cursor-pointer"
                      >
                        {progressArray[i] &&
                        progressArray[i].lectureCompleted /
                          progressArray[i].totalLectures ===
                          1
                          ? "Completed"
                          : "On Going"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollments;
