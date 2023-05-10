import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ways',
  templateUrl: './ways.component.html',
  styleUrls: ['./ways.component.css']
})
export class WaysComponent {
  // myObservable = Observable.create((observer:any)=>{
  //   observer.next('A')
  //   observer.next('B')
  //   observer.next('C')
  //   observer.next('D')
  //   // observer.error(Error('Something went wrong please try again later'))
  //   observer.next('E')
  //   observer.complete()
  // })

  myObservable = Observable.create((observer:any)=>{
    setTimeout(()=>{observer.next('A')},1000)
    setTimeout(()=>{observer.next('B')},2000)
    setTimeout(()=>{observer.next('C')},3000)
    setTimeout(()=>{observer.next('D')},4000)
    // setTimeout(()=>{observer.error(Error('Something went wrong please try again later'))},4000)
    setTimeout(()=>{observer.next('E')},5000)
    setTimeout(()=>{observer.complete()},6000)
  })

  ngOnInit(){
    this.myObservable.subscribe((val:any)=>{
      console.log('This is observable create data',val)
    },
    (error:any)=>{
      alert(error.message)
    },
    ()=>{
      alert('CreateObservable has complete emitting all data')
    })
  }
}