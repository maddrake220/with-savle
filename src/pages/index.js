import Footer from "@/components/common/Footer";
import Seo from "@/components/common/Seo";
import ShortcutBar from "@/components/common/ShortcutBar";
import MainGoal from "@/components/goal/MainGoal";
import MainSavingCalc from "@/components/saving-calc/MainSavingCalc";
import MainVote from "@/components/vote/MainVote";

export default function Home() {
  return (
    <>
      <Seo
        title="세이블 | 쉽고 FUN한 저축"
        desc="목적을 여는 FUN한 방법, 가만히 있어도 저축되는 펀세이빙을 통해 목적을 이루어보세요!"
        ogTitle="SAVLE(세이블)"
        ogUrl="https://with-savle.herokuapp.com/"
        ogDesc="목적을 여는 FUN한 방법, 가만히 있어도 저축되는 펀세이빙을 통해 목적을 이루어보세요!"
      />
      <MainGoal />
      <MainSavingCalc />
      <MainVote />
      <ShortcutBar />
      <Footer />
    </>
  );
}
