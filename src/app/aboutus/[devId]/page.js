import React from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const DetailPage = ({ params }) => {
  let devDetails;
  if (params?.devId) {
    devDetails = details.find((dev) => dev.id === Number(params.devId));
  }

  if (devDetails) {
    return (
      <div>
        <h1>{devDetails?.name}</h1>
        <p>{devDetails?.role}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Developer does not exist</h1>
    </div>
  );
};

export default DetailPage;
