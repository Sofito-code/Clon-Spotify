import Image from "next/image";
import React from "react";

const Asidebar = () => {
  return (
    <aside>
      <div className="navegation-container">
        <div>
          <Image src="/media/aside/Logo.svg" alt="" />
        </div>
        <div>
          <div className="icon-link">
            <Image src="/media/aside/Home.svg" alt="" />
            <span>Home</span>
          </div>
          <div className="icon-link">
            <Image src="/media/aside/Search.svg" alt="" />
            <span>Search</span>
          </div>
          <div className="icon-link">
            <Image src="/media/aside/Library.svg" alt="" />
            <span>Your Library</span>
          </div>
        </div>
        <div>
          <div className="icon-link">
            <Image src="/media/aside/CreatePlaylist.svg" alt="" />
            <span>Create Playlist</span>
          </div>
          <div className="icon-link">
            <Image src="/media/aside/LikedSongs.svg" alt="" />
            <span>Liked Songs</span>
          </div>
        </div>
      </div>

      <div className="">
        <div>
          <span>Lagal</span>
          <span>Privacy Center</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
          <span>About Ads</span>
          <span>Cookies</span>
        </div>
        <div>English</div>
      </div>
    </aside>
  );
};

export { Asidebar };
