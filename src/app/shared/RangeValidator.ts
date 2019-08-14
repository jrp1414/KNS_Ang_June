import { AbstractControl, ValidatorFn } from '@angular/forms';

export function RangeValidator(min:number,max:number):ValidatorFn {
    return function (c:AbstractControl):{[key:string]:boolean} | null {
      if(c.pristine && c.invalid){
        return null;
      }
      if(c.value>=min && c.value<=max){
        return null;
      }
      return {range:true};
    }  
  }
  
  
  // function RangeValidator(c:AbstractControl):{[key:string]:boolean} | null {
  //   if(c.pristine && c.invalid){
  //     return null;
  //   }
  //   if(c.value>=6 && c.value<=14){
  //     return null;
  //   }
  //   return {range:true};
  // }