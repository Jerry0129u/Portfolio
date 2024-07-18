import UpworkCard from "./UpworkCard";

const card = [
  {
    startDate: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    listItems: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        "Ut pretium arcu et massa semper, id fringilla leo semper.", 
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  },
  {
    startDate: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    listItems: [
        "Sed quis justo ac magna.", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]
  },
  {
    startDate: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  },
];

export function ExperienceUpwork() {
  return <>{card.map((list, index) => (
    <div key={index}>
    <UpworkCard props={list} />
    </div>
  ))}
  </>;
}
