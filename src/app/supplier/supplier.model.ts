import { Cities } from './../city/city.model';
import { SupplierServices } from './../supplier-services/supplierService.model';
// {
//     "supplierId": 1,
//     "firstName": "swati",
//     "lastName": "badgujar",
//     "supplierAddress": "pune",
//     "phoneNo": "8888888888",
//     "scityId": {
//         "cityId": 1,
//         "city": "pune"
//     },
//     "email": "abc",
//     "password": "swati",
//     "isActive": 1,
//     "supplier_Services": [
//         {
//             "supplierServiceId": 1,
//             "serviceId": {
//                 "serviceId": 1,
//                 "serviceName": "catering"
//             },
//             "charges": 5000.0
//         }
//     ],
//     "Acount-creation-Date": "2020-12-18"
// }
//import {Cities} from './../city/city.model';

// export class Suppliers{
//     constructor (public supplierId:number, public firstName:string,public lastName:string,public supplierAddress:string,public phoneNo:string,public scityId:Cities,public email:string,public password :string,public isActive:number,public supplier_Services:SupplierServices){}
// }
export class Suppliers {
  supplierId?: number;
  firstName?: string;
  lastName?: string;
  supplierAddress?: string;
  phoneNo?: string;
  scityId?: Cities;
  email?: string;
  password?: string;
  isActive?: string;
}
