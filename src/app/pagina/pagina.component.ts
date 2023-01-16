import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
  constructor(private pre:Router ) { }
  ngOnInit(): void {
  }

  comprados:String[]=[]

  carri1()
  {
    
   this.comprados.push("comida Rapida")
   localStorage.setItem('comprados', JSON.stringify(this.comprados))
  }
  carri2()
  {
   this.comprados.push("comida Rapida")
  }
  carri3()
  {
   this.comprados.push("comida Rapida")
  }
  carri4()
  {
   this.comprados.push("comida Rapida")
  }
  carri5()
  {
   this.comprados.push("comida Rapida")
  }
  carri6()
  {
   this.comprados.push("comida Rapida")
  }
  carri7()
  {
   this.comprados.push("comida Rapida")
  }
  carri8()
  {
   this.comprados.push("comida Rapida")
  }
  carri9()
  {
   this.comprados.push("comida Rapida")
  }
  carri10()
  {
   this.comprados.push("comida Rapida")
  }
  carri11()
  {
   this.comprados.push("comida Rapida")
  }
  carri12()
  {
   this.comprados.push("comida Rapida")
  }
  carri13()
  {
   this.comprados.push("comida Rapida")
  }
  carri14()
  {
   this.comprados.push("comida Rapida")
  }
  carri15()
  {
   this.comprados.push("comida Rapida")
  }
  carri16()
  {
   this.comprados.push("comida Rapida")
  }
  carri17()
  {
   this.comprados.push("comida Rapida")
  }
  carri18()
  {
   this.comprados.push("comida Rapida")
  }
  carri19()
  {
   this.comprados.push("comida Rapida")
  }

carrito(){
  localStorage.setItem('comprados', JSON.stringify(this.comprados))
  this.pre.navigate(['pag3'])
}

}
