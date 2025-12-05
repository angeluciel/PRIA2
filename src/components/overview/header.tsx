export default function StatusHeader() {
  return (
    <header className='flex justify-between items-center py-4 pr-20 pl-10 w-[80dvw] border-b border-zinc-700'>
      <div className='flex flex-col gap-3'>
        <h1 className='font-extrabold text-3xl text-zinc-200'>
          Backup Dashboard
        </h1>
        <h2 className='text-lg font-semibold text-zinc-500'>
          Monitor and Manage the backup of your clients
        </h2>
      </div>
      <div className='flex gap-8'>
        {/* Successs */}
        <div className='flex flex-col items-center'>
          <h3 className='text-foreground-success font-bold text-lg'>2</h3>
          <span className='text-zinc-600'>Success</span>
        </div>
        {/* Warning */}
        <div className='flex flex-col items-center'>
          <h3 className='text-foreground-warning font-bold text-lg'>2</h3>
          <span className='text-zinc-600'>Warning</span>
        </div>
        {/* Error */}
        <div className='flex flex-col items-center'>
          <h3 className='text-foreground-error font-bold text-lg'>2</h3>
          <span className='text-zinc-600'>Error</span>
        </div>
      </div>
    </header>
  );
}
