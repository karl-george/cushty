import { NAV_LINKS } from '@/utils/constants';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <ul className='flex flex-row gap-16'>
      {NAV_LINKS.map(({ label, href }) => (
        <li key={href}>
          <Link href={href} className='nav-link'>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
