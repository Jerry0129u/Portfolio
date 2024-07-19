import Image from "next/image";

const pieces = [
  {
    image: "git-icon.png",
  },
  {
    image: "twitter-icon.png",
  },
  {
    image: "figma-icon.png",
  },
];

export function Icons() {
  return (
    <div className="flex gap-2">
      {pieces.map((icon, index) => (
        <div key={index}>
          <div className="w-9 h-9">
            <Image width={100} height={100}
              src={`/images/${icon.image}`}
              className="w-6 h-6"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
