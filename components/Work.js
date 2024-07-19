import { Button } from "./Button";
import { SectionParagraph } from "./SectionParagraph";
import { WorkLayout } from "./WorkLayout";

export function Work () {
    return   <section>
               <div className="w-[375px] h-[2616px] pt-4 flex-col flex gap-8 ">
                <div className="w-[343px] h-[2488px] my-16 mx-4 flex flex-col gap-4">
                  <Button text="Work"/>
                  <SectionParagraph paragraph="Some of the noteworthy projects I have built:"/>
                   <WorkLayout />
                </div>      
               </div>  
           </section>;
}