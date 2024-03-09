"use client";

import { PageLoaderIcon } from "@/assets";
import React, { useEffect, useState } from "react";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <PageLoaderIcon />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default PageRender;
