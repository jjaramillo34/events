import React from "react";

const OtherHours = ({ restaurant }) => {
  const otherHours = restaurant.other_hours
    ? JSON.parse(restaurant.other_hours)
    : null;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Other Working Hours
      </h2>
      {otherHours ? (
        otherHours.map((hoursGroup, index) => (
          <div key={index} className="mb-6">
            {Object.entries(hoursGroup).map(([meal, times]) => (
              <div key={meal}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {meal.toUpperCase()} Hours
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {Object.keys(times).map((day) => (
                    <div
                      key={day}
                      className="bg-gray-100 p-4 rounded-lg shadow"
                    >
                      <h5 className="text-xl font-semibold">{day}</h5>
                      <p className="text-gray-600">
                        {times[day] === "Closed" ? (
                          <span className="text-red-500 font-bold">Closed</span>
                        ) : (
                          times[day]
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No additional working hours available.
        </p>
      )}
    </div>
  );
};

export default OtherHours;
