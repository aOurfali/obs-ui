import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Center {
  id: number
  name: string;
  type: string;
  country: string;
  city: string;
  adress: string;
}

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent {

   centers: Center[] = [
    {id: 0, name: 'الفاضل', type: 'عميل-عميل', country: 'تركيا',  city: 'اسطنبول', adress: 'مقابل جامع الفاتح'},
    {id: 1, name: 'الماجد', type: 'صادر',      country: 'العراق', city: 'بغداد',    adress: 'شارع الجنة'},
    {id: 0, name: 'الحامد', type: 'صادر-وارد', country: 'اليمن',  city: 'صنعاء',    adress: 'مقابل الجامع الكبير '},
    {id: 0, name: 'الصامد', type: 'وارد',       country: 'تركيا', city: 'انقرة',    adress: 'وسط السوق'},
    {id: 0, name: 'الفاتح', type: 'عميل-عميل', country: 'الأردن',  city: 'عمان',     adress: 'طرف النهر'},
  ];

  headers: string[] = ['قفل', 'رابط التوثيق', 'etwas', 'الدولة', 'المدينة', 'العنوان', 'النوع', 'الاسم', 'رقم الصندوق'];
  
  constructor (private router: Router) {}
  focdfdy() {
    const ii = this.headers[5].indexOf;
  }

  navigateTo(value: any) {
    this.router.navigate(['../', value]);
  }
}
