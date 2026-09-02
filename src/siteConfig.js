// Update these with the real business details before going live.
export const site = {
  name: 'Ayesha Khan Official',
  phoneDisplay: '+92 300 8433239',
  phoneDial: '+923008433239',
  whatsappNumber: '923008433239',
  email: 'ayeshakhanebay@gmail.com',
  address: 'House No. 2, Ravi Block, Allama Iqbal Town, Lahore',
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
}

export const whatsappLink = (message = "Hi! I'm interested in your eBay & Dropshipping courses.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
