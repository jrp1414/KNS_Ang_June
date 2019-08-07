import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

@Directive({
  selector: '[passwordCompare]',
  providers:[{provide:"NG_VALIDATORS",useExisting:PasswordCompareDirective,multi:true}]
})
export class PasswordCompareDirective implements Validator {

  //@Input("passwordCompare") passwordCompare:string[]=[];

  validate(formGroup:FormGroup): ValidationErrors {
    //Write Logic to fetch the values of both the fields and compare..
    return ComparePassword("Password","ConfirmPassword")(formGroup);
  }

  constructor() { }

}


function ComparePassword(Password:string,ConfirmPassword:string) {
 return (formGroup:FormGroup)=>{
  //Get User entered password
  let pwd= <FormControl>formGroup.controls[Password];
  let cnfPwd= <FormControl>formGroup.controls[ConfirmPassword];

  //return null if controls have not been initialized yet
  if(!pwd || !cnfPwd){
    return null;
  }

  // return null if any other validation error is already found and not yet fixed
  if(cnfPwd.errors && !cnfPwd.errors.compare){
    return null;
  }

  //set error if both the fields are not matching
  if(pwd.value!== cnfPwd.value){
    cnfPwd.setErrors({"compare":true});
  }else{
    cnfPwd.setErrors(null);
  }
 }; 
  
}
