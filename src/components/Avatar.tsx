import React from "react";
import Image from "next/image";

import profilePic from "public/images/profile.jpg";

export const Avatar = () => {
  return (
    <div
      className="border-2 border-black inline-block rounded-md overflow-hidden w-[150px] h-[150px] shrink-0"
      style={{ lineHeight: 0, boxShadow: "var(--shadow-hard)" }}
    >
      <Image
        className="object-cover"
        src={profilePic}
        height={150}
        width={150}
        alt="alex"
        placeholder="blur"
      />
    </div>
  );
};
