import { Studio } from "../components/page/StudioPage"

import { prisma } from "../lib/prisma";

const getImages = async () => {
  const posts = await prisma.images.findMany().then((res: any) => res.map((item: any) => item.url));
  return posts;
}
async function page() {
  const studioImages = await getImages();
  return (
    <Studio studioImages={studioImages} />
  )
}

export default page