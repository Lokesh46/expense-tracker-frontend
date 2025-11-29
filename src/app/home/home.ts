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
      title: 'Manage Categories',
      description: 'Create and organize your expense categories for better tracking.',
      cta: 'Go to Categories',
      link: '/categories',
    },
    {
      title: 'Log a new expense',
      description: 'Capture spending instantly and categorize it on the spot.',
      cta: 'Add expense',
      link: '/transactions',
    },
    {
      title: 'View Transactions',
      description: 'Review all your transactions with detailed filters and search.',
      cta: 'View Transactions',
      link: '/transactions',
    },
  ]);

  protected readonly plannerTips = signal([
    'Schedule a weekly check-in to review trends and plan for next week.',
    'Create category caps so essentials and lifestyle spending stay balanced.',
    'Turn on reminders in your profile to never miss a bill payment.',
    'Organize transactions by category to better understand your spending habits.',
  ]);
}

