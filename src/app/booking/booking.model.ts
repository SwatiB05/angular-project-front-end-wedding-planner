import { Customers } from './../customer/customer.model';
import { Cities } from './../city/city.model';
// {
//     "bookingId": 1,
//     "bookingName": "narayni",
//     "customerId": {
//         "customerId": 1,
//         "firstName": "swati",
//         "lastName": "badgujar",
//         "customerAddress": "pune",
//         "phoneNo": "888888888",
//         "ccityId": {
//             "cityId": 1,
//             "city": "pune"
//         },
//         "email": "abc",
//         "password": "swati",
//         "status": 1,
//         "isActive": 1,
//         "Acount-creation-Date": "2020-12-18"
//     },
//     "totalAmount": null,
//     "discount": null,
//     "DateOfBooking": "2020-12-18"
// }

// export class Bookings{
//     constructor(public bookingName:string,public customerId:Customers,public totalAmount:number,public DateOfBooking :Date,public ccityId:Cities ){}
// }

export class Bookings{
    bookingId?:number|null;
    bookingName:string;
    customerId:Customers;
    totalAmount:number;
    DateOfBooking:Date;
    ccityId:Cities
}
