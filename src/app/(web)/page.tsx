import { HomeTemplate } from "@/components/templates";
import { getHomeContent } from "@/services";

export default async function HomePage() {
  return <HomeTemplate content={await getHomeContent()} />;
}
