import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TFiltersOptions = {
  category: string;
};
type TInitialState = {
  lessons: TFiltersOptions;
  articles: TFiltersOptions;
  researchAndDevelopments: TFiltersOptions;
};

const initialState: TInitialState = {
  lessons: {
    category: "",
  },
  researchAndDevelopments: {
    category: "",
  },
  articles: {
    category: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // select category
    selectCategory: (
      state,
      action: PayloadAction<{ category: string; name: string }>
    ) => {
      if (action.payload.name === "lessons") {
        state.lessons.category = action.payload.category;
      } else if (action.payload.name === "articles") {
        state.articles.category = action.payload.category;
      }
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { selectCategory } = filtersSlice.actions;

// selector
export const selectLessonsFilters = (state: RootState) => state.filters.lessons;
export const selectResearchAndDevelopmentsFilters = (state: RootState) =>
  state.filters.researchAndDevelopments;
export const selectArticlesFilters = (state: RootState) =>
  state.filters.articles;
