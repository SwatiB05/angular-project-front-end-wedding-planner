// export interface facilities {
//     facilityId: number;
//     facilityName: string;
// }

import { Optional } from "@angular/core";


export class Facilities{
   constructor ( public facilityId: number,public facilityName: string){}
}
export class Facility{
   facilityId?:number |null;
   facilityName:string


}