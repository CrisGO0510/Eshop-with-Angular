import { Component, OnInit } from '@angular/core';
import { SingUpService } from '../../services/sing-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private singUpService: SingUpService) { }

  ngOnInit(): void {
    
  }

}
