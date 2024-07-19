import { Button } from "./Button";
import { ExperienceUpwork } from "./ExperienceUpwork";
import { SectionParagraph } from "./SectionParagraph";
export function Experience () {
    return   <section>
               <div className="bg-gray-50 w-[375px] h-[1308px] pt-4 flex-col flex gap-8 mt-[100px]">
                <div className="w-[343px] h-[1180px] my-[64px] mx-4 flex flex-col gap-[16px]">
                  <Button text="Experience"/>
                  <SectionParagraph paragraph="Here is a quick summary of my most recent experiences:"/>
                  <div className="flex flex-col gap-[24px] mt-[24px]">
                  <ExperienceUpwork />
                </div>
                </div>
              
               </div>  
           </section>;
}
