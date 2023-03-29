import React from "react";
import { Layout } from "@/layouts/Layout";
import { PlaylistCard } from "@/components/PlaylistCard";
import Head from "next/head";

const playlistInfo = {
  focus: [
    {
      img: "/media/playlist/Jazz.svg",
      name: "Jazz Vibes",
      description: "The original chill instrumental beats playlist.",
    },
    {
      img: "/media/playlist/DeepFocus.svg",
      name: "Deep Focus",
      description: "Keep calm and focus with ambient and post-rock music.",
    },
    {
      img: "/media/playlist/Study.svg",
      name: "Instrumental Study",
      description: "Focus with soft study music in the background.",
    },
    {
      img: "/media/playlist/Piano.svg",
      name: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces",
    },
    {
      img: "/media/playlist/FocusFlow.svg",
      name: "Focus Flow",
      description: "Uptempo instrumental hip hop beats.",
    },
    {
      img: "/media/playlist/Work.svg",
      name: "Workday Lounge",
      description: "Lounge and chill out music for your workday.",
    },
  ],
};

const index = () => {
  return (
    <>
    <Head>
      <title>Spotify***</title>
    </Head>
    <Layout>
      <section className="main-container">
        <div className="playlist-section">
          <div className="playlist-section-header">
            <h1>Focus</h1>
            <span>Show all</span>
          </div>
          <div className="playlist-section-container">
            {playlistInfo.focus.map((playlist, index) => {
              return (
                <PlaylistCard
                  key={`${playlist.name}_${index}`} /* IMPORTANTE */
                  img={playlist.img}
                  name={playlist.name}
                  description={playlist.description}
                  size={149.17}
                />
              );
            })}
          </div>
        </div>
        <div className="playlist-section">
          <div className="playlist-section-header">
            <h1>Spotify Playlist</h1>
            <span>Show all</span>
          </div>
          <div className="playlist-section-container">
            <PlaylistCard
              img={"/media/playlist/TTH.svg"}
              name={"Today's Top Hits"}
              description={
                "PinkPantheress & Ice Spice are on top of the Hottest 50!"
              }
              size={0}
            />
          </div>
        </div>
      </section>
    </Layout>
    </>    
  );
};

export default index;
