export interface FuelUp {
  _id: string;
  createdOn: Date;
  employeeId: string;
  vehicleId: string;
  fuelUpDate: Date;
  miles: Number;
  gallons: Number;
  totalCost: Number;
}
