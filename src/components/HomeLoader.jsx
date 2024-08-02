
const HomeSkeleton = ()=>{
    return(
        <>
        <div class="flex flex-col lg:flex-row bg-neutral-300 w-full  animate-pulse rounded-xl p-3 gap-4">
        <div class={` bg-neutral-400/50 w-full h-72 animate-pulse rounded-md`}>
        <div class={` bg-neutral-400/50 w-full h-72 animate-pulse rounded-md`}>
        </div>
        </div>
      </div>
        </>
    )
}

export default HomeSkeleton