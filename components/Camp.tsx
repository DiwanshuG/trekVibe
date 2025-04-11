import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div className={`h-full min-h-[340px] w-full flex-shrink-0 ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>

      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 ">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
       <h2 className="text-black bold-32 lg:bold-48 px-6 pb-8">Ongoing Treks ! </h2>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Gomukh Tapovan Trek"
          subtitle="Uttarakhand, India"
          peopleJoined="6k + Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Pin Parvati Pass Trek"
          subtitle="In Himachal Valleys"
          peopleJoined="8k + Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Chopta Chandrashila Trek"
          subtitle="Uttarakhand, India"
          peopleJoined="32k + Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="Hampta Pass Trek"
          subtitle="Somewhere in Himachal Valleys"
          peopleJoined="12k + Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Craving Adventure</strong> But Don’t Know Where to Begin?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          We understand the hesitation that comes with exploring new trails - the uncertainty, the unfamiliar terrain. That’s why we’re here: to guide you through breathtaking treks and unforgettable experiences, one step at a time.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
