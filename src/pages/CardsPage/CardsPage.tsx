import { CardControls } from "@/components/CardControls/CardControls";
import { CardsList } from "@/components/CardsList/CardsList";
import { buttonStyles } from "@/service/service";

function CardsPage() {
  return (
    <main>
      <section>
        <CardControls buttonStyles={buttonStyles} />
        <CardsList />
      </section>
    </main>
  );
}

export default CardsPage;
