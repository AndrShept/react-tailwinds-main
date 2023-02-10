import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { Button } from '../button';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';

export const Header = () => {
  return (
    <header className='flex items-center mt-4 '>
      <LogoIcon />
      <nav className='flex ml-10 space-x-5 items-center'>
        <NavItem text='Feature'>
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text='Company'>
          <NavMenu items={COMPANY} />
        </NavItem>

        <NavItem text='Careers' />
        <NavItem text='About' />
      </nav>
      <div className=' ml-auto flex space-x-5'>
        <Button>Loggin</Button>
        <Button hasBordder={true}>Register</Button>
      </div>
    </header>
  );
};
