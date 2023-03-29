import Image from "next/image";
import React from "react";

interface PlaylistCardProps {
  img: string;
  name: string;
  description: string;
  size: number;
}

const PlaylistCard = ({ img, name, description, size }: PlaylistCardProps) => {
  return (
    <div className="flex flex-col p-4 w-[181px] gap-3 bg-spotifyCardBG rounded-lg">
      <Image src={img} alt={name} height={size} width={size} className="playlist-section-container-image" />
      <span className="text-base font-bold">{name}</span>
      <span className="text-xs text-spotifyTextGray">{description}</span>
    </div>
  );
};

export { PlaylistCard };
