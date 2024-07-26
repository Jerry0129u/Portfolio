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
  { path: "skills-tailwind.png", text: "Tailwind", style: "mt-[10px] xl:mt-[25px]", },
  { path: "skills-figma.png", text: "Figma",  style: "ml-[15px]" },
  { path: "skills-cypress.png", text: "Cypress" },
  { path: "skills-storybook.png", text: "Storybook" },
  { path: "skills-git.png", text: "Git" }
]

export function SkillsIcon() {
  return (
    <section className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-3 gap-16 xl:grid xl:grid-cols-8 items-center xl:mt-[-20px] xl:gap-16">
          {items.map((image, index) => (
            <div key={index} className="w-16 h-16 items-center text-center mt-4 py-1">
              <div>
                <img src={`/images/${image.path}`} className={`${image.style }`}/>
              </div>
              <h2 className="font-sans font-[400] text-[16px] leading-6 text-gray-600 mt-2">{image.text} </h2>
            </div>
          ))}
        </div>
    </section>
  );
}
