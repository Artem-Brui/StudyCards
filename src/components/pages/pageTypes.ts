export const Pages = {
 'study': "Study Mode",
 'cards': "All Cards",
} as const;

export type PageLinkType = keyof typeof Pages;
export type PageTitleType = typeof Pages[PageLinkType];