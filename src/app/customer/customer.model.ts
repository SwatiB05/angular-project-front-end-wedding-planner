import { Cities } from './../city/city.model';


// {
//     "customerId": 1,
//     "firstName": "swati",
//     "lastName": "badgujar",
//     "customerAddress": "pune",
//     "phoneNo": "888888888",
//     "ccityId": {
//         "cityId": 1,
//         "city": "pune"
//     },
//     "email": "abc",
//     "password": "swati",
//     "status": 1,
//     "isActive": 1,
//     "Acount-creation-Date": "2020-12-18"
// }

// export class Customers{
//     constructor(public customerId:number,public firstName:string,public customerAddress:string, public phoneNo:string,public email:string,public password:string,public status:number,public isActive:number,public ccityId:Cities){}
// }

export class Customers{
    customerId?:number|null;
    firstName?:string;
    lastName?:string;
    customerAddress?:string;
    phoneNo?:string;
    email:string;
    status?:number;
    isActive?:number;
    ccityId?:Cities;
    DateOfCreation?:Date;
    password?:string;
}