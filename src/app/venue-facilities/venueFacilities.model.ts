import {  FacilityId } from './../facility/facility.model';
// {
    //             "venueFacilityId": 1,
    //             "facilityId": {
    //                 "facilityId": 1,
    //                 "facilityName": "parking"
    //             },
    //             "charges": 12000.0
    //         }

    export class VenueFacility {
        venueFacilityId: number;
        bookings: any[];
        facilityId: FacilityId;
        charges: number;
    }