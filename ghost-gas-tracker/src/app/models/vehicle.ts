export class Vehicle {
  _id?: string;
  createdOn?: Number = Date.now();
  vehicleNum: Number;
  make: string;
  model: string;
  year: string;
  vin: string;
  employeeId: string;
}
