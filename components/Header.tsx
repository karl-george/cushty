import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';

const Header = () => {
  const user = true;

  return (
    <header className='container z-10 absolute top-0 left-0 right-0 py-10'>
      <div className='flex flex-row items-center justify-between'>
        {/* Logo */}
        <div>
          <Link href={'/'} className='text-[28px] text-white font-bold'>
            Cushty
          </Link>
        </div>
        {/* Nav Links */}
        <nav className='hidden lg:block'>
          <NavLinks />
        </nav>
        {/* Cart */}
        <div>
          {user ? (
            <div>{/* UserDropdown */}</div>
          ) : (
            <div>{/* Login Button */}</div>
          )}
          <Image
            src={'images/icons/Bag.svg'}
            alt='Cart'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
