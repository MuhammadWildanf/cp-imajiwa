import Spline from '@splinetool/react-spline/next';

export default function Hero() {
    return (
        <div className="relative h-screen overflow-hidden">
            {/* circle */}
            <div
                className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-400 rounded-full
                w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[45vw] md:h-[45vw] lg:w-[45vw] lg:h-[45vw] z-1"
            >
                <img
                    src="/assets/logo-gram.png"
                    alt="Logo IMAJIWA"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* teks */}
            <div
                className="absolute text-center transform -translate-x-1/2 
                top-[20%] left-1/2 lg:top-1/2 lg:-translate-y-1/2"
            >
                <h1
                    className="font-sans font-bold "
                    style={{
                        fontSize: '18.5vw',
                        lineHeight: '11.44vw',
                    }}
                >
                    IMAJIWA
                </h1>
                <p
                    className="font-sans absolute left-3"
                    style={{
                        fontSize: '1vw',
                        lineHeight: '1.5vw',
                    }}
                >
                    CREATIVE STUDIO
                </p>
            </div>

            {/* Model 3D dari Spline */}
            <div className="relative left-1/2 transform -translate-x-1/2 w-full h-full flex justify-center">
                    <Spline
                        scene="https://prod.spline.design/1xeNRvVyXMAERw9Z/scene.splinecode"
                    />
            </div>
        </div>
    );
}

