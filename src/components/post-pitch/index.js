"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import CommonForm from "../common-form";
import { initialPostNewJobFormData, postNewPitchFormControls } from "@/utils";
import { postNewJobAction } from "@/actions";
import { useToast } from "../ui/use-toast";

function PostPitchPage({ profileInfo, user, pitchList }) {
  const [showPitchDialog, setShowPitchDialog] = useState(false);
  const [pitchFormData, setPitchFormData] = useState({
    ...initialPostNewJobFormData,
  });

  const { toast } = useToast();

  function handlePostNewBtnValid() {
    return Object.keys(pitchFormData).every(
      (control) => pitchFormData[control].trim() !== ""
    );
  }

  console.log(profileInfo?.memberShipType, "pitch");

  async function createNewPitch() {
    if (!profileInfo?.isPremiumUser && pitchList.length >= 2) {
      toast({
        variant: "destructive",
        title: "You can post max 2 pitches.",
        description: "Please opt for membership to post more pitch",
      });
      return;
    }
    if (profileInfo?.memberShipType === "gold" && pitchList.length >= 5) {
      toast({
        variant: "destructive",
        title: "You can post max 5 pitches.",
        description: "Please opt for higher membership to post more pitch",
      });
      return;
    }
    if (profileInfo?.memberShipType === "bronze" && pitchList.length >= 8) {
      toast({
        variant: "destructive",
        title: "You can post max 8 pitches.",
        description: "Please opt for higher membership to post more pitch",
      });
      return;
    }
    setShowPitchDialog(false);

    await postNewJobAction(
      {
        ...pitchFormData,
        pitcherId: user?.id,
        investors: [],
      },
      "/pitching"
    );

    setPitchFormData({
      ...initialPostNewJobFormData,
    });
    setPitchFormData(false);
  }
  return (
    <div>
      <Button
        onClick={() => setShowPitchDialog(true)}
        className="disabled:opacity-60 h-11 items-center flex justify-center px-5"
      >
        Write a pitch
      </Button>
      <Dialog
        open={showPitchDialog}
        onOpenChange={() => setShowPitchDialog(false)}
      >
        <DialogContent className="sm:max-w-screen-md h-[600px] overflow-auto">
          <DialogHeader>
            <DialogTitle>Post a pitch</DialogTitle>
            <div className="grid gap-4 py-4">
              <CommonForm
                buttonText={"Add new"}
                formData={pitchFormData}
                setFormData={setPitchFormData}
                formControls={postNewPitchFormControls}
                isBtnDisabled={!handlePostNewBtnValid()}
                action={createNewPitch}
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PostPitchPage;
