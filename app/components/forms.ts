export const contactFormConfig = {
  name: 'contact',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'subject', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
    { name: 'inquiryType', type: 'select', required: true, options: [
      'booking',
      'collaboration',
      'press',
      'other'
    ]},
  ],
} 