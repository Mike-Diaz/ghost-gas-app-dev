import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      ToastrModule.forRoot()
    ]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
