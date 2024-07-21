import Image from "next/image";

export function ContactCard() {
  return (
    <div className="shadow rounded-lg bg-white p-2 rotate-3">
      <div className="relative w-64 h-72 overflow-hidden rounded-lg">
        <Image
          src="/images/home/portrait-alex.jpg"
          sizes="400px"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
