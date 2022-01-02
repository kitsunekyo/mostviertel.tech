import React from "react";
import Image from "next/image";

export const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      src="/images/profile.jpg"
      height={200}
      width={200}
      alt="alex"
    />
  );
};
