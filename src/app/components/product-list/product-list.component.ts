import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    imageWidth: string = "75px";
    imageHeight: string = "75px";
    // imageWidth:number=100;
    // imageHeight:number=100;
    constructor() {
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

        let prod3=new Product(11,"Test Prod","GDN-00223",2542.52,4,"","test@outlook.com","19 March 2018",new Description("Test Description",2018));
        this.products.push(prod3);
    }

    ngOnInit() {
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


    CatchingInParent(data: string) {
        console.log(data);
    }


    products: Product[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": {
                'descText': "Leaf Rake Description",
                "mfdYear": 2018
            },
            "price": 19.95485968596,
            "starRating": 3,
            "imageUrl": "https://www.harrodhorticultural.com/uploads/images/products/GGT-886_Sneeboer_Leaf_Rakes_1.jpg",
            "emailId": "test@test.com"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            // "releaseDate": "March 18, 2016",
            // "description": {
            //     'descText': "15 gallon capacity rolling garden cart",
            //     "mfdYear": 2013
            // },
            "price": 0,
            "starRating": 4,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
            "emailId": "test@test.com"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": {
                'descText': "Curved claw steel hammer",
                "mfdYear": 2014
            },
            "price": 8.9,
            "starRating": 6,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
            "emailId": "test@test.com"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": {
                'descText': "15-inch steel blade hand saw",
                "mfdYear": 2017
            },
            "price": 11.55,
            "starRating": 1,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
            "emailId": "test@test.com"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": {
                'descText': "Standard two-button video game controller",
                "mfdYear": 2017
            },
            "price": 35.95,
            "starRating": 5,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
            "emailId": "test@test.com"
        }
    ];




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


