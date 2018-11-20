import { Injectable } from '@angular/core';
import { Http ,HttpModule, Headers,RequestOptions } from '@angular/http';
import { Device } from '@ionic-native/device';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigProvider {
  readonly baseUrl: string = 'http://142.4.10.93/~vooap/tutorry/api/v1/';
  readonly appVersion:string = '1.0';
  constructor() {}
}
