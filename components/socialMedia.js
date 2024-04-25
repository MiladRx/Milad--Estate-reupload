import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-4">
      <Link href="">
        <Image
          src="/icons/socialmedia_icons/instagram.svg"
          alt="description_of_image"
          width="20"
          height="20"
        />
      </Link>
      <Link href="">
        <Image
          src="/icons/socialmedia_icons/linkedIn.svg"
          alt="description_of_image"
          width="20"
          height="20"
        />
      </Link>
      <Link href="">
        <Image
          src="/icons/socialmedia_icons/skype.svg"
          alt="description_of_image"
          width="20"
          height="20"
        />
      </Link>
    </div>
  );
}
