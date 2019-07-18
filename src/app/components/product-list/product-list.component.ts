import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    // providers:[ProductService]
})
export class ProductListComponent implements OnInit {
    dateTimeNow:Date= new Date();
    imageWidth: string = "75px";
    imageHeight: string = "75px";
    filterBy:string="";
    @ViewChild("filter") filter:ElementRef;
    @ViewChild("filterParent") filterParent:ElementRef;
    // imageWidth:number=100;
    // imageHeight:number=100;
    products:Product[];
    constructor(
        private ls:LoggingService,
        private ps:ProductService,
        private route:ActivatedRoute,
        private router:Router
        ) {
        // let prod2:Product=new Product();
        // prod2.productId=11;
        // prod2.productName="Test";
        // prod2.description = new Description();
        // prod2.description.descText="Test Description";
        // prod2.description.mfdYear=2017;
        // prod2.emailId="test@gmail.com";
        // prod2.imageUrl="";
        // prod2.price=25253.46;
        // prod2.productCode="GDN-0011452";
        // prod2.starRating=4;
        this.products= ps.getProducts();
        // let prod3=new Product(11,"Test Prod","GDN-00223",2542.52,4,"","test@outlook.com","19 March 2018",new Description("Test Description",2018));
        // this.products.push(prod3);
    }
    someMessage:string;
    ngOnInit() {
        this.ps.notifyParent.subscribe((data)=>{
            this.someMessage=data;
        });
    }

    getImageStyle() {
        return { width: this.imageWidth, height: this.imageHeight, border: "solid", borderWidth: "2px", 'border-color': "aqua" };
    }

    getClasses(prod) {
        let result: any = {
            veryGood: prod.starRating == 5,
            good: prod.starRating == 4,
            average: prod.starRating == 3,
            poor: prod.starRating == 2,
            veryBad: prod.starRating == 1
        };
        if (prod.description) {
            result.bold = prod.description.mfdYear > 2015;
        }

        return result;

        // let result: string = "";
        // switch (prod.starRating) {
        //     case 1:
        //         result = result + "veryBad ";
        //         break;
        //     case 2:
        //         result = result + "poor ";
        //         break;
        //     case 3:
        //         result = result + "average ";
        //         break;
        //     case 4:
        //         result = result + "good ";
        //         break;
        //     case 5:
        //         result = result + "veryGood ";
        //         break;
        //     default:
        //         break;
        // }

        // if (prod.description.mfdYear>2015) {
        //  result=result+"bold";   
        // }


        // let result: string[] = [];
        // switch (prod.starRating) {
        //     case 1:
        //         result.push("veryBad");
        //         break;
        //     case 2:
        //         result.push("poor");
        //         break;
        //     case 3:
        //         result.push("average");
        //         break;
        //     case 4:
        //         result.push("good");
        //         break;
        //     case 5:
        //         result.push("veryGood");
        //         break;
        //     default:
        //         break;
        // }

        // if (prod.description.mfdYear>2015) {
        //  result.push("bold");   
        // }
        // console.log(result);
        // return result;

    }

    filterText:string;
    CatchingInParent(data: string) {
        console.log(data);
        console.log(this.filter.nativeElement.value);
        this.filterText = this.filter.nativeElement.value;
        console.log(this.filterParent);
    }

    ImpureData(){
        this.products.push({
            "productId": 13,
            "productName": "Leaf Rake",
            "productCode": "GDN-0015",
            "releaseDate": "March 13, 2012",
            "description": {
                'descText': "New Prod",
                "mfdYear": 2017
            },
            "price": 39.95485968596,
            "starRating": 3,
            "imageUrl": "https://www.harrodhorticultural.com/uploads/images/products/GGT-886_Sneeboer_Leaf_Rakes_1.jpg",
            "emailId": "test@test.com"
        })    
    }
    // ls:LoggingService= new LoggingService();
    LogData(){
        // let  ls:LoggingService= new LoggingService();
        // ls.logData("Test Data");
        
        // this.ls.logData("Test Data");


        this.ls.logData("from List component");
    }

    AddNewProduct(){
        this.router.navigate(["new"],{relativeTo:this.route}); 
    }


}


// export class Product {
//     productId: number;
//     productName: string;
//     productCode: string;
//     releaseDate?: string;
//     description?: Description;
//     price: number;
//     starRating: number;
//     imageUrl: string;
//     emailId: string;
// }

// export class Product {
//     constructor(prodId:number,prodName:string,prodCode:string,price:number,starRating:number,
//                 imageUrl:string,emailId:string,releaseDate?:string,desc?:Description){
//         this.productId = prodId;    
//         this.productName = prodName;
//         this.productCode = prodCode;
//         this.price=price;
//         this.starRating = starRating;
//         this.releaseDate = releaseDate;
//         this.description = desc;
//     }
//     productId: number;
//     productName: string;
//     productCode: string;
//     releaseDate?: string;
//     description?: Description;
//     price: number;
//     starRating: number;
//     imageUrl: string;
//     emailId: string;
// }

export class Product {
    constructor(public productId:number,public productName:string,public productCode:string,
                public price:number,public starRating:number,public imageUrl:string,
                public emailId:string,public releaseDate?:string,public description?:Description){
        
    }
    
}

export class Description {
    constructor(public descText: string,public mfdYear: number){

    }    
}


