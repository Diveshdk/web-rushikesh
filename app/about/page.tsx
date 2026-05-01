import { prisma } from '@/lib/prisma';
import ClientAboutPage from './client-page';

export const metadata = {
  title: 'About Us | Architecture Studio',
  description: 'Meet our team of visionaries, architects, and designers.',
};

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const teamData = await prisma.employees.findMany({
    orderBy: {
      id: 'asc',
    },
  });

  return <ClientAboutPage teamData={teamData} />;
}