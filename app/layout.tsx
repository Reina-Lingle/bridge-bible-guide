import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'B.R.I.D.G.E. Bible Guide', description: 'AI-assisted Scripture study with six interpretive steps and a personal notebook.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
