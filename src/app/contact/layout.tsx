import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with LEDU and learn about our mission',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
