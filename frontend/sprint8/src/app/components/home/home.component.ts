import { Component, OnInit, inject } from '@angular/core';
import { EventsData } from '../../interfaces/events_data';
import { DatabaseService } from '../../services/database.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import ModalComponent from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, RouterModule, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private databaseService = inject(DatabaseService)

  public eventsResults: EventsData[] = []


  ngOnInit(): void {
    this.loadAll();

  }

  loadAll(){
    this.databaseService.getEvents()
    .subscribe((events: EventsData[]) => {
      this.eventsResults = events
      console.log(events)
    })
  }

  deleteEvent(event: EventsData) {
    this.databaseService.deleteEvent(event.id)
    .subscribe( () => {
      this.loadAll()
    })
  }

}
