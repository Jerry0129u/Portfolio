import { Button } from "./Button";
import { ExperienceUpwork } from "./ExperienceUpwork";
import { SectionParagraph } from "./SectionParagraph";

export function Experience () {

    return  <section className="bg-gray-50 dark:bg-gray-900" id="test">
    <section className="max-w-[1280px] mx-auto">
               <div className="h-[1308px] pt-4 flex-col flex gap-8 mt-[100px] xl:h-[1140px]">
                <div className="h-[1180px] my-16 mx-4 flex flex-col gap-4 xl:h-[948px]">
                  <Button text="Experience"/>
                  <SectionParagraph paragraph="Here is a quick summary of my most recent experiences:"/>
                  <div className="flex flex-col gap-6 mt-6">
                  <ExperienceUpwork />
                </div>
                </div>
               </div>  
           </section>;
          </section>
}
