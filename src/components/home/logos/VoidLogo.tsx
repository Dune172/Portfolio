// The VOID logo. The source PNG is already tinted to stone-500 (#8a8578)
// with a transparent background, so no filter is applied here.
export function VoidLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/The Void(2).png"
      alt=""
      aria-hidden="true"
      className="block h-full w-auto"
    />
  );
}
