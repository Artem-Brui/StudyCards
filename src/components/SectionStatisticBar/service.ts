import type { CardItemType } from "@/assets/base/base";

export const getStatisticBarData = (cards: CardItemType[]) => {
  const barDataItems = [
    { title: "Total cards", value: 0, icon: 'layers' },
    { title: "Mastered", value: 0, icon: 'brain' },
    { title: "In Progress", value: 0, icon: 'book' },
    { title: "Not Started", value: 0, icon: 'box' },
  ];

  for (let i = 0; i < barDataItems.length; i++) {
    const item = barDataItems[i];

    switch (item.title) {
      default: {
        break;
      }
      case "Total cards": {
        barDataItems[i].value = cards.length;
        break;
      }
      case "Mastered": {
        barDataItems[i].value = cards.filter((card) => card.mastered).length;
        break;
      }
      case "In Progress": {
        const categories = cards.reduce((acc, card) => {
          const category = card.category;

          return acc.includes(category) ? acc : [...acc, category];
        }, [] as string[]);

        const inProgressAmount = categories.reduce((acc, category) => {
          const cardsByCategory = cards.filter((card) => card.category === category);
          const isStarted = cardsByCategory.some((card) => card.mastered);
          
          if (!isStarted) return acc;

          const startedCardsAmount = cardsByCategory.filter((card) => !card.mastered).length;
          
          return acc + startedCardsAmount;
        }, 0);

        barDataItems[i].value = inProgressAmount;
        break;
      }
      case "Not Started": {
        const isProgressAmount = barDataItems.find(
          (item) => item.title === "In Progress"
        )?.value;

        if (isProgressAmount) {
          barDataItems[i].value = cards.length - isProgressAmount;
        }
        break;
      }
    }
  }

  return barDataItems;
};