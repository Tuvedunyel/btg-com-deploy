export interface MenuType {
  data: {
    ID: number;
    menu_order: number;
    title: string;
    slug: string;
    url: string;
    menu_item_parent: string;
  }[];
}

export interface rsOptions {
  facebook: {
    url: string;
    title: string;
    target: string;
  };
  instagram: {
    url: string;
    title: string;
    target: string;
  };
  linkedin: {
    url: string;
    title: string;
    target: string;
  };
}

export interface OptionsType {
  data: rsOptions;
}

export interface MenuData {
  ID: number;
  menu_order: number;
  title: string;
  slug: string;
  url: string;
  menu_item_parent: string;
}
