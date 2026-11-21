// Update these with the real business details before going live.
export const siteUrl = 'https://ayeshakhanofficial.com'

export const site = {
  name: 'Ayesha Khan Official',
  // Calling number
  phoneDisplay: '+92 308 1554444',
  phoneDial: '+923081554444',
  // WhatsApp number
  whatsappDisplay: '+92 300 8433239',
  whatsappNumber: '923008433239',
  email: 'ayeshakhanebay@gmail.com',
  address: 'Paragon City, Lahore',
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

// Web3Forms access key — contact form submissions are emailed to the address this key
// was created with. Get a free key at https://web3forms.com (enter the inbox email).
// Leave empty to disable email delivery (the form will still open WhatsApp).
export const web3formsKey = ''

export const enrollFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdIeF0RxRBTOGqVxXR40MoAcgfwULVV-Pg5nY564iTjupspRg/viewform?usp=publish-editor'
