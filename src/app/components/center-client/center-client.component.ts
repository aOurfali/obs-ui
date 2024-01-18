import { Component } from '@angular/core';
import { Center } from '../centers/centers.component';

@Component({
  selector: 'app-center-client',
  templateUrl: './center-client.component.html',
  styleUrls: ['./center-client.component.css']
})
export class CenterClientComponent {

  sortDir = 1;//1= 'ASE' -1= DSC
  centers: Center[] = [
    {id: 0, name: 'الفاضل', type: 'عميل-عميل', country: 'تركيا',  city: 'اسطنبول', adress: 'مقابل جامع الفاتح'},
    {id: 1, name: 'الماجد', type: 'صادر',      country: 'العراق', city: 'بغداد',    adress: 'شارع الجنة'},
    {id: 0, name: 'الحامد', type: 'صادر-وارد', country: 'اليمن',  city: 'صنعاء',    adress: 'مقابل الجامع الكبير '},
    {id: 0, name: 'الصامد', type: 'وارد',       country: 'تركيا', city: 'انقرة',    adress: 'وسط السوق'},
    {id: 0, name: 'الفاتح', type: 'عميل-عميل', country: 'الأردن',  city: 'عمان',     adress: 'طرف النهر'},
  ];

  headers: string[] = ['قفل', 'رابط التوثيق', 'etwas', 'الدولة', 'المدينة', 'العنوان', 'النوع', 'الاسم', 'رقم الصندوق'];

  /* onSortClick(event: any) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir=-1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir=1;
    }
    this.sortArr('fname');
  }

  sortArr(colName){
    this.centers.sort((a,b)=>{
      a= a[colName].toLowerCase();
      b= b[colName].toLowerCase();
      return a.compare(b) * this.sortDir;
    });
  } */
}
