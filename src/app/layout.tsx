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
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="https://jennifer-cheung.github.io/Portfolio/Avatar.png" />
        <title>Jennifer Cheung</title>
      </head>
      <body className={`${dmSerifDisplay.className} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}
