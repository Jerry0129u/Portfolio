import { Upworklist } from "./Upwork-list";

export function ExperienceUpwork(props) {
  const date = props.date;
  const header = props.header;

  return (
    <div className="w-[343px] h-[372px] rounded-xl bg-slate-600">
      <div className="w-[279px] h-[308px] m-[32px] bg-slate-500 flex flex-col gap-[16px]">
        <img src="images/upwork-logo.png" className="w-[102px] h-[28px]"></img>
        <h4 className="font-sans font-[400] text-[16px] leading-[24px] text-gray-700">
          {date}
        </h4>
        <ul className="font-sans font-[600] text-[18px] leading-[28px] text-gray-900">
          {header}
          <div className="font-sans font-[400] text-[16px] leading-[24px] text-gray-600 gap-[4px] flex flex-col mt-[16px] list-disc ml-[25px]">
            <Upworklist list="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Upworklist list="Ut pretium arcu et massa semper, id fringilla leo semper." />
            <Upworklist list="Sed quis justo ac magna." />
            <Upworklist list="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
        </ul>
      </div>
    </div>
  );
}
