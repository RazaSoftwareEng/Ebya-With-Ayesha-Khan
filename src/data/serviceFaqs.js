import { site } from '../siteConfig'

export function buildServiceFaqs(service) {
  return [
    {
      q: `Who is ${service.title} for?`,
      a: service.whoItsFor,
    },
    {
      q: `What's included in ${service.title}?`,
      a: `${service.included.slice(0, 4).join('; ')}, and more. See the full list of what's included on this page.`,
    },
    {
      q: `How much does ${service.title} cost?`,
      a: `Pricing depends on your current setup and goals. Message us on WhatsApp at ${site.phoneDisplay} with a few details and we'll share a clear quote — no obligation.`,
    },
    {
      q: `Do you offer this service online or in-person?`,
      a: `Both. We work with clients in Lahore in-person and with sellers across Pakistan and internationally online — the process is the same either way.`,
    },
    {
      q: `How do I get started with ${service.title}?`,
      a: `Click "Get a Free Consultation" on this page or message us on WhatsApp. We'll discuss your goals and recommend the right starting point.`,
    },
  ]
}
