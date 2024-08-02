import React from "react";
import { useRouter } from "next/router";

const SkeletonLoader = () => {
    const router = useRouter()

    const changeHeight = router.path === '/' ? 'lg:h-72' : 'lg:h-28'
    
  return (
    <>
      <div class="flex flex-col lg:flex-row bg-neutral-300 w-full  animate-pulse rounded-xl p-3 gap-4">
        <div class={` bg-neutral-400/50 w-full h-40 ${changeHeight} animate-pulse rounded-md`}>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoader;


