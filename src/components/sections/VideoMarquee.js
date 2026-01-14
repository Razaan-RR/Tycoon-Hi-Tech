import { gsap, Power2, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function homePageAnimation(scope) {
  const slidesm = scope.querySelector('.slidesm')
  const vdodiv = scope.querySelector('.vdodiv')
  const lft = scope.querySelectorAll('.lft .elem')
  const rgt = scope.querySelectorAll('.rgt .elem')

  gsap.set(slidesm, { scale: 5 })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scope,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 2,
    },
  })

  tl.to(
    vdodiv,
    {
      '--clip': '0%',
      ease: Power2,
    },
    'rzn'
  )
    .to(
      slidesm,
      {
        scale: 1,
        ease: Power2,
      },
      'rzn'
    )
    .to(
      lft,
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      'rz'
    )
    .to(
      rgt,
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      'rz'
    )
}
