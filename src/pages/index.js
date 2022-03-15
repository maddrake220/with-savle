import Footer from "@/components/Common/Footer";
import ShortcutBar from "@/components/Common/ShortcutBar";
import MainGoal from "@/components/goal/MainGoal";

import Seo from "@/components/common/Seo";

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
