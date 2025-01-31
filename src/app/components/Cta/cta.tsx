'use client';

export default function CTA() {
  return (
    <div className="cta-container text-white flex justify-center items-center pt-5 pb-5 ">
      <div className="font-sans text-center space-y-4">
        <p className="text-1xl font-semibold">CONTACT ME</p>    
        <h1 className="text-7xl font-extrabold leading-tight">GET IN</h1>
        <h1 className="text-7xl font-extrabold leading-tight teks-outline-white">TOUCH</h1>
        <a href="#contact" className="inline-block mt-8 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300">
          CONTACT
        </a>
      </div>
    </div>
  );
}
