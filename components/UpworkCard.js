const UpworkCard = ( {props} ) => {
 const listItems = props.listItems 

    return (
        <div className="rounded-xl bg-white shadow-md p-8 xl:mx-[192px]">
        <div className="w-[279px] flex flex-col gap-4 xl:w-[832px]">
        <div className="xl:flex">
          <div className="xl:mr-24">
         <img src="images/upwork-logo.png" className="w-[102px] h-7 mb-4 xl:left"></img>
          </div>
         <h4 className="font-sans font-[400] text-[16px] leading-6 text-gray-700 mb-4 xl:hidden">{props.startDate}</h4>
        <div>
         <div className="font-sans font-[600] text-[18px] leading-7 text-gray-900 mb-4"> {props.title}</div>
         <ul className="flex flex-col gap-1 xl:w-[384px]">
             {listItems.map((Item, index) => (
               <li key={index} className="font-sans font-[400] text[16px] leading-6 text-gray-600 ml-5 list-disc">{Item}</li>
             ))}
         </ul>
        </div>
        <div className="xl:mr-12">
        <h4 className="hidden font-sans font-[400] text-[16px] leading-6 text-gray-700 xl:block">{props.startDate}</h4>
        </div>
         </div>
        </div>
       </div>
    );
};

export default UpworkCard;