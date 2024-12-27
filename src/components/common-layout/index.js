import { currentUser } from "@clerk/nextjs";
import Header from "../header";
import { fetchProfileAction } from "@/actions";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import StickyHeader from "../sticky-header";
import Footer from "../footers";

async function CommonLayout({ children, ...props }) {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <NextThemesProvider {...props}>
      <div className="w-full h-full min-h-screen">
        <StickyHeader
          profileInfo={profileInfo}
          user={JSON.parse(JSON.stringify(user))}
        />
        <main className="w-full h-full pt-16">{children}</main>
        <Footer />
      </div>
    </NextThemesProvider>
  );
}

export default CommonLayout;
