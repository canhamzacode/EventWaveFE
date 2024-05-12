import Image from 'next/image';

const Hero = () => (
  <section className="w-full bg-[#ebcece] tablet:py-[96px] py-[48px] grid gap-[52px] tablet:grid-cols-[1fr,580px] grid-cols-1 items-center relative">
    <div className="flex flex-col gap-12 max-w-[508px]">
      <div className="flex flex-col gap-6 relative">
        <Image
          src="/heroFlower.svg"
          width={28}
          height={32}
          alt="hero flower"
          className="absolute tablet:right-8 right-0 -top-3 "
        />
        <h1>Discover Exciting Events Near You</h1>
        <p className="text-xl font-medium">
          Join our vibrant community and never miss out on the best events happening in your area.
        </p>
      </div>
      <button className="btn border-0 w-[152px] bg-primary text-white">Join an Event</button>
    </div>
    <div className="z-10">
      <Image src="/heroImg.svg" width={580} height={560} alt="hero img" className="mx-auto" />
    </div>
    <div className="w-[504px] tablet:flex hidden absolute right-0 py-[18px] h-full bg-primary" />
    <div className="absolute bottom-[24px] tablet:left-[80px] left-[40px] sm:flex hidden ">
      ORGANIZE ◙ JOIN ◙ CONNECT ◙ NETWORK
    </div>
  </section>
);

export default Hero;
