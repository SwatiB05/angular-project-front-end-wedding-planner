import { Facility } from './../facility/facility.model';

// "venueFacilities": [
//     {
//         "venueFacilityId": 2,
//         "bookings": [],
//         "facilityId": {
//             "facilityId": 2,
//             "facilityName": "garden"
//         },
//         "charges": 12000.0
//     },
//     {
//         "venueFacilityId": 1,
//         "bookings": [],
//         "facilityId": {
//             "facilityId": 1,
//             "facilityName": "parking"
//         },
//         "charges": 12000.0
//     },
//     {
//         "venueFacilityId": 8,
//         "bookings": [],
//         "facilityId": {
//             "facilityId": 2,
//             "facilityName": "garden"
//         },
//         "charges": 12000.0
//     }
// ]
export class VenueFacilities {
  venueFacilityId?: number;
  bookings?: any[];
  facilityId?: Facility;
  charges?: number;
}
