import { ICategory } from "../types";

export const categoryData: ICategory[] = [
  { id: "33a545ca-ad64-4d86-9dbd-03fcf3333631", name: "Books", parent: "" },
  {
    id: "9a6d14fa-8657-496e-a2ce-c43c4ca37d95",
    name: "Accessories",
    parent: "",
  },
  {
    id: "0cef5f35-f6bc-44fa-a765-05cb29564566",
    name: "AD&D",
    parent: "33a545ca-ad64-4d86-9dbd-03fcf3333631",
  },
  {
    id: "950f348a-e47e-46ca-b880-d2913191a03a",
    name: "World of Darkness",
    parent: "33a545ca-ad64-4d86-9dbd-03fcf3333631",
  },
  {
    id: "a2795914-2683-4e06-9d7b-70e3740618aa",
    name: "GURPS",
    parent: "33a545ca-ad64-4d86-9dbd-03fcf3333631",
  },
  {
    id: "aaef9b21-d9b3-4492-9711-aaec808199e2",
    name: "Core",
    parent: "0cef5f35-f6bc-44fa-a765-05cb29564566",
  },
  {
    id: "1242ac67-99ad-4862-93b7-384689a5e0a6",
    name: "Dragonlance",
    parent: "0cef5f35-f6bc-44fa-a765-05cb29564566",
  },
  {
    id: "6a873d82-2bd5-4d76-bdd6-b473585a71b7",
    name: "Forgotten Realms",
    parent: "0cef5f35-f6bc-44fa-a765-05cb29564566",
  },
  {
    id: "faebf788-2b36-4b41-9946-3da18ed712f3",
    name: "Planescape",
    parent: "0cef5f35-f6bc-44fa-a765-05cb29564566",
  },
  {
    id: "691869af-9467-49a7-b9ae-b5a30aaf41c6",
    name: "Vampire",
    parent: "950f348a-e47e-46ca-b880-d2913191a03a",
  },
  {
    id: "99003421-932d-4c00-9449-716b2d79dcf8",
    name: "Werewolf",
    parent: "950f348a-e47e-46ca-b880-d2913191a03a",
  },
];