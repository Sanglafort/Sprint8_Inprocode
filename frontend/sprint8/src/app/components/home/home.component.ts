import { Component, OnInit, inject } from '@angular/core';
import { EventsData } from '../../interfaces/events_data';
import { DatabaseService } from '../../services/database.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private databaseService = inject(DatabaseService)

  public eventsResults: EventsData[] = []


  ngOnInit(): void {
    this.databaseService.getEvents()
    .subscribe((events: EventsData[]) => {
      this.eventsResults = events
      console.log(events)
    })

  }



  //public showModal: boolean = false
  //public modalMode: "create" | "update" = "create"
  //public selectedEvent: EventsData | null = null
  //public event: any;

}
