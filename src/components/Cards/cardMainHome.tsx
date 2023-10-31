import Image from "next/image";
import bannerCar from "../../assets/Content.svg";

export const CardMainHome = () => {
  return (
    <div className="w-full">
      <Image
        src={bannerCar}
        alt="Banner Ferrari"
        layout="responsive"
        width={1920}
        height={544}
        objectFit="cover"
        className="h-[544px]"
      />
    </div>
  );
};