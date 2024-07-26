import { Button } from "./Button";
import { SectionParagraph } from "./SectionParagraph";
import { SkillsIcon } from "./Skills.icon";

export function Skills () {
    return  <section>
              <div className="bg-white h-[916px] pt-4 flex-col flex gap-8 mt-[-100px] xl:mt-16 xl:h-[560px] dark:bg-gray-950">
               <div className="h-[788px] my-[64px] flex flex-col gap-[16px] xl:h-[368px]">
                <Button text="Skills"/>
                <SectionParagraph paragraph="The skills, tools and technologies I am really good at:" />
               <div className="mt-8"> <SkillsIcon /> </div>
               </div>
              </div>  
           </section>;
}