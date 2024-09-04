import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';
import { NonRenduDirective } from '../shared/non-rendu.directive';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, NonRenduDirective,
    MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre="Liste des assignments";
  boutonDesactive = false;
  // Champs du formulaire
  nomDevoir = '';
  dateDeRendu = null;

  assignments:Assignment[] = [
    {
      nom:"Devoir Angular de M.Buffa",
      dateDeRendu:new Date('2024-10-15'),
      rendu:false
    },
    {
      nom:"Devoir Big Data de M.Donati",
      dateDeRendu:new Date('2024-11-25'),
      rendu:false
    },
    {
      nom:"Fiche personnelle",
      dateDeRendu:new Date('2024-09-01'),
      rendu:true
    }
  ];

  constructor() {
    console.log("constructeur appelé")
  }

  ngOnInit() {
    console.log("ngOnInit appelé, après affichage");
    /*
    setTimeout(() => { 
      console.log("3 secondes plus tard");
      this.boutonDesactive = true;
    }, 3000);
    */
  }

  getColor(a:any) {
    if(a.rendu) return 'green';
    else return 'red';
  }

  testeClick(a:any) {
    console.log("click  sur : "+a.nom);
  }

  onSubmit(event:any) {
    if(this.nomDevoir === '' || this.dateDeRendu === null) return;

    console.log("Nom du devoir : "+this.nomDevoir); 
    console.log("Date de rendu du devoir : "+this.dateDeRendu); 

    const nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;

    // on le rajoute au tableau
    this.assignments.push(nouvelAssignment);

  }
}
