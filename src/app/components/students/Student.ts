export class Student{
    constructor(
        public StudentId:number,
        public AddressId:number,
        public FirstName:string,
        public LastName:string,
        public MobileNo:string,
        public EmailId:string,
        public Address:Address
        ){
    }
}
export class Address{
    
    constructor(
        public AddressId:number,
        public AddLine1:string,
        public AddLine2:string,
        public AddLine3:string,
        public City:string,
        public State:string
    ) {
        
        
    }
}

export let Students:Student[]=[
    new Student(1,1,"Ram","Sharma","998787879","ram@gmail.com",new Address(1,"test","test","test","test","test")),
    new Student(2,2,"Amol","Pathak","998787879","ram@gmail.com",new Address(2,"test","test","test","test","test")),
    new Student(3,3,"Avinash","A","998787879","ram@gmail.com",new Address(3,"test","test","test","test","test"))
];