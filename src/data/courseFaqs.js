import { site } from '../siteConfig'

export function buildCourseFaqs(course) {
  return [
    {
      q: `Who is the ${course.title} course for?`,
      a: course.whoItsFor,
    },
    {
      q: `Do I need any experience to join ${course.title}?`,
      a: `No. The course is designed for "${course.level}" learners and your mentor guides you step by step, so you can join without prior experience.`,
    },
    {
      q: `How long is ${course.title} and is it online or in-person?`,
      a: `Duration: ${course.duration}. Format: ${course.mode}. Classes are run by our team in Lahore, Pakistan — contact us for the next batch dates.`,
    },
    {
      q: `What will I learn in ${course.title}?`,
      a: `Topics include ${course.curriculum.slice(0, 5).join('; ')}, and more. See the full curriculum on this page.`,
    },
    {
      q: `How do I enroll in ${course.title}?`,
      a: `Click "Enroll Now" to fill in the enrollment form, or message us on WhatsApp at ${site.phoneDisplay}. Our team will confirm batch dates and fees with you.`,
    },
  ]
}
