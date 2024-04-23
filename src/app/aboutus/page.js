import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function AboutUs() {
  return (
    <div>
      <h1>The About Page</h1>;
      <ul>
        {details.map((dev) => (
          <Link key={dev.id} href={`/aboutus/${dev.id}`}>
            <li>{dev.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;
