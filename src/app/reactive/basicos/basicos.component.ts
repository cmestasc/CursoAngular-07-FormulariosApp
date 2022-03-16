import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent   {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl ('RTX 4080ti'),
  //   precio: new FormControl (1500),
  //   existencias: new FormControl (5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)],],
    precio: [null , [Validators.required, Validators.min(0)]],
    existencias: [null , [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }


  guardar(){
    if(this.miFormulario.invalid){
      return;
    }
    console.log(this.miFormulario.value)
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls?.[campo]?.errors
        && this.miFormulario.controls?.[campo]?.touched
  }
}
