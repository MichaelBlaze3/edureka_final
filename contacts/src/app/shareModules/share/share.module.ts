import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { AccessService } from '../../access/accessServices/access.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[AccessService],
  exports: [FormsModule, HttpClientModule]
})
export class ShareModule { }
