import MainVoteSection from "@/components/vote/MainVoteSection";
import ShortcutBar from "@/components/ShortcutBar";
import Footer from "@/components/Footer";
import MainSavingCalc from "@/components/saving-calc/MainSavingCalc";
export default function Home() {
  return (
    <>
      <MainSavingCalc />
      <MainVoteSection />
      <ShortcutBar />
      <Footer />
    </>
  );
}
