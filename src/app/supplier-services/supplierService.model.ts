
import { Services } from './../service/service.model';
// {
//     "supplierServiceId": 1,
//     "serviceId": {
//         "serviceId": 1,
//         "serviceName": "catering"
//     },
//     
//     "charges": 5000.0
// }

export class SupplierServices{
    constructor(public serviceId:Services,public charges:number){}
}