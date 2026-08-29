/** Single source of truth for details shown across the site. */

export const CONTACT = {
  phone: '+44 7932 578446',
  phoneHref: 'tel:+447932578446',
  email: 'zonyxautoinsurance@gmail.com',
  emailHref: 'mailto:zonyxautoinsurance@gmail.com',
  office: '123 Premium Way, London, UK',
  hours: 'Mon–Fri 9am–7pm · Sat 9am–2pm',
};

/**
 * Figures shown in the trust strip.
 *
 * These carry over from the previous site copy — they are Zonyx's own claims,
 * not anything verified here. Edit or delete any line you cannot evidence:
 * the strip renders whatever is in this array and nothing more.
 */
export const TRUST_STATS = [
  { value: '25+', label: 'Years arranging motor cover' },
  { value: '5m+', label: 'Drivers helped to date' },
  { value: '8', label: 'Classes of use covered' },
  { value: '24/7', label: 'Claims line, every day' },
];

/**
 * Regulatory footer line.
 *
 * LEAVE EMPTY until you can supply the real details — the footer omits the
 * whole line when these are blank rather than printing a placeholder. A UK
 * insurance intermediary must be FCA authorised, and publishing an incorrect
 * or invented registration number is a serious problem.
 */
export const REGULATORY = {
  fcaNumber: '',
  legalEntity: '',
  companyNumber: '',
};
