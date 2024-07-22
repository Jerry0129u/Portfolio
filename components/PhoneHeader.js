import Image from "next/image";
import Link from "next/link";
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
      <div className="h-[68px] pt-4">
        <div className="h-9 mx-4 flex justify-between">
          <div><Image src={"/images/logo.png"} width={100} height={100}  alt="logo" className="w-24 h-9 py-1" /></div>
          <div onClick={openMenu}><Image src={"/images/drop-icon.png"} width={100}  height={100} alt="drop" className="w-9 h-9" /></div> 

          <div className={open ? "block" : "hidden"}>
          <div className="fixed  inset-0 bg-gray-900/10 h-[667px] w-[375px]"></div>
          <div className="fixed  top-0 right-0 bottom-0 h-[667px] bg-white shadow-2xl w-80">
           <div className="flex justify-between px-4 pt-4">
            <div><Image src={"/images/logo.png"} width={77} height={32} alt="logo"/></div>
            <div onClick={closeMenu}><Image src={"/images/close-button.png"} width={24} height={24} alt="close"/></div>
           </div>
           <div className=" flex flex-col gap-4 mt-5 pl-4">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
           </div>
          </div>
          </div>

        </div> 
      </div>
    </section>  
  );
}
