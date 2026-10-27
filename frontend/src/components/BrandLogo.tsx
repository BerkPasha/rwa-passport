// The official horizontal RWA Passport lockup, version for dark backgrounds (brand board "B · Mühür"):
// white wordmark, light-blue radial marks. Cut from the board at native resolution, with only the board's
// navy card made transparent (public/brand/). Used by the public website, the demo and the application
// shell, all of which place it on the ink background. Height comes from className; width follows the
// artwork's own proportions.
export function BrandLogo({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <img src="/brand/rwa-passport-lockup-dark.png" alt="RWA Passport" width={585} height={151} draggable={false}
      className={`block ${className}`} />
  )
}
