import Image from "next/image";
import Link from "next/link";

async function getFoods() {
  const response = await fetch("https://www.rakibulhasanrakib.com/api/foods");
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getFoods();

  return (
    <div className="m-10 md:m-20 lg:m-[120px]">
      <h1>Hello I am Next.js Developer</h1>
      <Link href="/foods">Go to Foods</Link>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 grid-cols-1  gap-4">
        {
          data.map((food, index) => (
            <div key={index} className="border-2 border-green-400 p-5">
              <h2>{food.name}</h2>
              <Image src={food.image} width={600} height={320} alt={food.name}></Image>
            </div>
          ))
        }
      </div>
    </div>
  );
}
