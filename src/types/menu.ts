export type nestedMenu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
};

export type NestedSubMenu = {
  [key: string]: nestedMenu[];
};

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  nestedSubMenu?: NestedSubMenu;
};
