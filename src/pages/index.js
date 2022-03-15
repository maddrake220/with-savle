import Footer from "@/components/common/Footer";
import Seo from "@/components/common/Seo";
import ShortcutBar from "@/components/common/ShortcutBar";
import MainGoal from "@/components/Goal/MainGoal";
import MainSavingCalc from "@/components/saving-calc/MainSavingCalc";
import MainVote from "@/components/vote/MainVote";

export default function Home() {
  return (
    <>
      <Seo title="세이블 | 쉽고 FUN한 저축" />
      <MainGoal />
      <MainSavingCalc />
      <MainVote />
      <ShortcutBar />
      <Footer />
    </>
  );
}
