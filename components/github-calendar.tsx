'use client';

import { useTheme } from 'next-themes';
import ReactGithubCalendar from 'react-github-calendar';

export const GithubCalendar = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <ReactGithubCalendar
        colorScheme={theme === 'dark' ? 'dark' : 'light'}
        fontSize={10}
        labels={{
          months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        }}
        style={{
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--color-muted-foreground)',
        }}
        theme={{
          light: ['#f4f4f5', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b'],
          dark: ['#18181b', '#27272a', '#3f3f46', '#52525b', '#71717a'],
        }}
        username="jotyy"
      />
    </div>
  );
};
