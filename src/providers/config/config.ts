import { Injectable } from '@angular/core';
import { Http ,HttpModule, Headers,RequestOptions } from '@angular/http';
import { Device } from '@ionic-native/device';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigProvider {
  readonly baseUrl: string = 'http://207.154.223.142/tutory/api/v1/';
  readonly appVersion:string = '1.0';
  constructor() {}
}
