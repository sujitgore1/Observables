import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-observable',
  templateUrl: './of-observable.component.html',
  styleUrls: ['./of-observable.component.css']
})
export class OfObservableComponent {
  public array:any=[1,2,3,4,5]
  public newArray:any=['A','B','C','D','E']

  ofObservable = of(this.array,this.newArray,20,80,'Hello')
  
  ngOnInit(){
    this.ofObservable.subscribe((val:any)=>{
      console.log('This is ofObservable data',val)
    },
    (error:any)=>{
      alert(error.message)
    },
    ()=>{
      alert('OfObservable has complete emitting all values')
    })
  }
  

}
