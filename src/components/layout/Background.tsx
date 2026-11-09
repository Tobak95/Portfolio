// Fixed background behind every page: a faint grid and three glowing colour blobs
const Background = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-35" />
      <div className="blob -top-[18vmax] -right-[10vmax] h-[42vmax] w-[42vmax] bg-lime opacity-20" />
      <div className="blob top-[30vh] -left-[14vmax] h-[30vmax] w-[30vmax] bg-violet opacity-35 [animation-duration:22s]" />
      <div className="blob right-[20vw] -bottom-[10vmax] h-[24vmax] w-[24vmax] bg-coral opacity-25 [animation-duration:26s]" />
    </div>
  );
};

export default Background;
