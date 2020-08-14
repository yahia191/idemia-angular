import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {


x='';y='';
z=0;t=0;
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    fetch('/assets/Test-Automation-Report.html').then(res => res.text()).then(data => {
      
            let parser = new DOMParser(),
                doc = parser.parseFromString(data, 'text/html');
                
                for (let index = 0; index < doc.getElementsByClassName('test-status').length; index++) {
                  if(doc.getElementsByClassName('test-status')[index].textContent==="pass"){
                    this.y+=doc.getElementsByClassName('test-name')[index].textContent+"<br>";
                    this.z++;
                  }else{
                    this.x+=doc.getElementsByClassName('test-name')[index].textContent +"<br>";
                    this.t++;
                  }
              }
     
      
              document.getElementById("test1").innerHTML+="le nombre de test total "+doc.getElementsByClassName('test-status').length+"<br>"; 
              document.getElementById("test2").innerHTML+="le nombre de test positif "+this.z+"<br>";
              document.getElementById("test10").innerHTML+=this.y+"<br>";
              document.getElementById("test3").innerHTML+="le nombre de test fail "+this.t+"<br>";
              document.getElementById("test20").innerHTML+=this.x+"<br>";
        });
  }
  

}
