import Image from "next/image";
import { useState } from "react";

export function PhoneHeader () {
 const [open, setOpen] = useState(false);
  function openMenu () {
   setOpen(true);
  }
  function closeMenu () {
  setOpen(false);
  }


  return (
    <section>
      <div className="pt-4">
        <div className="h-9 flex justify-between">          
            <Image src={"/images/logo.png"} width={100} height={100}  alt="logo" className="w-24 h-9 py-1"/> 

          <div className="hidden gap-6 xl:flex">
           <div className="flex gap-6 font-sans font-[500] text-[16px] text-gray-600 leading-[26px] pl-[566px] py-[6px]">  
            <p>About</p>
            <p>Work</p> 
            <p>Testimonials</p>
            <p>Contact</p>
           </div>
           <div className="border-gray-200 m-1 border mt-2"></div>
            <div className="py-[6px]"><Image src={"/images/sun-icon.png"} width={24} height={24} alt="sun" id="sun"/></div>
           <div className="w-[164px] h-[36px] rounded-xl bg-gray-900">
            <h2 className="text-gray-50 font-[500] text-[16px] font-sans leading-6 flex justify-center py-[6px] px-4">Download CV</h2>
           </div>
           </div>
           


          <div className="xl:hidden" onClick={openMenu}>
            <Image src={"/images/drop-icon.png"} width={100}  height={100} alt="drop" className="w-9 h-9" />
          </div> 
           <div className={open ? "block" : "hidden"}>
            <div className="fixed  inset-0 bg-gray-500 h-[667px] w-[375px]"></div>
            <div className="fixed  top-0 right-0 bottom-0 h-[667px] bg-white shadow-2xl w-[335px] z-20">
             <div className="flex justify-between px-4 pb-5 pt-4">
              <div><Image src={"/images/logo.png"} width={77} height={32} alt="logo"/></div>
              <div onClick={closeMenu}><Image src={"/images/close-button.png"} width={24} height={24} alt="close"/></div>
             </div>
           <div className="border-slate-900/10 w-80 border"></div>
             <div className=" flex flex-col gap-4 py-4 pl-4 font-sans font-[500] text-[16px] text-gray-600 leading-[26px]">
              <p>About</p>
              <p>Work</p>
              <p>Testimonials</p>
              <p>Contact</p>
              </div>
           <div className="border-slate-900/10 w-80 border"></div>
             <div className="flex justify-between px-3 my-5">
              <div className="font-sans font-[400] text-[16px] leading-6 text-gray-600">Switch Theme</div>
              <div><Image src={"/images/sun-icon.png"} width={24} height={24} alt="sun"/></div>
             </div>
            <div className="w-[288px] h-[36px] rounded-xl bg-gray-900 m-4">
             <h2 className="text-gray-50 font-[500] text-[16px] font-sans leading-6 flex justify-center py-[6px]">Download CV</h2>
            </div>
            </div>
           </div>
        </div> 
      </div>
    </section>  
  );
}
