import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { CalenderComponent } from './components/calender/calender.component';
import { ChartComponent } from './components/chart/chart.component';
import ModalComponent from './components/modal/modal.component';


export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'modal', title: 'Modal', component: ModalComponent },
  { path: ':id/edit', title: 'Editar Evento', component: ModalComponent },

  { path: 'map', title: 'Mapa', component: MapComponent },
  { path: 'calender', title: 'Calendario', component: CalenderComponent },
  { path: 'chart', title: 'Graficos', component: ChartComponent  },
  { path: '**', redirectTo: '' },

];
