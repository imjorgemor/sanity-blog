import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';
import { DisableDraftMode } from '@/components/disable-draft-mode';
import { SanityLive } from '@/sanity/lib/live';
import { Header } from '@/components/header';
import '../globals.css';

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </div>
  );
}