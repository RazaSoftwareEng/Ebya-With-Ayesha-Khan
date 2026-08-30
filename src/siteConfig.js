// Update these with the real business details before going live.
export const site = {
  name: 'Ebay With Ayesha Khan',
  phoneDisplay: '+92 300 1234567',
  phoneDial: '+923001234567',
  whatsappNumber: '923001234567',
  email: 'info@ebaywithayeshakhan.com',
  address: 'Model Town, Lahore, Pakistan',
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
}

export const whatsappLink = (message = "Hi! I'm interested in your eBay & Dropshipping courses.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
