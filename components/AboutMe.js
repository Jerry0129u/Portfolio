import { Button } from "./Button";

export function AboutMe() {
  return (
    <section>
      <div className="bg-gray-50 w-[375px] h-[1690px] pt-4 flex-col flex gap-8">
        <div className="w-[343px] h-[1562px] my-[64px] mx-4 flex flex-col">
          <Button text="About Me" />
          <div className="w-[343px] h-[300px] flex gap-[211px] mt-[24px] realtive">
            <div>
              <img
                src="images/profile2.png"
                className="w-[240px] h-[280px] ml-[52px] mb-[20px] z-10 absolute"
              ></img>
            </div>
            <div>
              <img
                src="images/profile-shadow.png"
                className="w-[280px] h-[280px] ml-[-180px] mt-[20px] z-0 absolute"
              ></img>
            </div>
          </div>
          <div className="mt-[48px]">
            <h3 className="font-sans font-[600] text-[24px] leading-[32px] text-gray-900">
              Curious about me? Here you have it:
            </h3>
            <div className="mt-[24px] flex flex-col gap-[16px] font-[400] text-[16px] leading-[24px] font-sans text-gray-600">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex ml-[15px] gap-[10px]">
                <ul className="list-disc flex flex-col gap-[10px]">
                  <li>B.E. in Computer Engineering</li>
                  <li className="w-[120px]">Full time freelancer</li>
                </ul>
                <ul className="list-disc flex flex-col gap-[10px]">
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </ul>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
