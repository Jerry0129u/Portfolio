import Image from "next/image";
import { Icons } from "./Icons";
const link = [
  {
    image: "location-icon.png",
    text: "Ahmedabad, India",
  },
  {
    image: "green-dot.png",
    text: "Available for new projects",
  },
];

export function Introduce() {
  return (
    <section>
      <div className=" h-[880px] pt-4 flex-col flex gap-8 ">
        <div className=" h-[752px] mt-[64px] mx-4 flex flex-col gap-[46px]">
         <div className="aspect-[5/6] bg-gray-200">
          <Image src={"/images/profile.png"} width={300} height={300} alt="profile" className="block object-cover w-full relative bottom-4"/>
         </div>
          <div className="h-[216px] flex gap-2">
            <div> 
              <h3 className="font-sans font-[600] text-[36px] text-gray-900 leading-10">Hi, I’m Sagar 👋</h3>
              <p className="font-sans font-[400] text-[16px] text-gray-600 leading-6 mt-2">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {link.map((info, index) => (
              <div key={index}>
                <div className="flex gap-2">
                  <Image src={`/images/${info.image}`} width={100} height={100} alt="info" className="w-6 h-6" />
                  <span className="font-[400] text-[16px] leading-6 text-gray-600 font-sans">{info.text}</span>
                </div>
              </div>
            ))}
          </div>
          <Icons />
        </div>
      </div>
    </section>
  );
}
