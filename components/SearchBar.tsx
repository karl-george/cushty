import { Search } from 'lucide-react';
import { Input } from './ui/input';

const SearchBar = () => {
  return (
    <div className='flex flex-row items-center border border-white/90 rounded-full bg-white/30 w-[360px] mx-auto backdrop-blur-xs lg:mt-4 mt-2'>
      <Input
        placeholder='Search furniture'
        type='text'
        className='py-6 border-none px-4 placeholder:text-white placeholder:text-lg text-lg ring-0 focus:ring-0 text-white'
      />
      <div className='px-2 py-2 bg-accent-yellow rounded-full flex items-center justify-center mr-2'>
        <Search className='w-6 h-6 text-white' />
      </div>
    </div>
  );
};

export default SearchBar;
