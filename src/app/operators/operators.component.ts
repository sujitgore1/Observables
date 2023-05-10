import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {
  public array:any=[1,2,3,4,5]
  public newArray:any=['A','B','C','D','E']

  myObservable = from(this.array).pipe(map((element:any)=>{
    return element * 7
  }),
  filter((element:any)=>{
    return element > 7
  }))

  ngOnInit(){
    this.myObservable.subscribe((val)=>{
      console.log(val)
    },
    (error:any)=>{
      alert(error.message)
    },
    ()=>{
      alert('Operator has complete the given condition')
    })
  }
}
