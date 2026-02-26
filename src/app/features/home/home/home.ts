import { Component } from '@angular/core';
import { SingleSelect } from '../../../shared/components/micro/selectOption/single-select/single-select';
import { Calendar } from "../../../shared/components/micro/calendar/calendar/calendar";

@Component({
  selector: 'app-home',
  imports: [SingleSelect, Calendar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
