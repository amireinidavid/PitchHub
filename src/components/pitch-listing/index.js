"use client";

import React, { useEffect, useState } from "react";
import PostPitchPage from "../post-pitch";
import InvestorCard from "../investor-card";
import PitcherCard from "../pitcher-card";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Label } from "@radix-ui/react-menubar";
import { filterMenuDataArray, formUrlQuery } from "@/utils";

function PitchListing({
  user,
  filterCategory,
  profileInfo,
  pitchApplications,
  pitchList,
}) {
  const [filterParams, setFilterParams] = useState({});
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleFilter(getSectionID, getCurrentOption) {
    let cpyFilterParams = { ...filterParams };
    const indexOfCurrentSection =
      Object.keys(cpyFilterParams).indexOf(getSectionID);
    if (indexOfCurrentSection === -1) {
      cpyFilterParams = {
        ...cpyFilterParams,
        [getSectionID]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilterParams[getSectionID].indexOf(getCurrentOption);
      if (indexOfCurrentOption === -1)
        cpyFilterParams[getSectionID].push(getCurrentOption);
      else cpyFilterParams[getSectionID].splice(indexOfCurrentOption, 1);
    }
    setFilterParams(cpyFilterParams);
    sessionStorage.setItem("filterParams", JSON.stringify(cpyFilterParams));
    console.log("Updated filterParams:", cpyFilterParams);
  }

  useEffect(() => {
    const savedFilterParams = sessionStorage.getItem("filterParams");
    if (savedFilterParams) {
      setFilterParams(JSON.parse(savedFilterParams));
      console.log(
        "Loaded filterParams from sessionStorage:",
        JSON.parse(savedFilterParams)
      );
    }
  }, []);

  useEffect(() => {
    if (filterParams && Object.keys(filterParams).length > 0) {
      let url = "";
      url = formUrlQuery({
        params: searchParams.toString(),
        dataToAdd: filterParams,
      });

      router.push(url, { scroll: false });
    }
  }, [filterParams, searchParams]);

  const filterMenus = filterMenuDataArray.map((item) => ({
    id: item.id,
    name: item.label,
    options: [...new Set(filterCategory.map((listItem) => listItem[item.id]))],
  }));

  const filteredPitchList = pitchList.filter((pitchItem) => {
    // If no filters are applied, return true for all pitch items
    if (Object.keys(filterParams).length === 0) {
      return true;
    }
    // Otherwise, check if the pitch item matches the filter criteria
    return Object.keys(filterParams).every((filterKey) => {
      if (filterParams[filterKey].length === 0) return true;
      return filterParams[filterKey].includes(pitchItem[filterKey]);
    });
  });

  console.log("Filter Params:", filterParams);
  console.log("Filtered Pitch List:", filteredPitchList);
  console.log("Original Pitch List:", pitchList);

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-6 pt-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-500 dark:text-blue-400">
            {profileInfo?.role === "investor"
              ? "Explore all Pitches"
              : "Pitch Dashboard"}
          </h1>
          <div className="flex items-center space-x-4">
            {profileInfo?.role === "investor" ? (
              <Menubar>
                {filterMenus.map((filterMenu) => (
                  <MenubarMenu key={filterMenu.id}>
                    <MenubarTrigger>{filterMenu.name}</MenubarTrigger>
                    <MenubarContent>
                      {filterMenu.options.map((option, optionIdx) => (
                        <MenubarItem
                          key={optionIdx}
                          className="flex items-center"
                          onClick={() => handleFilter(filterMenu.id, option)}
                        >
                          <div
                            className={`h-4 w-4 dark:border-white border rounded border-gray-900 ${
                              filterParams &&
                              Object.keys(filterParams).length > 0 &&
                              filterParams[filterMenu.id] &&
                              filterParams[filterMenu.id].indexOf(option) > -1
                                ? "bg-black dark:bg-white"
                                : ""
                            }`}
                          />

                          <Label className="ml-3 dark:text-white cursor-pointer text-sm text-gray-600">
                            {option}
                          </Label>
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  </MenubarMenu>
                ))}
              </Menubar>
            ) : (
              <PostPitchPage
                profileInfo={profileInfo}
                user={user}
                pitchList={pitchList}
              />
            )}
          </div>
        </div>
        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-4">
              <div className="container mx-auto p-0 space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredPitchList && filteredPitchList.length > 0 ? (
                    filteredPitchList.map((pitchItem) =>
                      profileInfo?.role === "investor" ? (
                        <InvestorCard
                          key={pitchItem._id}
                          profileInfo={profileInfo}
                          pitchItem={pitchItem}
                          pitchApplications={pitchApplications}
                        />
                      ) : (
                        <PitcherCard
                          key={pitchItem._id}
                          profileInfo={profileInfo}
                          pitchItem={pitchItem}
                          pitchApplications={pitchApplications}
                        />
                      )
                    )
                  ) : (
                    <p>No pitches is on this website</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PitchListing;
