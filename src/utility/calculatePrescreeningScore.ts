import { TCandidateInfo, TJobPost, TLabelValuePair } from "@/types";

function calculatePrescreeningScore(
  jobDetails: TJobPost,
  candidateProfile: TCandidateInfo
): number {
  let score = 0;
  const totalPoints = 50; // Total points to distribute

  // Assign weights or points per field
  const fieldPoints = totalPoints / 7; // Since there are 7 fields to compare

  // 1. Check experience_level
  if (
    jobDetails.experienceLevels.some(
      (level) =>
        level.value === candidateProfile.experience_level ||
        level.value === "ANY" ||
        candidateProfile.experience_level === "ANY"
    )
  ) {
    score += fieldPoints;
  }
  console.log(jobDetails.experienceLevels, candidateProfile.experience_level);

  // 2. Check work_model
  if (
    jobDetails.workModels.some(
      (model) =>
        model.value === candidateProfile.work_model ||
        model.value === "ANY" ||
        candidateProfile.work_model === "ANY"
    )
  ) {
    score += fieldPoints;
  }

  // 3. Check work_permit
  if (
    jobDetails.workPermits.some(
      (permit) =>
        permit.value === candidateProfile.work_permit ||
        permit.value === "ANY" ||
        candidateProfile.work_permit === "ANY"
    )
  ) {
    score += fieldPoints;
  }

  // 4. Check payment_type & bill rate
  if (jobDetails.paymentType === candidateProfile.payment_type) {
    score += fieldPoints;
    if (jobDetails.paymentType && candidateProfile.bill_rate) {
      if (
        isBillRateInRange(candidateProfile.bill_rate, jobDetails.paymentRanges)
      ) {
        score += fieldPoints;
      }
    }
  }

  // 5. Check availability_date
  if (
    jobDetails.startDates.some(
      (startDate) =>
        startDate.value === candidateProfile.availability_date ||
        startDate.value === "ANY" ||
        candidateProfile.availability_date === "ANY"
    )
  ) {
    score += fieldPoints;
  }

  // 6. Check Engagement Type
  if (jobDetails.customerEngagementTypes && candidateProfile.engagement_type) {
    if (
      jobDetails.customerEngagementTypes.some(
        (x) =>
          x.value === candidateProfile.engagement_type ||
          x.value === "ANY" ||
          candidateProfile.engagement_type === "ANY"
      )
    ) {
      score += fieldPoints;
    }
  }
  return Math.ceil(score) > 50 ? 50 : Math.ceil(score);
}

// Parse the range value (e.g., "1-10", "100000-150000", "Above - $100") and check if bill_rate fits
function isBillRateInRange(
  bill_rate: number,
  paymentRanges: TLabelValuePair[]
): boolean {
  for (const option of paymentRanges) {
    const range = option.value.split("-");
    // If the value is "Above" (e.g. "100,", "350000"), handle it separately
    if (range.length === 1) {
      const min = parseInt(range[0], 10);
      if (bill_rate > min) {
        return true;
      }
    } else {
      const min = parseInt(range[0], 10);
      const max = parseInt(range[1], 10);
      if (bill_rate >= min && bill_rate <= max) {
        return true;
      }
    }
  }
  return false;
}

export default calculatePrescreeningScore;
