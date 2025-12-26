import { CardItem } from "@/components/CardItem/CardItem";
import { Header } from "@/components/Header/Header";
import base from "@/assets/base/base.json";
import type { CardItemType } from "@/assets/base/base";

const cards: CardItemType[] = base;


function StudyModePage() {
  return (
    <>
      <Header />
      <main>
        <CardItem cardVersion="study" card={cards[5]} />
      </main>
    </>
  );
}

export default StudyModePage;
