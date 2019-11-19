export class Vehicle {
  _id?: string;
  createdOn?: number = Date.now();
  vehicleNum: number;
  make: string;
  model: string;
  year: string;
  vin: string;
  userId: string;
}
