import Footer from "@/components/Common/Footer";
import ShortcutBar from "@/components/Common/ShortcutBar";
import MainGoal from "@/components/Goal/MainGoal";
import MainSavingCalc from "@/components/saving-calc/MainSavingCalc";
import MainVoteSection from "@/components/Vote/MainVoteSection";
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
