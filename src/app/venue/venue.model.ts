import { VenueFacilities } from './../venue-facilities/venueFacilities.model';

// export class Venue{
//     constructor(public venueId:number,
//         public venueName:string,
//         public venueAddress:string,
//         public vcityId:VenueFacilities,
//         public phoneNo:string,
//         public email:string,
//         public image:string,
//         public guestCapacity:number,
//         public description:string
//         ){}
// }

export interface Venue {
  venueId?: number | null;
  venueName: string;
  venueAddress: string;
  cityId: number;
  venueFacilities: VenueFacilities[];
  phoneNo: string;
  email: string;
  image: string;
  guestCapacity: number;
  description: string;
}
