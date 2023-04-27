import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  buttonFunctionality = false;
  successMessage = "";
  email='varshini@gmail.com';
  passWord='';
  checkRemainder = false;
  

  constructor(){
    setTimeout(() => 
      { 
        this.buttonFunctionality = true;
        
      }, 3000) ;
  }

  onClickEvent(){
    this.successMessage = "This is Valid now , Thank You";
   }

   onUpdateServiceName(event: Event){
    this.email = (<HTMLInputElement>event.target).value;
   }

   onUpdatePassword(event: Event){
    this.passWord = (<HTMLInputElement>event.target).value;
   }
   onChangeRemainder(event: Event){

     this.checkRemainder = ((<HTMLInputElement>event.target).checked);

   }
   
}