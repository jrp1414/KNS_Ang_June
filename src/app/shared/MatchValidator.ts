import { AbstractControl, ValidatorFn } from '@angular/forms';

export function Match(field1:string,field2:string):ValidatorFn{
    return function (c:AbstractControl):{[key:string]:boolean}|null{
        let c1 = c.get(field1);
        let c2=c.get(field2);
        
        if(c1.pristine || c2.pristine){
            return null;
        }
    
        if(c1.value === c2.value){
            return null;
        }
        
        return {match:true};
    };
}

// export function EmailMatch(c:AbstractControl):{[key:string]:boolean}|null{
//     let email = c.get("EmailId");
//     let confirmEmail=c.get("ConfirmEmailId");
    
//     if(email.pristine || confirmEmail.pristine){
//         return null;
//     }

//     if(email.value === confirmEmail.value){
//         return null;
//     }
    
//     return {match:true};
// }