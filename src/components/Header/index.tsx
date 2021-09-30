import React from 'react';
import Link from 'next/link';

import { NavContainer, NavLink } from './header.style';

function Header() {
  return (
    <NavContainer>
      <Link href="/">
        <NavLink>Luiz Doretto</NavLink>
      </Link>
    </NavContainer>
  );
}

export default Header;
