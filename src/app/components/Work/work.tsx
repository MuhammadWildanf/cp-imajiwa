'use client';

export default function Work() {
  const workItems = [
    {
      id: 1,
      src: "assets/videomapping.jpeg",
      alt: "Image 1",
      title: "Title 1",
    },
    {
      id: 2,
      src: "assets/videomapping.jpeg",
      alt: "Image 2",
      title: "Title 2",
    },
    {
      id: 3,
      src: "assets/videomapping.jpeg",
      alt: "Image 3",
      title: "Title 3",
    },
    {
      id: 4,
      src: "assets/videomapping.jpeg",
      alt: "Image 4",
      title: "Title 4",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen ">
      {/* Container Carousel */}
      <div className="h-[700px] overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="h-[700px] flex flex-col items-center justify-start snap-center"
          >
            {/* Gambar */}
            <img
              src={item.src}
              alt={item.alt}
              className="w-[70vw] h-[400px] object-cover rounded-lg shadow-lg"
            />
            {/* Judul */}
            <h1 className="text-left pt-5 w-[70vw] text-xl font-semibold">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
