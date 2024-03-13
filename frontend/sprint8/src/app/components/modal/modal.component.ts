import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { EventsData } from '../../interfaces/events_data';
import { eventNames } from 'process';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, RouterModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export default class ModalComponent implements OnInit {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private databaseService = inject(DatabaseService)

  modalForm?: FormGroup
  event?: EventsData

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log('el id del OnInit del modal es: ', id)

    if(id) {
      this.databaseService.getEventById(parseInt(id))
      .subscribe(event => {
        this.event = event
        this.modalForm = this.fb.group({
          nombre: [event.nombre, [Validators.required]],
          lugar: [event.lugar, [Validators.required]],
          fecha: [event.fecha, [Validators.required]],
          preinscripcion: [event.preinscripcion, [Validators.required]],
          precio: [event.precio, [Validators.required]]
        })
      } )
    } else {
      this.modalForm = this.fb.group({
        nombre: ['', [Validators.required]],
        lugar: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        preinscripcion: ['', [Validators.required]],
        precio: [0, [Validators.required]]
      })
    }
  }

  save() {
    const database = this.modalForm!.value

    if (this.event) {
      this.databaseService.updateEvent(this.event.id, database)
      .subscribe( () => {
        this.router.navigate(['/'])
    })
    } else {
      this.databaseService.createEvent(database)
      .subscribe( () => {
       this.router.navigate(['/'])
    })
    }
  }



}
