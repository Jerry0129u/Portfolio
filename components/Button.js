export function Button(props) {
   const text = props.text

    return (
          <div className="flex justify-center">
            <button className="h-7 rounded-xl py-1 px-5 bg-gray-200">
             <h2 className="font-[500] text-[14px] leading-5 font-sans text-gray-600">{text}</h2>
            </button>
          </div>
          
    );
  }