import SearchBar from '@/components/SearchBar';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className='relative h-[900px] lg:h-screen'>
        <Image
          src={'/images/hero.png'}
          alt='Hero'
          fill
          sizes='100vw'
          className='object-cover'
        />
        <div className='flex flex-col absolute top-1/6 lg:top-1/7 left-1/2 -translate-x-1/2 lg:w-[1050px] w-[80%] text-center lg:gap-12 gap-8'>
          <h1 className='hero-title'>
            Make Your Interior More Minimalistic & Modern
          </h1>
          <p className='text-white text-lg lg:text-2xl'>
            Turn your room into a more minimalist and modern living area
          </p>
          <SearchBar />
        </div>
      </section>
    </main>
  );
}
