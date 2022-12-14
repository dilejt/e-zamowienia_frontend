import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { NavbarProps } from './Navbar.types';
import { ActionBox, Container, StyledAppBar, Wrapper } from './Navbar.styles';
import { Drawer } from './drawer/Drawer';
import { UserMenu } from './userMenu/UserMenu';
import { Hamburger } from './hamburger/Hamburger';

import { theme } from '@/theme/theme';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';

export const Navbar = ({ children, buttons, languages, enableColorOnDark, position, userPanel }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const { isAuthenticated } = useAuthContext();

  const handleMenuToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  if (isDesktop) {
    return (
      <StyledAppBar id={'menu'} position={position} enableColorOnDark={enableColorOnDark}>
        <Wrapper>
          <Container>
            {children}
            <ActionBox>{buttons}</ActionBox>
            {languages}
            {isAuthenticated && <UserMenu userPanel={userPanel} />}
          </Container>
        </Wrapper>
      </StyledAppBar>
    );
  }

  return (
    <>
      <StyledAppBar position={position} enableColorOnDark={enableColorOnDark}>
        <Wrapper>
          <Container>
            <Hamburger handleMenuToggle={handleMenuToggle} />
          </Container>
        </Wrapper>
      </StyledAppBar>
      <Drawer
        onToggle={handleMenuToggle}
        isOpened={open}
        buttons={buttons}
        languages={languages}
        userPanel={userPanel}
        isAuthenticated={isAuthenticated}
      >
        {children}
      </Drawer>
    </>
  );
};
