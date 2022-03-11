import Footer from "@/components/Common/Footer";
import ShortcutBar from "@/components/Common/ShortcutBar";
import MainGoal from "@/components/goal/MainGoal";
import MainVoteSection from "@/components/vote/MainVoteSection";

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
