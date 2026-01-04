import { SectionStatisticBar } from "@/components/SectionStatisticBar/SectionStatisticBar";
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
