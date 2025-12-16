import Link from "next/link";

export default function signup() {
  return (
    <div className='flex-center  w-dvw min-h-dvh bg-background text-foreground'>
      <Link
        href={`/overview/backup`}
        className='py-2 px-3 rounded-lg border border-foreground hover:bg-foreground/10'
      >
        Dashboard
      </Link>
    </div>
  );
}
