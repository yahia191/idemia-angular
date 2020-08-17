import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Chart } from 'chart.js';
import { from } from 'rxjs';
import { monkeyPatchChartJsLegend } from 'ng2-charts';


@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {



a='';b='';
c=0;d=0;
  constructor() { }
   ngOnInit(): void {
    fetch('/assets/Test-Automation-Report.html').then(res => res.text()).then(data => {
      
            let parser = new DOMParser(),
                doc = parser.parseFromString(data, 'text/html');
                
                for (let index = 0; index < doc.getElementsByClassName('test-status').length; index++) {
                  if(doc.getElementsByClassName('test-status')[index].textContent==="pass"){
                    this.b+=doc.getElementsByClassName('test-name')[index].textContent+"<br>";
                    this.c++;
                  }else{
                    this.a+=doc.getElementsByClassName('test-name')[index].textContent +"<br>";
                    this.d++;
                  }
              }
     
      
              document.getElementById("test1").innerHTML+="le nombre de test total "+doc.getElementsByClassName('test-status').length+"<br>"; 
              document.getElementById("test2").innerHTML+="le nombre de test pass "+this.c+"<br>";
             /*  document.getElementById("test10").innerHTML+=this.b+"<br>"; */
              document.getElementById("test3").innerHTML+="le nombre de test fail "+this.d+"<br>";
              /* document.getElementById("test20").innerHTML+=this.a+"<br>"; */
              
              console.log(this.d);
           this.test();   
        });
        
  }
  onClickMe() {

  let myContainer = <HTMLElement> document.querySelector("#myDiv")
  myContainer.innerHTML=this.b+"<br>";
  
  }

  async onClickMe1() {

    let myContainer = <HTMLElement> document.querySelector("#myDiv1")
    myContainer.innerHTML=this.a+"<br>";
    }
  async test(){
     
    console.log(this.d);
  }
  
    myChart = new Chart('mychart', {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

  /* public doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData = [
    [350, 450, 100],
  ];
  public doughnutChartType = 'doughnut'; */
  

}
