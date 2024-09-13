import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';


import { FormsModule } from '@angular/forms';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,
    FormsModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AddAssignmentComponent {
  @Output()
  // attention, "nouvelAssignment" est le nom de l'événement' qui 
  // va être écoutée dans le parent, mais aussi le nom de la 
  // variable qui va servir à transmettre l'objet Assignment dans ce fichier
  nouvelAssignment = new EventEmitter<Assignment>();
  
  // Champs du formulaire
  nomDevoir = '';
  dateDeRendu = null;


  onSubmit(event: any) {
    if (this.nomDevoir === '' || this.dateDeRendu === null) return;

    console.log("Nom du devoir : " + this.nomDevoir);
    console.log("Date de rendu du devoir : " + this.dateDeRendu);

    // assignment à envoyer, nouvellement créé
    const a = new Assignment();
    a.nom = this.nomDevoir;
    a.dateDeRendu = this.dateDeRendu;
    a.rendu = false;

    // on le rajoute au tableau
    //this.assignments.push(a);

    // On envoie l'événement "nouvelAssignment" à notre parent
    // avec comme donnée attachée l'objet "a": l'assignment 
    // nouvellement créé
    this.nouvelAssignment.emit(a);

  }
}
