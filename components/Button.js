export function Button(props) {
   const text = props.text

    return (
          <div className="flex justify-center">
            <button className="w-[105px] h-[28px] rounded-xl py-[4px] px-[20px] bg-gray-200">
             <h2 className="font-[500] text-[14px] leading-[20px] font-sans text-gray-600">{text}</h2>
            </button>
          </div>
          
    );
  }