import Image from "next/image";

export function ContactCard() {
  return (
    <div className="shadow rounded-lg bg-white p-4 pb-16 rotate-3">
      <div className="relative w-64 h-64 overflow-hidden rounded-lg">
        <Image
          src="/images/alex-face.jpg"
          sizes="400px"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
