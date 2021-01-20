import { Suppliers } from './../supplier/supplier.model';
import { Services } from '../service/service.model';
import { Bookings } from './../booking/booking.model';

//   {
//     "supplierServiceId": 1,
//     "bookings": [],
//     "supplierId": {
//         "supplierId": 1,
//         "firstName": "swati",
//         "lastName": "badgujar",
//         "supplierAddress": "pune",
//         "phoneNo": "8888888888",
//         "scityId": {
//             "cityId": 2,
//             "city": "mumbai"
//         },
//         "email": "abc",
//         "password": "swati",
//         "isActive": 1,
//         "AccountCreationDate": "16-01-2021"
//     },
//     "serviceId": {
//         "serviceId": 1,
//         "serviceName": "catering"
//     },
//     "charges": 5000.0
// }

export class SupplierServices {
  supplierServiceId?: number;
  supplierId: Suppliers;
  bookings?: Bookings;
  serviceId: Services;
  charges: number;
}
