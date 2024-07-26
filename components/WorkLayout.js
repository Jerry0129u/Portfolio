import Image from "next/image";
import { Button } from "./Button";

const WorksData = [
  {
    title: "Fiskil 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/images/Work-picture.png",
    image2: "/images/work-icon.png",
    buttons: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
  },
  {
    title: "Fiskil 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/images/Work-picture.png",
    image2: "/images/work-icon.png",
    buttons: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
  },
  {
    title: "Fiskil 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/images/Work-picture.png",
    image2: "/images/work-icon.png",
    buttons: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
  },
];

export function WorkLayout() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {WorksData.map((work, index) => (
        <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
      ))}
    </div>
  );
}

function WorkCard({ isReverse = false, work }) {
  return (
    <div className={`mb-8 rounded-lg shadow-lg md:flex ${isReverse ? "md:flex-row-reverse" : ""}`}>
      <div className="md:flex-1 dark:bg-gray-800">
        <Image
          src={work.image}
          alt={`Image for ${work.title}`}
          width={500}
          height={300}
          className="w-full rounded-lg"
        />
      </div>
      <div className="md:flex-1 p-4 flex flex-col gap-4 dark:bg-gray-900">
        <h3 className="text-xl font-semibold dark:text-white">{work.title}</h3>
        <p className="text-gray-700 dark:text-white">{work.desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {work.buttons.map((button) => (
            <Button key={button} text={button} />
          ))}
        </div>
        <div className="mt-4">
          <Image
            src={work.image2}
            alt="Link icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
}
