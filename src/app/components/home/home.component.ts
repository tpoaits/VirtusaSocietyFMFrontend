import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddResidentComponent } from '../add-resident/add-resident.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,CommonModule, AddResidentComponent, RouterLink,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isOpen = true;
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
