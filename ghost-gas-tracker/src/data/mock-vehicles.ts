// Mock data for searchOptions of vehicles
// Define our mock objects
// This data will be replaced with actual data sources later.
export interface MileageLog {
    mpg: number;
    distance: number;
    pricePerGallon: number;
}

export interface Vehicle {
    id: number;
    name: string;
    fleetNum: number;
    vin: string;
    plate: string;
    mileageLog: MileageLog[];
}

export const MOCK_VEHICLES: Vehicle[] = [
    {
        id: 1,
        name: 'Vehicle 1',
        fleetNum: 123,
        vin: '1HG1234',
        plate: 'ABC123',
        mileageLog: [
            { mpg: 25, distance: 12, pricePerGallon: 3.12 }
        ]
    },
    {
        id: 2,
        name: 'Vehicle 2',
        fleetNum: 456,
        vin: '1HG5678',
        plate: 'ABC456',
        mileageLog: [
            { mpg: 22, distance: 15, pricePerGallon: 3.22 },
            { mpg: 21, distance: 16, pricePerGallon: 3.25 }
        ]
    }
];
