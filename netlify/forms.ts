export const forms = {
  contact: {
    name: 'contact',
    fields: [
      { name: 'inquiryType', type: 'select', options: ['booking', 'collaboration', 'press', 'other'] },
      { name: 'name', type: 'text' },
      { name: 'email', type: 'email' },
      { name: 'subject', type: 'text' },
      { name: 'message', type: 'textarea' }
    ]
  }
} 