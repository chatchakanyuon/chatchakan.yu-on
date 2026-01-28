import Image from "next/image";

export function Hero() {
  return (
    <section>
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="flex-1">
          <Image
            src="/profile.webp"
            width={500}
            height={500}
            className="rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
            alt="Chatchakan Yu-on"
          />
        </div>
        <div className="flex-2 items-center content-center text-center">
          <h1 className="text-4xl font-bold">
            {"Hi, I am"} <span className="">Chatchakan Yu-on</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
