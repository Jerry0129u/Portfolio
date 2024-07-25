import Image from "next/image";

export function Footer() {
    return (
      <section>
        <div className="h-[68px] pt-4 bg-gray-50">
          <div className="h-[20px] mt-[10px] flex gap-2 xl:ml-[428.5px]">
          <Image src={"/images/c.png"} width={4} height={4} alt="copyright" className="w-4 h-4 mt-1" />
          <p className="font-[400] text-[13px] leading-6 font-sans text-gray-600">2023 | Designed and coded with ❤️️ by Sagar Shah</p>
          </div>
        </div>
      </section>
    );
  }
