import React from "react";

const WorkingHours = ({ restaurant }) => {
  const workingHours = JSON.parse(restaurant.working_hours);

  return (
    <div className="bg-white p-12 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Working Hours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(workingHours).map((day) => (
          <div key={day} className="bg-gray-100 p-4 rounded-lg shadow">
            <h5 className="text-xl font-semibold">{day}</h5>
            <p className="text-gray-600">
              {workingHours[day] === "Closed" ? (
                <span className="text-red-500 font-bold">Closed</span>
              ) : (
                workingHours[day]
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingHours;
