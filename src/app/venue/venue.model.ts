import { Cities } from './../city/city.model';
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

export class Venue {
  venueId?: number;
  venueName?: string | null;
  venueAddress?: string | null;
  vcityId?: Cities;
  venueFacilities?: VenueFacilities[] | null;
  phoneNo?: string | null;
  email?: string | null;
  image?: string | null;
  guestCapacity?: number | null;
  description?: string | null;
}
