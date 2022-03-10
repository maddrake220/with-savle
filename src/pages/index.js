import Footer from "@/components/Footer";
import MainGoal from "@/components/goal/MainGoal";
import ShortcutBar from "@/components/ShortcutBar";
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
