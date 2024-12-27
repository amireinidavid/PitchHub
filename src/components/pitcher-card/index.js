"use client";

import { Send } from "lucide-react";
import CommonCard from "../common-card";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import PitchAplicants from "../pitch-applicants";

function PitcherCard({ pitchItem, pitchApplications }) {
  const [shortenedPitch, setShortenedPitch] = useState("");
  const [showInvestorsDrawer, setShowInvestorsDrawer] = useState(false);
  const [currentInvestorDetails, setCurrentInvestorDetails] = useState(null);
  const [showCurrentInvestorDetailsModal, setShowCurrentInvestorDetailsModal] =
    useState(false);

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

  return (
    <div>
      <CommonCard
        icon={<Send className="text-white text-3xl" />}
        title={pitchItem?.businessName}
        type={pitchItem?.type}
        pitch={shortenedPitch}
        footerContent={
          <Button
            onClick={() => setShowInvestorsDrawer(true)}
            disabled={
              pitchApplications.filter(
                (item) => item.pitchID === pitchItem?._id
              ).length === 0
            }
            className="flex h-11 items-center justify-center px-5"
          >
            {
              pitchApplications.filter(
                (item) => item.pitchID === pitchItem?._id
              ).length
            }{" "}
            Investors
          </Button>
        }
      />
      <PitchAplicants
        showInvestorsDrawer={showInvestorsDrawer}
        setShowInvestorsDrawer={setShowInvestorsDrawer}
        showCurrentInvestorDetailsModal={showCurrentInvestorDetailsModal}
        setShowCurrentInvestorDetailsModal={setShowCurrentInvestorDetailsModal}
        currentInvestorDetails={currentInvestorDetails}
        setCurrentInvestorDetails={setCurrentInvestorDetails}
        pitchItem={pitchItem}
        pitchApplications={pitchApplications.filter(
          (pitchApplicatantsItem) =>
            pitchApplicatantsItem.pitchID === pitchItem?._id
        )}
      />
    </div>
  );
}

export default PitcherCard;
