import Footer from "@/components/Common/Footer";
import ShortcutBar from "@/components/Common/ShortcutBar";
import MainGoal from "@/components/Goal/MainGoal";
import MainVoteSection from "@/components/Vote/MainVoteSection";

export default function Home() {
  return (
    <>
      <MainGoal />
      <MainVoteSection />
      <ShortcutBar />
      <Footer />
    </>
  );
}
