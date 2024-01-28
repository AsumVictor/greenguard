import Image from "next/image";
import Header from "./header";

type Team = {
  name: string;
  title: string;
  image: string;
};

const team_members: Team[] = [
  {
    name: "Asum Victor",
    title: "Lead Programmer",
    image: "https://avatars.githubusercontent.com/u/105683075?v=4",
  },
  {
    name: "Amoah Prince Kofi Attah",
    title: "Partnership Manager & Reseacher",
    image: "https://greenguard.tech/assets/img/prince.png",
  },
];

export default function Team() {
  return (
    <section className=" w-full  mt-16 py-2">
      <div>
        <Header heading={`Meet The Team`} />
      </div>
      <div className=" mt-10 flex-col md:flex-row justify-center items-center gap-5 flex">
        {team_members.map((m) => (
          <div key={m.name} className=" w-[6cm] py-1  flex flex-col justify-center items-center">
            <Image
              src={m.image}
              alt={`${m.name} image`}
              className=" rounded-xl"
              width={200}
              height={200}
            />
            <p className=" font-bold text-green-600">{m.name}</p>
            <p className="  font-extralight text-center">- {m.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
