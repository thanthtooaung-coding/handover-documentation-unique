import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-section.component.html',
  styleUrls: ['./learning-section.component.css']
})
export class LearningSectionComponent {
  lessons = [
    {
      title: 'စီမံကိန်းမိတ်ဆက်',
      description: 'စီမံကိန်း၏ အခြေခံအချက်အလက်များနှင့် ရည်မှန်းချက်များ'
    },
    {
      title: 'နည်းပညာများ',
      description: 'အသုံးပြုထားသော နည်းပညာများနှင့် ကိရိယာများ'
    },
    {
      title: 'လုပ်ငန်းစဉ်များ',
      description: 'အဓိက လုပ်ငန်းစဉ်များနှင့် လုပ်ထုံးလုပ်နည်းများ'
    }
  ];
}
