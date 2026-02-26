import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {
  // Global App State
  today = new Date();
  journeyType = signal<'one-way' | 'round-trip'>('one-way');
  departureDate = signal<Date | null>(null);
  returnDate = signal<Date | null>(null);
  activeField = signal<'departure' | 'return'>('departure');
  showCalendar = signal(false);

  // Calendar View State (which month the user is looking at)
  viewDate = signal(new Date(this.today.getFullYear(), this.today.getMonth(), 1));

  // Computed: Generate the grid for the current viewDate
  calendarDays = computed(() => {
    const year = this.viewDate().getFullYear();
    const month = this.viewDate().getMonth();

    // First day of month & Total days in month
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Create empty slots for days from previous month
    const blanks = Array(firstDayIndex).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));

    return [...blanks, ...days];
  });

  changeMonth(delta: number) {
    const current = this.viewDate();
    this.viewDate.set(new Date(current.getFullYear(), current.getMonth() + delta, 1));
  }

  isPast(date: Date | null): boolean {
    if (!date) return false;
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const t = new Date(this.today);
    t.setHours(0, 0, 0, 0);
    return d < t;
  }

  isSameDate(d1: Date | null, d2: Date | null): boolean {
    return d1?.toDateString() === d2?.toDateString();
  }

  selectDate(date: Date | null) {
    if (!date || this.isPast(date)) return;

    if (this.activeField() === 'departure') {
      this.departureDate.set(date);
      if (this.journeyType() === 'round-trip') this.activeField.set('return');
      else this.showCalendar.set(false);
    } else {
      // Prevent return date being before departure
      if (this.departureDate() && date < this.departureDate()!) return;
      this.returnDate.set(date);
      this.showCalendar.set(false);
    }
  }

  formatDate(date: Date | null): string {
    return date
      ? date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      : 'Pick a date';
  }
}
