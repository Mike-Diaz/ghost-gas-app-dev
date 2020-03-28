export class FuelUp {
  _id?: string;
  createdOn?: number = Date.now();
  userId: string;
  vehicleId: string;
  fuelUpDate: Date;
  miles: number;
  mileStart: number;
  mileEnd: number;
  gallons: number;
  totalCost: number;
}
