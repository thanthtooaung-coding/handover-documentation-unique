import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.css']
})
export class TasksSectionComponent {
  tasks = [
    {
      title: 'ကုဒ်များကို ပြန်လည်သုံးသပ်ခること',
      description: 'လက်ရှိကုဒ်များကို သေချာစွာ ပြန်လည်သုံးသပ်ပြီး မှတ်တမ်းတင်ရန်',
      status: 'completed'
    },
    {
      title: 'ဒေတာဘေ့စ် မှတ်တမ်းများ',
      description: 'ဒေတာဘေ့စ် ဖွဲ့စည်းပုံနှင့် အရေးကြီးသော ဒေတာများကို မှတ်တမ်းတင်ရန်',
      status: 'in-progress'
    },
    {
      title: 'အသုံးပြုသူလမ်းညွှန်',
      description: 'အသုံးပြုသူများအတွက် အသေးစိတ်လမ်းညွှန်ချက်များ ပြုစုရန်',
      status: 'pending'
    }
  ];

  getStatusText(status: string): string {
    switch(status) {
      case 'completed': return 'ပြီးစီး';
      case 'in-progress': return 'လုပ်ဆောင်နေ';
      case 'pending': return 'စောင့်ဆိုင်း';
      default: return '';
    }
  }
}
