import { Component } from '@angular/core';
import { NavMenu } from '../../../../shared/components/micro/nav-menu/nav-menu';
import { NgClass } from '../../../../../../node_modules/@angular/common/types/_common_module-chunk';
import { NavMenuItem } from '../../../../shared/components/micro/nav-menu/nav-menu.types';

@Component({
  selector: 'app-header',
  imports: [NavMenu, ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuItems: NavMenuItem[] = [
    {
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      label: 'Notifications',
      route: '/notifications',
      badge: 5,
    },
    {
      label: 'Settings',
      route: '/settings',
      badge: 'New',
    },
    {
      label: 'Admin Panel',
      route: '/admin',
      disabled: true,
    },
  ];
}
