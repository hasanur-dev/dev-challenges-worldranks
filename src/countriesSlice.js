import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import store from "./store";
// console.log(store);
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async function (index) {
    console.log(index);
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/${
          index === "" ? "all" : `/name/${index}`
        }`,
      );
      console.log(res);
      const data = await res.json();
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  countries: [],
  searchIndex: "",
  sortBy: "population",
  selectedRegions: [],
  isUnMember: false,
  isIndependent: false,
  totalCountries: 0,
  status: "idle",
  error: "",
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries(state, action) {
      //   console.log(action.payload);
      state.countries = action.payload;
    },
    updateSortBy(state, action) {
      state.sortBy = action.payload;
    },
    updateRegion(state, action) {
      if (state.selectedRegions.includes(action.payload.toLowerCase())) {
        state.selectedRegions = [...state.selectedRegions].filter(
          (region) => region !== action.payload.toLowerCase(),
        );
      } else state.selectedRegions.push(action.payload.toLowerCase());
    },
    updateSearchIndex(state, action) {
      state.searchIndex = action.payload;
    },
    updateIsUnMember(state, action) {
      state.isUnMember = !state.isUnMember;
    },
    updateIsIndependent(state, action) {
      state.isIndependent = !state.isIndependent;
    },
    updateTotalCountries(state, action) {
      state.totalCountries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = "idle";
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "error";
        state.error = "There was a problem fetching the results";
      });
  },
});

export const {
  setCountries,
  updateSortBy,
  updateRegion,
  updateIsUnMember,
  updateIsIndependent,
  updateTotalCountries,
  updateSearchIndex,
} = countriesSlice.actions;
export default countriesSlice.reducer;

export const getCountries = (store) => store.countries.countries;
export const getSortedBy = (store) => store.countries.sortBy;
export const getSearchIndex = (store) => store.countries.searchIndex;
export const getRegions = (store) => store.countries.selectedRegions;
export const getIsUnMember = (store) => store.countries.isUnMember;
export const getIsIndependent = (store) => store.countries.isIndependent;
export const getTotalCountries = (store) => store.countries.totalCountries;
