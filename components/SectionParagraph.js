export function SectionParagraph(props) {
    const paragraph = props.paragraph
 
     return (
        <div className="w-[343px] text-center font-sans font-[400] text-[18px] leading-[28px] text-gray-600">
        {paragraph}
        </div>   
     );
   }