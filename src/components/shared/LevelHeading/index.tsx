import Image from "next/image";

const LevelHeading = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={icon ?? ""}
        alt="Level"
        width={500}
        height={500}
        quality={100}
        className="w-[20px] h-[20px] object-cover"
      />
      <span className="text-base text-accent-50 capitalize font-medium">
        {title}
      </span>
    </div>
  );
};

export default LevelHeading;
