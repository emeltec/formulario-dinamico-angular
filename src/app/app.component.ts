import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ListQuestions = [
    {
      id: 1,
      descripcion: "Cual es los 4 ultimos digitos de tarjeta?",
      flag: 1
    },
    {
      id: 4,
      descripcion: "Cual es tu telefono?",
      flag: 2
    },
    {
      id: 6,
      descripcion: "Donde te entregaron tu tarjeta?",
      flag: 1
    },
    {
      id: 2,
      descripcion: "Cual es tu fecha de nacimiento?",
      flag: 3
    },
    {
      id: 3,
      descripcion: "Con que correo te registraste?",
      flag: 3
    },
  ]

  ListOficinas = [
    {
      id: 1,
      nombre: 'Miraflores'
    },
    {
      id: 1,
      nombre: 'Surco'
    },
    {
      id: 1,
      nombre: 'Lima'
    },
  ]


  formQuest: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.formQuest = this.formBuilder.group({
      preguntas: this.formBuilder.array([])
    });

    this.setQuestions();
  }


  get preguntas(){
    return this.formQuest.get('preguntas') as FormArray;
  }

  

    setQuestions(){
      let control = <FormArray>this.formQuest.controls.preguntas;

      this.ListQuestions.forEach( x => {
        control.push(this.formBuilder.group({
          pregunta:''
        }))
      })
      
    }

  

    onSubmit(){
      //console.log(this.formQuest.value)

      for (let i = 0; i < this.preguntas.length; i++) {
        console.log(this.preguntas.at(i).value);
      }

      //console.log(this.formQuest.controls['preguntas']['controls'][0].value )
    }



  Add(){
    const pregFormGroup = this.formBuilder.group({
      id:'',
      descripcion:''
    });
    this.preguntas.push(pregFormGroup);
  }

  Remove(index: number){
    this.preguntas.removeAt(index);
  }

}
