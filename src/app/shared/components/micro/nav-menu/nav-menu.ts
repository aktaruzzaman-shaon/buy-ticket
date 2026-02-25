import { Component, input } from '@angular/core';
import { NavMenuItem } from './nav-menu.types';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  item = input<NavMenuItem>({ label: 'Dashboard', route: '/dashboard' });
  activeClasses = 'bg-primary/10 text-primary dark:bg-primary/20 shadow-sm';
  inactiveClasses =
    'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100';
}
