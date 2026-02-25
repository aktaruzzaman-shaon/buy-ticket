import { Type } from '@angular/core';

export interface NavMenuItem {
  label: string;
  route: string;
  icon?: Type<any>;
  badge?: string | number;
  disabled?: boolean;
}
