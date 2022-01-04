import React from "react";
import Image from "next/image";

import profilePic from "public/images/profile.jpg";

export const Avatar = () => {
  return (
    <div
      className="border-2 border-black inline-block rounded-md overflow-hidden"
      style={{ lineHeight: 0, boxShadow: "var(--shadow-hard)" }}
    >
      <Image
        src={profilePic}
        height={130}
        width={130}
        alt="alex"
        placeholder="blur"
      />
    </div>
  );
};
