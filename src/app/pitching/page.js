import {
  createFilterCategoryAction,
  fetchJobsForInvestorAction,
  fetchJobsForPitcherAction,
  fetchPitchApplicationsForInvestor,
  fetchPitchApplicationsForPitcher,
  fetchProfileAction,
} from "@/actions";
import PitchListing from "@/components/pitch-listing";
import { currentUser } from "@clerk/nextjs";

async function PitchingPage() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  const pitchList =
    profileInfo?.role === "investor"
      ? await fetchJobsForInvestorAction()
      : await fetchJobsForPitcherAction(user?.id);

  const getPitchApplicationList =
    profileInfo?.role === "investor"
      ? await fetchPitchApplicationsForInvestor(user?.id)
      : await fetchPitchApplicationsForPitcher(user?.id);

  const fetchFilterCategories = await createFilterCategoryAction();
  return (
    <div>
      <PitchListing
        user={JSON.parse(JSON.stringify(user))}
        profileInfo={profileInfo}
        pitchList={pitchList}
        pitchApplications={getPitchApplicationList}
        filterCategory={fetchFilterCategories}
      />
    </div>
  );
}

export default PitchingPage;
