import { ReactNode } from 'react';
import type { Metadata } from 'next';

import Sider from '@/components/Sider';

import '@/styles/global.scss';
import 'normalize.css';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Instagram clone',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className={styles.main}>
          <Sider />
          {children}
        </div>
      </body>
    </html>
  );
}
