import HomePageCard from "@/app/components/home/homeCard/HomePageCard";
import HomeSlider from "@/app/components/home/HomeSLider";
import HomeVolumes from "@/app/components/home/homeVolume/homeVolumes";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <HomePageCard />
      <HomeVolumes />
    </main>
  );
}
