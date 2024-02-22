import { atom } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});
