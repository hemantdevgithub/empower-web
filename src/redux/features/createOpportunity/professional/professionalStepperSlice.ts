import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Location {
  country: string;
  state: string;
  city: string;
  zipCode: string;
}

interface FormData {
  skill: string;
  experience: string;
  pay: { paymentType: string; range: string };
  volumes: string;
  workPermit: string;
  customerEngagementType: string;
  empowerBondType: string;
  workModel: string;
  location: Location;
  startDate: string;
  duration: string;
  interviewModel: string;
}

interface ProfessionalStepperState {
  currentStep: number;
  formData: FormData;
}

const initialState: ProfessionalStepperState = {
  currentStep: 1,
  formData: {
    skill: "",
    experience: "",
    pay: { paymentType: "", range: "" },
    volumes: "",
    workPermit: "",
    customerEngagementType: "",
    empowerBondType: "",
    workModel: "",
    location: { country: "", state: "", city: "", zipCode: "" },
    startDate: "",
    duration: "",
    interviewModel: "",
  },
};

const professionalStepperSlice = createSlice({
  name: "professionalStepper",
  initialState,
  reducers: {
    updateProfessionalFormValues: (
      state,
      action: PayloadAction<Partial<FormData>>
    ) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    goToNextStep: (state) => {
      state.currentStep++;
    },
    goToPrevStep: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.currentStep = action.payload;
      } else {
        state.currentStep--;
      }
    },
  },
});

export const { updateProfessionalFormValues, goToNextStep, goToPrevStep } =
  professionalStepperSlice.actions;

export const professionalStepperReducer = professionalStepperSlice.reducer;

export const professionalFormCurrentStep = (state: RootState) =>
  state.professionalStepper.currentStep;

export const isProfLastStep = (state: RootState) =>
  state.professionalStepper.currentStep === 13;

export const isProfFirstStep = (state: RootState) =>
  state.professionalStepper.currentStep === 1;
