import './globals.css'
import { Inter } from 'next/font/google'
import { StarProvider } from './context/StarContext';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://star-10.vercel.app//'), //本番環境のアプリ名
  title: 'star-10',
  description: 'なるはやでスター10個の獲得を目指すアプリ。スタートとスター10をかけました。',
  openGraph: {
		title: 'star-10',
    description: 'なるはやでスター10個の獲得を目指すアプリ。スタートとスター10をかけました。',
	},
	twitter: {
		title: 'star-10',
    description: 'なるはやでスター10個の獲得を目指すアプリ。スタートとスター10をかけました。',
		card: 'summary_large_image',
	},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarProvider>
          <Header />
            {children}
          <Footer />
        </StarProvider>
      </body>
    </html>
  )
}
