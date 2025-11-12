import { NAV_LINKS } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className='container z-10 absolute top-0 left-0 right-0 py-10'>
      <div className='flex flex-row items-center justify-between'>
        {/* Logo */}
        <div>
          <Link href={'/'} className='text-[28px] text-white font-bold'>
            Cushty
          </Link>
        </div>
        {/* Nav Links */}
        <div className='flex flex-row gap-16'>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className='nav-link'>
              {link.label}
            </Link>
          ))}
        </div>
        {/* Cart */}
        <div>
          <Image
            src={'images/icons/Bag.svg'}
            alt='Cart'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
