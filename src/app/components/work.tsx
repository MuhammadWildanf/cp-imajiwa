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
    }
  ];

  return (
    <div className="pt-4 pb-4">
      {/* Mapping data */}
      {workItems.map(item => (
        <div key={item.id} className="flex flex-col items-center p-4 m-4">
          <img
            src={item.src}
            alt={item.alt}
            className="w-[70vw] h-auto object-cover rounded-lg"
          />
          <h1 className="text-left pt-5 w-[70vw]">{item.title}</h1>
        </div>
      ))}
    </div>
  );
}
