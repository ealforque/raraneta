import { onMounted, onUnmounted, type Ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let gsapReady = false

const ensureGsap = () => {
  if (!gsapReady) {
    gsap.registerPlugin(ScrollTrigger)
    gsapReady = true
  }
}

export const usePageMotion = (root: Ref<HTMLElement | null>) => {
  onMounted(() => {
    if (!root.value) {
      return
    }

    ensureGsap()

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-page-hero]').forEach((hero) => {
        const heroText = hero.querySelectorAll<HTMLElement>('[data-hero-el]')
        const graphics = hero.querySelectorAll<HTMLElement>('[data-hero-graphic]')
        const heroBackgrounds = hero.querySelectorAll<HTMLElement>('[data-hero-bg]')
        const scanLines = hero.querySelectorAll<HTMLElement>('[data-hero-scan]')
        const heroLight = hero.querySelector<HTMLElement>('.hero-light')

        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

        heroTimeline
          .fromTo(
            heroBackgrounds,
            {
              scale: 1.08,
              yPercent: 3,
              opacity: 0,
            },
            {
              scale: 1,
              yPercent: 0,
              opacity: 1,
              duration: 1.7,
              stagger: 0.12,
            },
            0,
          )
          .fromTo(
            heroText,
            {
              opacity: 0,
              y: 42,
              filter: 'blur(14px)',
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.1,
              stagger: 0.14,
            },
            0.15,
          )
          .fromTo(
            graphics,
            {
              opacity: 0,
              scale: 0.9,
              y: 20,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.15,
              stagger: 0.1,
              ease: 'power2.out',
            },
            0.22,
          )

        if (heroLight) {
          gsap.to(heroLight, {
            xPercent: 38,
            duration: 2.2,
            repeat: -1,
            repeatDelay: 0.7,
            ease: 'sine.inOut',
            yoyo: true,
          })
        }

        scanLines.forEach((line, index) => {
          gsap.to(line, {
            x: index % 2 === 0 ? 16 : -16,
            duration: 4.6 + index * 0.45,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })

        graphics.forEach((graphic, index) => {
          gsap.to(graphic, {
            y: -10,
            duration: 3 + index * 0.28,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-float]').forEach((el, index) => {
        gsap.to(el, {
          y: -10,
          duration: 3.5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const shift = Number(el.dataset.parallax ?? 15)

        gsap.to(el, {
          yPercent: shift,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('[data-parallax-root]') ?? el,
            scrub: true,
            start: 'top bottom',
            end: 'bottom top',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 28,
            opacity: 0,
            filter: 'blur(8px)',
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((wrapper) => {
        const items = wrapper.querySelectorAll('.stagger-item')

        gsap.fromTo(
          items,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 83%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, root.value)

    onUnmounted(() => {
      context.revert()
    })
  })
}
