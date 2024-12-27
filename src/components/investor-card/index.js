"use client";

import { Fragment, useEffect, useState } from "react";
import CommonCard from "../common-card";
import { FaBitcoin } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { createPitchApplicationAction } from "@/actions";

function InvestorCard({ pitchItem, profileInfo, pitchApplications }) {
  const [shortenedPitch, setShortenedPitch] = useState("");
  const [showInvestorDialog, setShowInvestorDialog] = useState(false);
  console.log(profileInfo?.investorInfo, "pitchItem");

  useEffect(() => {
    const truncateText = (text, maxLines) => {
      const lineHeight = 1.2; // Line height in rem or em
      const maxHeight = maxLines * lineHeight;

      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.opacity = "0";
      div.style.lineHeight = `${lineHeight}em`;
      div.style.width = "250px"; // assuming a fixed width for the card content
      div.innerHTML = text;
      document.body.appendChild(div);

      const totalHeight =
        div.clientHeight / parseFloat(getComputedStyle(div).lineHeight);
      const truncatedText =
        totalHeight > maxLines
          ? div.innerText
              .split(" ")
              .slice(0, maxLines * 10)
              .join(" ") + "..."
          : text;

      document.body.removeChild(div);

      return truncatedText;
    };

    const shortened = truncateText(pitchItem?.pitch || "", 4);
    setShortenedPitch(shortened);
  }, [pitchItem]);

  async function handlejobApply() {
    await createPitchApplicationAction(
      {
        pitcherUserID: pitchItem?.pitcherId,
        name: profileInfo?.investorInfo?.name,
        email: profileInfo?.email,
        investorUserID: profileInfo?.userId,
        status: ["Invested"],
        pitchID: pitchItem?._id,
        pitchAppliedDate: new Date().toLocaleDateString(),
      },
      "/pitching"
    );
    setShowInvestorDialog(false);
  }
  return (
    <Fragment>
      <Dialog open={showInvestorDialog} onOpenChange={setShowInvestorDialog}>
        <CommonCard
          icon={<FaBitcoin className="w-6 h-6 align-middle justify-center" />}
          title={pitchItem?.businessName}
          type={pitchItem?.type}
          pitch={shortenedPitch}
          footerContent={
            <Button
              onClick={() => setShowInvestorDialog(true)}
              className="flex h-11 items-center justify-center px-5"
            >
              View Details
            </Button>
          }
        />
        <DialogContent className="p-6 max-w-4xl">
          {/* Increase dialog width */}
          <DialogHeader className="px-0">
            <DialogTitle className="text-4xl capitalize text-center">
              {pitchItem?.businessName}
            </DialogTitle>
          </DialogHeader>
          <div className="text-2xl dark:text-white  font-medium text-gray-600">
            Business Type: {pitchItem?.type}
          </div>
          <div className="text-2xl dark:text-white  font-medium text-gray-600">
            <span className="text-xl dark:text-white  ml-4 font-normal text-gray-500">
              Business Location: {pitchItem?.location}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <p className="justify-center items-center">{pitchItem?.pitch}</p>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            {/* Align buttons to the right */}
            <Button
              onClick={handlejobApply}
              disabled={
                pitchApplications.findIndex(
                  (item) => item.pitchID === pitchItem?._id
                ) > 1
                  ? true
                  : false
              }
              className=" disabled:opacity-65 flex h-11 items-center justify-center px-5"
            >
              {pitchApplications.findIndex(
                (item) => item.pitchID === pitchItem?._id
              ) > -1
                ? "Invested"
                : "Invest"}
            </Button>
            <Button
              className="flex h-11 items-center justify-center px-5"
              onClick={() => setShowInvestorDialog(false)}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default InvestorCard;
