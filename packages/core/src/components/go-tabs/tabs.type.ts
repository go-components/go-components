export interface TabItem {
  tabId: string;
  panelId: string;
  label: string;
  active: boolean;
}

export interface ActiveTab {
  index: number;
  tabEl: HTMLElement;
}
export interface ActiveTabWithPanel {
  index: number;
  tabEl: HTMLElement;
  panelEl: HTMLElement;
}

export type JustifyOption = 'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
