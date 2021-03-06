import { Cities } from './../city/city.model';

import { SupplierServices } from './../supplier-services/supplierService.model';

// export class Suppliers{
//     constructor (public supplierId:number,
//          public firstName:string,
//          public lastName:string,
//          public supplierAddress:string,
//          public phoneNo:string,
//          public scityId:Cities,
//          public email:string,
//          public password :string,
//          public isActive:number,
//          public supplier_Services:SupplierServices){}

export class Suppliers {
  supplierId?: number | null;
  firstName: string;
  lastName: string;
  supplierAddress: string;
  phoneNo: string;
  scityId: Cities;
  email: string;
  password: string;
  isActive: number;
  status: number;
  AccountCreationDate?: Date;
}

// export class Suppliers{
//     constructor (public supplierId:number, public firstName:string,public lastName:string,public supplierAddress:string,public phoneNo:string,public scityId:Cities,public email:string,public password :string,public isActive:number,public supplier_Services:SupplierServices){}
// }
// export class Suppliers {
//   supplierId?: number;
//   firstName?: string;
//   lastName?: string;
//   supplierAddress?: string;
//   phoneNo?: string;
//   scityId?: Cities;
//   email?: string;
//   password?: string;
//   isActive?: string;
// }
// >>>>>>> e69a2cb8b13400e9e26bc22bb68750f4455ed103
