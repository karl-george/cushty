import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className='relative h-[600px] lg:h-screen'>
        <Image
          src={'/images/hero.png'}
          alt='Hero'
          fill
          sizes='100vw'
          className='object-cover'
        />
        <div className='flex flex-col absolute top-1/7 left-1/2 -translate-x-1/2 lg:w-[1050px] text-center gap-5'>
          <h1 className='hero-title'>
            Make Your Interior More Minimalistic & Modern
          </h1>
          <p className='text-white text-2xl'>
            Turn your room into a more minimalist and modern living area
          </p>
        </div>
      </section>
    </main>
  );
}
