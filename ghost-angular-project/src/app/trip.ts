export class Trip {
    constructor(
        public tripId: number,
        public description: string,
        public vehicle: string,
        public date: string,
        public previousMileage: number,
        public currentMileage: number,
        public gallons: number,
        public mpg: number,
      ) {  }    
}
