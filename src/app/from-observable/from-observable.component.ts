import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-observable',
  templateUrl: './from-observable.component.html',
  styleUrls: ['./from-observable.component.css']
})
export class FromObservableComponent {
  public array:any=[1,2,3,4,5]
  public newArray:any=['A','B','C','D','E']

  fromObservable = from(this.array)

  ngOnInit(){
    this.fromObservable.subscribe((val:any)=>{
      console.log('This is from observable',val)
    },
    (error:any)=>{
      alert(error.message)
    },
    ()=>{
      alert('FromObservable has complete emitting all values')
    })
  }
}
