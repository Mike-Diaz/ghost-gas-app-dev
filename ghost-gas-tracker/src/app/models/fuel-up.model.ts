export class FuelUp {
  _id?: string;
  createdOn?: Number = Date.now();
  userId: string;
  vehicleId: string;
  fuelUpDate: Date;
  miles: Number;
  gallons: Number;
  totalCost: Number;
}
