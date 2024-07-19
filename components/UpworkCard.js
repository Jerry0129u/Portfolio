const UpworkCard = ( {props} ) => {
 const listItems = props.listItems 

    return (
        <div className="w-[343px] rounded-xl bg-white shadow-md p-8">
        <div className="w-[279px] flex flex-col gap-4">
         <img src="images/upwork-logo.png" className="w-[102px] h-7"></img>
         <h4 className="font-sans font-[400] text-[16px] leading-6 text-gray-700">{props.startDate}</h4>
         <div className="font-sans font-[600] text-[18px] leading-7 text-gray-900"> {props.title}</div>
         <ul className="flex flex-col gap-1">
             {listItems.map((Item, index) => (
               <li key={index} className="font-sans font-[400] text[16px] leading-6 text-gray-600 ml-5 list-disc ">{Item}</li>
             ))}
         </ul>
        </div>
       </div>
    );
};

export default UpworkCard;