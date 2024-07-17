export function Introduce () {
    return  <section>
        <div className="w-[375px] h-[880px] pt-4 flex-col flex gap-8">
        <div className="w-[343px] h-[752px] mt-[64px] mx-4 flex flex-col gap-[46px]">
         <div className="w-[343px] h-[300px] flex gap-[211px] realtive">
            <div><img src="images/profile.png" className="w-[240px] h-[280px] ml-[52px] mb-[20px] z-10 absolute"></img></div>
            <div><img src="images/profile-shadow.png" className="w-[280px] h-[280px] ml-[-180px] mt-[20px] z-0 absolute"></img></div>
         </div>
         <div className="w-[343px] h-[216px] flex gap-2">
            <div>
                <h3 className="font-sans font-[600] text-[36px] text-gray-900 leading-[40px]">Hi, I’m Sagar 👋</h3>
                <p className="font-sans font-[400] text-[16px] text-gray-600 leading-[24px] mt-[8px]">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
            </div>
         </div>
         <div className="flex flex-col gap-[8px]">
           <div className="flex gap-[8px]">
            <img src="images/location-icon.png" className="w-[24px] h-[24px]"></img>
            <span className="font-[400] text-[16px] leading-[24px] text-gray-600 font-sans">Ahmedabad, India</span>
           </div>
           <div className="flex gap-[8px]">
            <img src="images/green-dot.png" className="w-[24px] h-[24px]"></img>
            <span className="font-[400] text-[16px] leading-[24px] text-gray-600 font-sans">Available for new projects</span></div>
           </div>
         <div className="flex">
            <div className="w-[36px] h-[36px]">
                <img src="images/git-icon.png" className="w-[24px] h-[24px]"></img>
            </div>
            <div className="w-[36px] h-[36px]">
                <img src="images/twitter-icon.png" className="w-[24px] h-[24px]"></img>
            </div>
            <div className="w-[36px] h-[36px]">
                <img src="images/figma-icon.png" className="w-[15px] h-[15px] mt-[4px] ml-[4px]"></img>
            </div>
         </div>
        </div>
        </div>  
    </section>;
}