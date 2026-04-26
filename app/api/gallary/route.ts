import { prisma } from '../../lib/prisma';

export async function GET() {
  const posts = await prisma.images.findMany().then((res) => res.map((item) => item.url));
  return Response.json(posts)
}