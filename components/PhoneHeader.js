import Image from "next/image";

export function PhoneHeader() {
  return (
    <section>
      <div className="h-[68px] pt-4">
        <div className="h-9 mx-4 flex gap-[211px]">
          <div>
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              className="w-24 h-9 py-1"
            />
          </div>
          <div>
            <img src="images/drop-icon.png" className="w-9 h-9"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
