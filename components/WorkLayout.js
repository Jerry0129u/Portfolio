import Image from "next/image";
import { Button } from "./Button";

const WorksData = [
    {
     title: "Fiskil 1",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
     image: "/images/Work-picture.png",
     image2: "/images/work-icon.png",
     buttons: ["React", "Next.js", "Typescript","Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"]
    },
    {
     title: "Fiskil 2",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
     image: "/images/Work-picture.png",
     image2: "/images/work-icon.png",
     buttons: ["React", "Next.js", "Typescript","Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"]
    },
    {
     title: "Fiskil 3",
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
     image: "/images/Work-picture.png",
     image2: "/images/work-icon.png",
     buttons: ["React", "Next.js", "Typescript","Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"]
    },
]

export function WorkLayout () {
    return (
              <div className="max-w-6xl mx-auto">
                <div className="px-4">
                    {WorksData.map((work, index) => (
                        <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
                    ))}
                </div>
              </div>
    );
}

function WorkCard ({ isReverse = false,  work}) {
    return (
        <div className={`mb-4 rounded-lg shadow md:flex gap-6 ${isReverse ? "md:flex-row-reverse" : ""}`}>
            <div className="p-4 md:flex-1 mt-6">
            <img src="images/Work-picture.png" width={200} height={200} className="w-full rounded-lg shadow-lg"></img>
            </div>

        <div className="p-4 md:flex-1 flex  flex-col gap-8">
            <div className="mb-2 font-bold">{work.title}</div>
            <div className="mb-2">{work.desc}</div>
            <div className="flex flex-wrap gap-2">
             {work.buttons.map((buttons) => (
                <Button key={buttons} text={buttons} />
            ))}
            </div>
            <div className="w-6 h-6">
                <Image src={"/images/work-icon.png"} width={20} height={20} alt="link icon"/>
            </div>
        </div>
        </div>
    );
}