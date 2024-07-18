import { Button } from "./Button";
import { SectionParagraph } from "./SectionParagraph";

export function Contact () {
    return   <section>
               <div className="bg-slate-500 w-[375px] h-[472px] pt-4 flex-col flex gap-8 ">
                <div className="bg-slate-400 w-[343px] h-[344px] my-[64px] mx-4 flex flex-col gap-[16px]">
                  <Button text="Get in touch"/>
                  <SectionParagraph paragraph="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."/>
                  <div>
                    <img src=""></img><p></p><img src=""></img>
                    <img src=""></img><p></p><img src=""></img>
                  </div>
                  <div>
                    <p></p>
              
                    </div>
                </div>      
               </div>  
           </section>;
}