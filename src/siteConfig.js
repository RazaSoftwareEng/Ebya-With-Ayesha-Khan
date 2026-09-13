// Update these with the real business details before going live.
export const siteUrl = 'https://ayeshakhanofficial.com'

export const site = {
  name: 'Ayesha Khan Official',
  phoneDisplay: '+92 300 8433239',
  phoneDial: '+923008433239',
  whatsappNumber: '923008433239',
  email: 'ayeshakhanebay@gmail.com',
  address: 'House No. 2, Ravi Block, Allama Iqbal Town, Lahore',
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
  social: {
    facebook: 'https://www.facebook.com/ebaywithayeshakhan',
    instagram: 'https://www.instagram.com/ebaywithayeshakhan/',
    linkedin: 'https://www.linkedin.com/in/ayesha-khan-80a204436/',
    tiktok: 'https://www.tiktok.com/@ebaywith_ayeshakhan',
    youtube: '#',
  },
}

export const whatsappLink = (message = "Hi! I'm interested in your eBay & Dropshipping courses.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`

export const enrollFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdIeF0RxRBTOGqVxXR40MoAcgfwULVV-Pg5nY564iTjupspRg/viewform?usp=publish-editor'
