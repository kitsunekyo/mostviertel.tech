import React from "react";
import Image from "next/image";

export const Avatar = () => {
  return (
    <div
      className="border-2 border-black inline-block rounded-md overflow-hidden"
      style={{ lineHeight: 0, boxShadow: "var(--shadow-hard)" }}
    >
      <Image src="/images/profile.jpg" height={200} width={200} alt="alex" />
    </div>
  );
};
