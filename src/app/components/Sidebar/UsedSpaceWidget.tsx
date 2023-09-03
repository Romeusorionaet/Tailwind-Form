export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-violet-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700 dark:text-white">
          used space
        </span>
        <p className="text-sm/5 text-violet-500 dark:text-white">
          Your team has used 88% of your avaliable space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-950" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 hover:text-violet-700 dark:text-zinc-300 dark:hover:text-white"
        >
          Dismiss
        </button>

        <button className="text-sm font-medium text-violet-700 hover:text-violet-900 dark:text-zinc-300 dark:hover:text-white">
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
