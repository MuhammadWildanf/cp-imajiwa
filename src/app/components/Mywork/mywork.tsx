import './mywork.css';

export default function MyWork() {
    // Jumlah pengulangan teks untuk menciptakan efek tanpa putus
    const repeatCount = 10; // Ubah angka ini untuk menambah/mengurangi jumlah teks
    const titles = Array(repeatCount).fill(['MY WORKS', 'MY WORKS']).flat(); // Menggabungkan teks biasa dan outline

    return (
        <div className="text-white flex justify-center items-center pt-[7rem] pb-[5rem] overflow-hidden">
            <div className="relative flex gap-[50px] animate-infinite-scroll text-left">
                {titles.map((title, index) => (
                    <h2
                        key={index}
                        className={`font-lato text-[11.11vw] leading-[11.11vw] uppercase text-center whitespace-nowrap ${
                            index % 2 === 0 ? '' : 'teks-outline-white'
                        }`}
                    >
                        {title}
                    </h2>
                ))}
            </div>
        </div>
    );
}
