// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    setTimeout(() => {
      const loader = document.querySelector(".loader")
      loader.classList.add("fade-out")
  
      setTimeout(() => {
        loader.style.display = "none"
  
        // Animate elements after preloader
        const revealTexts = document.querySelectorAll(".reveal-text")
        revealTexts.forEach((text, index) => {
          text.style.setProperty("--index", index)
        })
      }, 500)
    }, 1500)
  
    // Custom cursor
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
  
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px"
        cursorFollower.style.top = e.clientY + "px"
      }, 100)
    })
  
    document.addEventListener("mousedown", () => {
      cursor.classList.add("active")
      cursorFollower.classList.add("active")
    })
  
    document.addEventListener("mouseup", () => {
      cursor.classList.remove("active")
      cursorFollower.classList.remove("active")
    })
  
    // Add active class to links and buttons for cursor effect
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("active")
        cursorFollower.classList.add("active")
      })
  
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("active")
        cursorFollower.classList.remove("active")
      })
    })
  
    // Header scroll effect
    const header = document.querySelector(".header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const nav = document.querySelector(".nav")
  
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      nav.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active")
        nav.classList.remove("active")
      })
    })
  
    // Hero slider
    const heroSlides = document.querySelectorAll(".hero-slide")
    const heroDots = document.querySelectorAll(".hero-dot")
    const prevArrow = document.querySelector(".hero-arrow.prev")
    const nextArrow = document.querySelector(".hero-arrow.next")
    let currentSlide = 0
    let slideInterval
  
    function showSlide(index) {
      // Hide all slides
      heroSlides.forEach((slide) => slide.classList.remove("active"))
      // Remove active class from all dots
      heroDots.forEach((dot) => dot.classList.remove("active"))
  
      // Show the selected slide
      heroSlides[index].classList.add("active")
      heroDots[index].classList.add("active")
  
      currentSlide = index
    }
  
    // Add click event to dots
    heroDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
        resetSlideInterval()
      })
    })
  
    // Add click event to arrows
    if (prevArrow && nextArrow) {
      prevArrow.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length
        showSlide(currentSlide)
        resetSlideInterval()
      })
  
      nextArrow.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % heroSlides.length
        showSlide(currentSlide)
        resetSlideInterval()
      })
    }
  
    // Auto slide
    function startSlideInterval() {
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % heroSlides.length
        showSlide(currentSlide)
      }, 5000)
    }
  
    function resetSlideInterval() {
      clearInterval(slideInterval)
      startSlideInterval()
    }
  
    // Start the slideshow
    if (heroSlides.length > 0) {
      startSlideInterval()
    }
  
    // Menu tabs
    const menuTabs = document.querySelectorAll(".menu-tab")
    const menuCategories = document.querySelectorAll(".menu-category")
  
    menuTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Remove active class from all tabs
        menuTabs.forEach((tab) => tab.classList.remove("active"))
        // Add active class to clicked tab
        this.classList.add("active")
  
        // Hide all menu categories
        menuCategories.forEach((category) => category.classList.remove("active"))
  
        // Show the selected category
        const target = this.getAttribute("data-target")
        document.getElementById(target).classList.add("active")
      })
    })
  
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll(".testimonial-slide")
    const testimonialDots = document.querySelectorAll(".testimonial-dot")
    let currentTestimonial = 0
    let testimonialInterval
  
    function showTestimonial(index) {
      // Hide all testimonials
      testimonialSlides.forEach((slide) => slide.classList.remove("active"))
      // Remove active class from all dots
      testimonialDots.forEach((dot) => dot.classList.remove("active"))
  
      // Show the selected testimonial
      testimonialSlides[index].classList.add("active")
      testimonialDots[index].classList.add("active")
  
      currentTestimonial = index
    }
  
    // Add click event to dots
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index)
        resetTestimonialInterval()
      })
    })
  
    // Auto slide testimonials
    function startTestimonialInterval() {
      testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length
        showTestimonial(currentTestimonial)
      }, 6000)
    }
  
    function resetTestimonialInterval() {
      clearInterval(testimonialInterval)
      startTestimonialInterval()
    }
  
    // Start the testimonial slideshow
    if (testimonialSlides.length > 0) {
      startTestimonialInterval()
    }
  
    // Back to top button
    const backToTopBtn = document.getElementById("backToTop")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active")
      } else {
        backToTopBtn.classList.remove("active")
      }
    })
  
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Cookie consent
    const cookieConsent = document.getElementById("cookieConsent")
    const cookieAccept = document.getElementById("cookieAccept")
    const cookieReject = document.getElementById("cookieReject")
  
    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
      setTimeout(() => {
        cookieConsent.classList.add("show")
      }, 2000)
    }
  
    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true")
      cookieConsent.classList.remove("show")
    })
  
    cookieReject.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "false")
      cookieConsent.classList.remove("show")
    })
  
    // Form submission
    const reservationForm = document.getElementById("reservationForm")
  
    if (reservationForm) {
      reservationForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent
  
        submitBtn.textContent = "Envoi en cours..."
        submitBtn.disabled = true
  
        setTimeout(() => {
          // Show success message
          const formMessage = document.createElement("div")
          formMessage.className = "form-message success"
          formMessage.textContent =
            "Votre réservation a été envoyée avec succès. Nous vous contacterons bientôt pour confirmer."
  
          this.appendChild(formMessage)
  
          // Reset form
          this.reset()
  
          // Reset button
          submitBtn.textContent = originalText
          submitBtn.disabled = false
  
          // Remove message after 5 seconds
          setTimeout(() => {
            formMessage.remove()
          }, 5000)
        }, 1500)
      })
    }
  
    // Contact form
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]')
        const originalText = submitBtn.textContent
  
        submitBtn.textContent = "Envoi en cours..."
        submitBtn.disabled = true
  
        setTimeout(() => {
          // Show success message
          const formMessage = document.createElement("div")
          formMessage.className = "form-message success"
          formMessage.textContent =
            "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais."
  
          this.appendChild(formMessage)
  
          // Reset form
          this.reset()
  
          // Reset button
          submitBtn.textContent = originalText
          submitBtn.disabled = false
  
          // Remove message after 5 seconds
          setTimeout(() => {
            formMessage.remove()
          }, 5000)
        }, 1500)
      })
    }
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const target = document.querySelector(this.getAttribute("href"))
  
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Animate elements on scroll with Intersection Observer
    const animateElements = document.querySelectorAll(
      ".feature, .menu-item, .testimonial-content, .gallery-item, .contact-item",
    )
  
    const animateOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }
  
    const animateObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
          observer.unobserve(entry.target)
        }
      })
    }, animateOptions)
  
    animateElements.forEach((element) => {
      element.classList.add("animate-on-scroll")
      animateObserver.observe(element)
    })
  
    // Add animation classes
    document.head.insertAdjacentHTML(
      "beforeend",
      `
          <style>
              .animate-on-scroll {
                  opacity: 0;
                  transform: translateY(30px);
                  transition: opacity 0.6s ease, transform 0.6s ease;
              }
              
              .animate-on-scroll.animate {
                  opacity: 1;
                  transform: translateY(0);
              }
              
              .feature.animate-on-scroll:nth-child(2) {
                  transition-delay: 0.2s;
              }
              
              .feature.animate-on-scroll:nth-child(3) {
                  transition-delay: 0.4s;
              }
              
              .menu-item.animate-on-scroll:nth-child(2) {
                  transition-delay: 0.2s;
              }
              
              .menu-item.animate-on-scroll:nth-child(3) {
                  transition-delay: 0.4s;
              }
              
              .menu-item.animate-on-scroll:nth-child(4) {
                  transition-delay: 0.6s;
              }
              
              .gallery-item.animate-on-scroll:nth-child(2) {
                  transition-delay: 0.2s;
              }
              
              .gallery-item.animate-on-scroll:nth-child(3) {
                  transition-delay: 0.4s;
              }
              
              .gallery-item.animate-on-scroll:nth-child(4) {
                  transition-delay: 0.2s;
              }
              
              .gallery-item.animate-on-scroll:nth-child(5) {
                  transition-delay: 0.4s;
              }
              
              .gallery-item.animate-on-scroll:nth-child(6) {
                  transition-delay: 0.6s;
              }
              
              .contact-item.animate-on-scroll:nth-child(2) {
                  transition-delay: 0.2s;
              }
              
              .contact-item.animate-on-scroll:nth-child(3) {
                  transition-delay: 0.4s;
              }
              
              .contact-item.animate-on-scroll:nth-child(4) {
                  transition-delay: 0.6s;
              }
          </style>
      `,
    )
  })
  
  