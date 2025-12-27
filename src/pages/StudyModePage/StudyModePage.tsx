import { CardItem } from "@/components/CardItem/CardItem";
import { Header } from "@/components/Header/Header";
import base from "@/assets/base/base.json";
import type { CardItemType } from "@/assets/base/base";
import { Button } from "@/shared/Button/Button";

const cards: CardItemType[] = base;

function StudyModePage() {
  return (
    <>
      <Header />
      <main>
        <CardItem cardVersion="study" card={cards[5]} />
        <Button
          buttonText="New Button"
          buttonStyles={[
            "button",
            "button_colored",
            "button_shadow",
            "button_icon-side_left",
            "button_icon_shuffle",
          ]}
        />
      </main>
    </>
  );
}

export default StudyModePage;
