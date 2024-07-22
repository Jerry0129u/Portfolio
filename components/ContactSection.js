import Image from "next/image";
import { Button } from "./Button";
import { Icons } from "./Icons";
import { SectionParagraph } from "./SectionParagraph";

const contacts = [
  {
    image1: "contact-mail.png",
    contact: "reachsagarshah@gmail.com",
    image2: "contact-copy.png"
  },
  {
    image1: "contact-phone.png",
    contact: "+91 8980500565",
    image2: "contact-copy.png"
  }
];

export function ContactSection() {
  return (
    <section>
      <div className="h-[472px] pt-4 flex-col flex gap-8 ">
        <div className="h-[344px] my-16 mx-4 flex flex-col gap-4">
          <Button text="Get in touch" />
          <SectionParagraph paragraph="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
         <div className="mt-1">
          {contacts.map((call, index) => (
            <div key={index} className="flex flex-col gap-1 ">
              <div className="flex justify-center gap-4">
                <Image src={`/images/${call.image1}`} width={20} height={20} alt="phone" className="w-6 h-6"/>
                <p className="font-sans font-semibold text-base leading-7">{call.contact}</p>
                <Image src={`/images/${call.image2}`} width={20} height={20} alt="link" className="w-6 h-6"/>
              </div>
            </div>
          ))}
         </div>
         <div className="flex flex-col">
          <p className="text-center font-[400] text-[16px] font-sans leading-6 text-gray-600">You may also find me on these platforms!</p>
          <div className="flex justify-center mt-1"><Icons /></div> 
         </div>
        </div>
      </div>
    </section>
  );
}
