import { Button } from "./Button";
import { SectionParagraph } from "./SectionParagraph";
import { SkillsIcon } from "./Skills.icon";

export function Skills () {
    return  <section>
              <div className="bg-white h-[916px] pt-4 flex-col flex gap-8 mt-[-100px]">
               <div className="h-[788px] my-[64px] mx-4 flex flex-col gap-[16px]">
                <Button text="Skills"/>
                <SectionParagraph paragraph="The skills, tools and technologies I am really good at:" />
               <div> <SkillsIcon /> </div>
               </div>
              </div>  
           </section>;
}