"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import CommonForm from "../common-form";
import {
  initialInvestorsFormData,
  initialPitcherFormData,
  InvestorOnboardFormControls,
  pitcherOnboardFormControls,
} from "@/utils";
import { createProfileAction } from "@/actions";
import { useUser } from "@clerk/nextjs";

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("pitcher");
  const [investorFormData, setInvestorFormData] = useState(
    initialInvestorsFormData
  );
  const [pitcherFormData, setPitcherFormData] = useState(
    initialPitcherFormData
  );
  function handleTabChange(value) {
    setCurrentTab(value);
  }
  const currentAuthUser = useUser();
  const { user } = currentAuthUser;

  function handleInvestorFormValid() {
    return (
      investorFormData && investorFormData.name.trim() !== "",
      investorFormData && investorFormData.companyName.trim() !== "",
      investorFormData && investorFormData.companyRole.trim() !== "",
      investorFormData && investorFormData.networth.trim() !== ""
    );
  }
  function handlePitcherFormValid() {
    return Object.keys(pitcherFormData).every(
      (key) => pitcherFormData[key].trim() !== ""
    );
  }

  async function createProfile() {
    const data =
      currentTab === "pitcher"
        ? {
            pitcherInfo: pitcherFormData,
            role: "pitcher",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          }
        : {
            investorInfo: investorFormData,
            role: "investor",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          };

    await createProfileAction(data, "/onboard");
  }

  return (
    <div>
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 px-4 pt-24">
            <div className="flex flex-col  justify-between">
              <h1 className="text-4xl font-bold mb-2 tracking-tight dark:text-white text-gray-900">
                Welcome to Pitch hub
              </h1>
              <p className="text-balance tracking-tight dark:text-white text-gray-800">
                Please onboard to continue ur journey
              </p>
            </div>
            <TabsList>
              <TabsTrigger value="pitcher">Pitcher</TabsTrigger>
              <TabsTrigger value="investor">Investors</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="pitcher">
          <CommonForm
            formControls={pitcherOnboardFormControls}
            buttonText={"Onboard as an pitcher"}
            formData={pitcherFormData}
            setFormData={setPitcherFormData}
            isBtnDisabled={!handlePitcherFormValid()}
            action={createProfile}
          />
        </TabsContent>
        <TabsContent value="investor">
          <CommonForm
            formControls={InvestorOnboardFormControls}
            buttonText={"Onboard as an investor"}
            formData={investorFormData}
            setFormData={setInvestorFormData}
            isBtnDisabled={!handleInvestorFormValid()}
            action={createProfile}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
