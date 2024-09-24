export const Pwd = [
  "SENSORY_VISION",
  "SENSORY_SPEECH_&_HEARING_IMPAIRED",
  "PHYSICAL_PARAPLEGIC",
  "OTHERS",
];
export const u_perCategories = [
  {
    category: "Underprivileged",
    items: [
      "IMMIGRATIONS_&_REFUGEES",
      "RURAL",
      "ECONOMICALLY_DISADVANTAGED_INDIVIDUAL",
    ],
  },
  {
    category: "Unemployment/Underemployment",
    items: ["LOW_INCOME_GROUP"],
  },
  {
    category: "Under Represented",
    items: ["ETHNICITY"],
  },
];
export let U_PERconst: string[] = [];
u_perCategories.forEach((category) => {
  category.items.forEach((item) => {
    U_PERconst.push(item);
  });
});

export const Gender = ["MALE", "FEMALE", "OTHER"];

export const pwdOptions = Pwd.map((item) => {
  return {
    id: item,
    label: item.split("_").join(" ").toLowerCase(),
  };
});

export const u_perOptions = u_perCategories.map((category) => ({
  category: category.category,
  items: category.items.map((item) => ({
    id: item,
    label: item.split("_").join(" ").toLowerCase(),
  })),
}));

export const genderOptions = Gender.map((item) => ({
  id: item,
  label: item.toLowerCase(),
}));
