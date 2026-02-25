import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'TubeYou';

  videos = [
    {
      id: 1,
      title: 'How to center a div (you cant)',
      channel: 'DevGuru',
      views: '4.2M',
      time: '2 days ago',
      duration: '12:34',
      thumbnail: '🎬',
    },
    {
      id: 2,
      title: 'React in 100 seconds (impossible)',
      channel: 'SpeedyCode',
      views: '1.8M',
      time: '1 week ago',
      duration: '1:40',
      thumbnail: '⚡',
    },
    {
      id: 3,
      title: 'Why I quit programming',
      channel: 'BurntOutDev',
      views: '892K',
      time: '3 days ago',
      duration: '18:22',
      thumbnail: '😢',
    },
    {
      id: 4,
      title: 'CSS is awesome (not)',
      channel: 'WebWiz',
      views: '2.1M',
      time: '5 days ago',
      duration: '8:15',
      thumbnail: '🎨',
    },
    {
      id: 5,
      title: '10 VSCode extensions you need',
      channel: 'CodeTips',
      views: '567K',
      time: '1 day ago',
      duration: '15:00',
      thumbnail: '🧩',
    },
    {
      id: 6,
      title: 'Git push --force gone wrong',
      channel: 'OopsieDev',
      views: '3.4M',
      time: '2 weeks ago',
      duration: '6:42',
      thumbnail: '💥',
    },
  ];

  sidebarItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '🔥', label: 'Trending' },
    { icon: '📺', label: 'Subscriptions' },
    { icon: '📚', label: 'Library' },
    { icon: '📜', label: 'History' },
  ];
}
