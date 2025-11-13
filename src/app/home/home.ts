import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly greeting = signal('Welcome back!');
  protected readonly quickActions = signal([
    {
      title: 'Log a new expense',
      description: 'Capture spending instantly and categorize it on the spot.',
      cta: 'Add expense',
    },
    {
      title: 'Review budgets',
      description: 'Fine-tune categories and set alerts to stay ahead of overspending.',
      cta: 'Open budgets',
    },
    {
      title: 'Upload receipts',
      description: 'Keep your records organized by attaching photos to each entry.',
      cta: 'Manage receipts',
    },
  ]);

  protected readonly plannerTips = signal([
    'Schedule a weekly check-in to review trends and plan for next week.',
    'Create category caps so essentials and lifestyle spending stay balanced.',
    'Turn on reminders in your profile to never miss a bill payment.',
  ]);
}
