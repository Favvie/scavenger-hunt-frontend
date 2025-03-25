import { Phone, Home, Mail, Calendar } from 'lucide-react';
import SubHeadingCenter from '@/components/SubHeadingCenter';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    content: 'scavengerhunt@gmail.com',
    description: 'For general inquiries and support'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    description: 'People who want to understand different blockchain ecosystems'
  },
  {
    icon: Home,
    title: 'Address',
    content: '123 Blockchain Street, Crypto Valley',
    description: 'Those who enjoy interactive and challenging experiences'
  },
  {
    icon: Calendar,
    title: 'Schedule an appointment',
    content: 'Click here to view our calendar',
    description: 'Book a time to discuss your needs'
  }
];

const ContactMethodCard = ({ icon: Icon, title, content, description }) => {
  return (
    <div className='p-6 rounded-lg border transition-all border-purple-500/20 bg-purple-900/10 hover:bg-purple-900/20'>
      <div className='flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-purple-900/30'>
        <Icon className='w-6 h-6 text-purple-500' />
      </div>
      <h3 className='mb-2 text-xl font-medium text-white'>{title}</h3>
      <p className='mb-2 text-purple-400'>{content}</p>
      <p className='text-sm text-gray-400'>{description}</p>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className='min-h-screen bg-[#060B1C] px-4 py-40 md:px-8 lg:px-12'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>Contact us</h1>
          <h2 className='mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 md:text-4xl'>How can we help?</h2>
          <p className='text-gray-400'>
            Have specific questions? <a href='#faq' className='text-purple-500 hover:text-purple-400'>View our frequently asked questions section</a>
          </p>
        </div>

        <section className='mb-16'>
          <SubHeadingCenter text='Contact Methods' />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {contactMethods.map((method, index) => (
              <ContactMethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                content={method.content}
                description={method.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
