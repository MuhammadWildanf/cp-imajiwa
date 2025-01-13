'use client';

export default function Hero() {
    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-2 border-gray-400 rounded-full overflow-hidden"
                style={{
                    width: '50vw',
                    height: '50vw',
                }}
            >
                <img
                    src="/assets/logo-gram.png"
                    alt="Logo IMAJIWA"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <h1
                    className="font-bold leading-none"
                    style={{
                        fontSize: '18.5vw',
                        lineHeight: '11.44vw',
                    }}
                >
                    IMAJIWA
                </h1>
                <p
                    className="absolute left-3 mt-4 tracking-wide"
                    style={{
                        fontSize: '1vw',
                        lineHeight: '1.5vw',
                    }}
                >
                    CREATIVE STUDIO
                </p>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-0">
                <div style={{ width: '40vw', height: '40vw' }}>
                    <p className="text-center text-gray-500">[Robot Spline di sini]</p>
                </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black opacity-50 z-10"></div> */}
        </div>
    );
}

