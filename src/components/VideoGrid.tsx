import { VideoCard } from "./VideoCard"

const Videos = [
    {
        title : "How to jump in 30 days | plan for 30 days",
      image : "image.png",
      author :"Arpit Dadhich",
      timestamp : "1 days go",
      views : "200Mn"
    },
    {
        title : "How to code in 30 days | plan for 30 days",
      image : "image.png",
      author :"Arpit Dadhich",
      timestamp : "1 days go",
      views : "200Mn"
    },
    {
        title : "How to swimming in 30 days | plan for 30 days",
      image : "image.png",
      author :"Arpit Dadhich",
      timestamp : "1 days go",
      views : "200Mn"
    },
    {
        title : "How to running in 30 days | plan for 30 days",
      image : "image.png",
      author :"Arpit Dadhich",
      timestamp : "1 days go",
      views : "200Mn"
    },
    {
        title : "How to running in 30 days | plan for 30 days",
      image : "image.png",
      author :"Arpit Dadhich",
      timestamp : "1 days go",
      views : "200Mn"
    },
    {
        title : "How to running in 30 days | plan for 30 days",
      image : "image.png",
      author :"Arpit Dadhich",
      timestamp : "1 days go",
      views : "200Mn"
    }
]

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {Videos.map((video) => (
        <div className="p-4">
          <VideoCard
            title={video.title}
            image={video.image}
            author={video.author}
            timestamp={video.timestamp}
            views={video.views}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}