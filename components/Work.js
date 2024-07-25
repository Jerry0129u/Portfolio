import { Button } from "./Button";
import { SectionParagraph } from "./SectionParagraph";
import { WorkLayout } from "./WorkLayout";

export function Work () {
    return   <section>
               <div className="h-[2616px] pt-4 flex-col flex gap-8 xl:h-[1656px]">
                <div className="h-[2488px] my-16 mx-4 flex flex-col gap-4 xl:h-[1656px]">
                  <Button text="Work"/>
                  <SectionParagraph paragraph="Some of the noteworthy projects I have built:"/>
                   <WorkLayout />
                </div>      
               </div>  
           </section>;
}