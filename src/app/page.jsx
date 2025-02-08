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
    <div className="m-10 md:m-40 ">
      <h1>Hello I am Next.js Developer</h1>
      <Link href="/foods">Go to Foods</Link>
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {
          data.map((food, index) => (
            <div key={index} className="p-5 border-2 border-green-400 md:bg-blue-400 lg:bg-green-400 xl:bg-yellow-400">
              <h2>{food.name}</h2>
              <Image src={food.image} width={600} height={320} alt={food.name}></Image>
            </div>
          ))
        }
      </div>
    </div>
  );
}
