
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[compare]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CompareDirective,
    multi: true
  }]
})
export class CompareDirective implements Validator {

  @Input("compare") OtherControlName: string;

  validate(control: AbstractControl): ValidationErrors {
    let OtherControl = control.parent.get(this.OtherControlName);

    if (control.value !== OtherControl.value) {
      return { match: true };
    }
    return null;
  }

  constructor() { }
}


// Interface Examples

// export class ClassName implements IStudents {
//   samplePropMandatory: string;
//   samplePropOptional?: string;

//   SampleMethodMandatory() {
//     throw new Error("Method not implemented.");
//   }
//   SampleMethodOptional?() {
//     throw new Error("Method not implemented.");
//   }

// }

// export interface IStudents {
//   samplePropMandatory: string;
//   samplePropOptional?: string;
//   SampleMethodMandatory();
//   SampleMethodOptional?();
// }



