import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import '../../styles/global.scss'
import '../../styles/typography.scss'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.className} ${dmSans.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
