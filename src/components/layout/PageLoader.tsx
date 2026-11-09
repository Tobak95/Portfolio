// Shown for a split second while a page's code is loading
const PageLoader = () => {
  return (
    <div className="grid h-screen place-items-center">
      <span className="grid h-12 w-12 animate-spin place-items-center rounded-xl bg-lime font-mono text-sm text-ink">
        AT
      </span>
    </div>
  );
};

export default PageLoader;
