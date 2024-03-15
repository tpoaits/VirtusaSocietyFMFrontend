import { Routes } from '@angular/router';
import { AddResidentComponent } from './components/add-resident/add-resident.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AllResidentsComponent } from './components/all-residents/all-residents.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'addResident', component: AddResidentComponent },
            { path: 'viewResident', component: AllResidentsComponent }]
    },
];
