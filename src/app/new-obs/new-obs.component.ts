import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-obs',
  templateUrl: './new-obs.component.html',
  styleUrls: ['./new-obs.component.css']
})
export class NewObsComponent {
  // myObservable = new Observable((observer)=>{
  //   observer.next('1')
  //   observer.next('2')
  //   observer.next('3')
  //   // observer.error(Error('Something went wrong please try again later'))
  //   observer.next('4')
  //   observer.next('5')
  //   observer.complete()
  // })

  myObservable = new Observable((observer)=>{
    setTimeout(()=>{observer.next('1')},1000)
    setTimeout(()=>{observer.next('2')},2000)
    setTimeout(()=>{observer.next('3')},3000)
    // setTimeout(()=>{observer.error(Error('Something went wrong please try again later'))},3000)
    setTimeout(()=>{observer.next('4')},4000)
    setTimeout(()=>{observer.next('5')},5000)
    setTimeout(()=>{observer.complete()},6000)
  })

  ngOnInit(){
    this.myObservable.subscribe((val)=>{
      console.log(val)
    },
    (error)=>{
      alert(error.message)
    },
    ()=>{
      alert('Observable has complete emitting all values')
    })
  }
}





