import { Component } from '@angular/core';
import { NavMenu } from '../../../../shared/components/micro/nav-menu/nav-menu';

import { NavMenuItem } from '../../../../shared/components/micro/nav-menu/nav-menu.types';

@Component({
  selector: 'app-header',
  imports: [NavMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuItems: NavMenuItem[] = [
    {
      label: 'Bus',
      route: '/dashboard',
    },
    {
      label: 'Air',
      route: '/notifications',
    },
    {
      label: 'Train',
      route: '/settings',
    },
    {
      label: 'Launch',
      route: '/admin',
      disabled: true,
    },
  ];
}
