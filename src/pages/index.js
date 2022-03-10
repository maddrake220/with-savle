import MainVoteSection from "@/components/vote/MainVoteSection";
import MainGoal from "@/components/goal/MainGoal";
import ShortcutBar from "@/components/ShortcutBar";
import Footer from "@/components/Footer";
import MainSavingCalc from "@/components/saving-calc/MainSavingCalc";
export default function Home() {
  return (
    <>
      <MainGoal />
      <MainSavingCalc />
      <MainVoteSection />
      <ShortcutBar />
      <Footer />
    </>
  );
}
