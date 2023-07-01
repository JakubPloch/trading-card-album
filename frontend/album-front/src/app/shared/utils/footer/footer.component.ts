import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ContactInfo } from '../../models/contact-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private api: ApiService){
  }

  public contactInfo$ = this.api.getContact();

}
