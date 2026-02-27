import { Component, computed, input, output, signal } from '@angular/core';
import { SelectOption } from './single-select.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-single-select',
  imports: [CommonModule, FormsModule, OverlayModule],
  templateUrl: './single-select.html',
  styleUrl: './single-select.css',
})
export class SingleSelect {
  options = input<SelectOption[]>([]);
  placeholder = input<string>('Select...');
  label = input<string>('From');

  onSelection = output<SelectOption>();

  searchTerm = signal('');
  isOpen = signal(false);
  selectedLabel = signal('');

  filteredOptions = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const list = this.options();
    if (!term) return list;
    return list.filter((opt) => opt.label.toLowerCase().includes(term));
  });

  toggleDropdown() {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.searchTerm.set('');
    }
  }

  selectOption(option: SelectOption) {
    this.selectedLabel.set(option.label);
    this.isOpen.set(false);
    this.onSelection.emit(option);
  }

  visibleSuggestion() {
    this.isOpen.set(true);
  }
}
