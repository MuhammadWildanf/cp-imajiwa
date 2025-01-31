'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Work() {
  const workItems = [
    {
      id: 1,
      src: '/assets/videomapping.jpeg',
      alt: 'Image 1',
      title: 'Title 1',
    },
    {
      id: 2,
      src: '/assets/videomapping.jpeg',
      alt: 'Image 2',
      title: 'Title 2',
    },
    {
      id: 3,
      src: '/assets/videomapping.jpeg',
      alt: 'Image 3',
      title: 'Title 3',
    },
    {
      id: 4,
      src: '/assets/videomapping.jpeg',
      alt: 'Image 4',
      title: 'Title 4',
    },
  ];

  return (
    <div className="works-wrapper flex flex-col items-center justify-start w-[70vw] mx-auto gap-[4.44vw] text-center">
      {workItems.map((item) => (
        <div key={item.id} className="works-block sticky top-4 flex flex-col items-center justify-start w-full gap-[1.11vw]  rounded-t-lg">
          <div className="works-link-wrapper relative flex flex-col items-center justify-center w-full overflow-hidden">
            <div className="works-icon-wrapper absolute z-10 flex items-center justify-center w-[6.67vw] h-[6.67vw] rounded-full bg-black text-primary backdrop-blur-md">
              view work
            </div>
            <div className="works-image-wrapper relative w-full aspect-[16/9] overflow-hidden rounded-[24px]">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={450}
                className="parallax-image w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="works-text-block flex flex-col items-start justify-start w-full pb-[0.11vw] gap-[0.56vw] text-left">
            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
