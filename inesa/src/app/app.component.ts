import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'inesa';
  public phone = "5491150638662"
  public text = "Deseo comunicarme con ustedes para atención personalizada";

  slickInit(event){
    console.log(event)
  }

  slides = [
    {img: "assets/coninAgroPaint.png"},
    {img: "assets/crestonGrainsPaint.png"},
    {img: "assets/transElectPaint.png"},
  ];
  slideConfig = {
    "autoplay":true,
    "autoplaySpeed":2000,
    "slidesToShow": 1, 
    "slidesToScroll": 1,

  };
}
