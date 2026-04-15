// Joyce University logo. The source PNG is already tinted to stone-500 (#8a8578)
// with a transparent background, so no filter is applied here.
export function JoyceLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/Joyce-Logo.png"
      alt=""
      aria-hidden="true"
      className="block h-full w-auto"
    />
  );
}
