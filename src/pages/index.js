import Footer from "@/components/Common/Footer";
import ShortcutBar from "@/components/Common/ShortcutBar";
import MainGoal from "@/components/goal/MainGoal";
import MainSavingCalc from "@/components/saving-calc/MainSavingCalc";
import MainVote from "@/components/vote/MainVote";

export default function Home() {
  return (
    <>
      <MainGoal />
      <MainSavingCalc />
      <MainVote />
      <ShortcutBar />
      <Footer />
    </>
  );
}
