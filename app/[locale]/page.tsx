import type { Locale } from "@/lib/dictionaries";
import { HomeView } from "@/components/home/home-view";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;

  return <HomeView locale={loc} />;
}
