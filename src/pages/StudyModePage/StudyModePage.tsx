import { SectionStatisticBar } from "@/components/SectionStatistic/SectionStatisticBar";
import { SectionStudy } from "@/components/SectionStudy/SectionStudy";

function StudyModePage() {
  return (
    <main data-page='study'>
      <SectionStudy />
      <SectionStatisticBar />
    </main>
  );
}

export default StudyModePage;
