import { VenueFacilities } from './../venue-facilities/venueFacilities.model';
// {
//     "venueId": 1,
//     "venueName": "gunjan lawns",
//     "venueAddress": "college road",
//     "vcityId": {
//         "cityId": 1,
//         "city": "pune"
//     },
//     "phoneNo": "1253",
//     "email": "abc",
//     "image": "photo",
//     "guestCapacity": 1000,
//     "description": "good venue",
//     "venue_Facilities": [
//         {
//             "venueFacilityId": 1,
//             "facilityId": {
//                 "facilityId": 1,
//                 "facilityName": "parking"
//             },
//             "charges": 12000.0
//         }
//     ]
// }

export class Venue{
    constructor(public venueId:number,public venueName:string,public venueAddress:string,public vcityId:VenueFacilities,public phoneNo:string,public email:string,public image:string,public guestCapacity:number,public description:string){}
}