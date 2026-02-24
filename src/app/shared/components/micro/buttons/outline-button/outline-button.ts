import { Component, computed, input, output } from '@angular/core';
import { ButtonSize, ButtonVariant } from '../button.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-outline-button',
  imports: [CommonModule],
  templateUrl: './outline-button.html',
  styleUrl: './outline-button.css',
})
export class OutlineButton {
  label = input<string>('Button');
  isDisabled = input<boolean>(false);
  loading = input<boolean>(false);
  variant = input<ButtonVariant>('solid');
  size = input<ButtonSize>('md');

  click = output<void>();

  sizeClass = computed(() => {
    switch (this.size()) {
      case 'xs':
        return 'px-2 py-1 text-xs';
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-5 py-3 text-lg';
      case 'xl':
        return 'px-6 py-4 text-xl';
      default:
        return '';
    }
  });

  variantClass = computed(() => {
    switch (this.variant()) {
      case 'solid':
        return 'bg-blue-500 text-white border border-blue-500';
      case 'outline':
        return 'bg-transparent text-blue-500 border border-blue-500';
      case 'ghost':
        return 'bg-transparent text-blue-500 border-none';
      case 'link':
        return 'bg-transparent text-blue-500 border-none underline';
      default:
        return '';
    }
  });

  onClick() {
    if (!this.isDisabled() && !this.loading()) {
      this.click.emit();
    }
  }
}
