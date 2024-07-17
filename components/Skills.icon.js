const items = [
  { path: "skills-js.png", text: "JavaScrift" },
  { path: "skills-ts.png", text: "Typescrift" },
  { path: "skills-react.png", text: "React" },
  { path: "skills-next.png", text: "Next.js" },
  { path: "skills-node.png", text: "Node.js", style: "mt-[-5px]"},
  { path: "skills-express.png", text: "Express.js" },
  { path: "skills-nest.png", text: "Nest.js" },
  { path: "skills-socket.png", text: "Socket.io" },
  { path: "skills-sql.png", text: "PostgreSQL" },
  { path: "skills-mongo.png", text: "MongoDB", style: "ml-[20px]" },
  { path: "skills-sas.png", text: "Sass/Scss" },
  { path: "skills-tailwind.png", text: "Tailwind", style: "mt-[10px]", },
  { path: "skills-figma.png", text: "Figma",  style: "ml-[15px]" },
  { path: "skills-cypress.png", text: "Cypress" },
  { path: "skills-storybook.png", text: "Storybook" },
  { path: "skills-git.png", text: "Git" },
];

export function SkillsIcon() {
  return (
    <section className="w-[343px] mx-[16px] mt-[24px]">
        <div className="grid grid-cols-3 gap-8 ">
          {items.map((image, index) => (
            <div className="w-[64px] h-[64px] items-center text-center mt-[16px] py-1">
              <div>
                <img src={`/images/${image.path}`} className={`${image.style }`}/>
              </div>
              <h2 className="font-sans font-[400] text-[16px] leading-[24px] text-gray-600 mt-[8px]">
                {image.text} 
              </h2>
            </div>
          ))}
        </div>
    </section>
  );
}
