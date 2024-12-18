import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">About Crest Code Creative</h1>
        <p className="text-lg text-gray-600 mb-12">
          Crafting digital experiences that elevate brands and drive success.
        </p>
      </FadeIn>

      {/* Mission Section */}
      <FadeIn className="mb-20">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Crest Code Creative, we believe in the power of exceptional web design to transform businesses. 
            Our mission is to create digital experiences that not only look stunning but also drive real results 
            for our clients. We combine creative design with technical excellence to build websites that stand out 
            in today&apos;s competitive digital landscape.
          </p>
        </div>
      </FadeIn>

      {/* Values Section */}
      <FadeInStagger className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <FadeInStaggerItem key={value.title}>
              <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* Expertise Section */}
      <FadeInStagger>
        <h2 className="text-2xl font-semibold mb-8">Our Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => (
            <FadeInStaggerItem key={item.title}>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {item.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* Process Section */}
      <FadeInStagger className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <FadeInStaggerItem key={step.title}>
              <div className="bg-white rounded-xl p-6 shadow-sm h-full relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* Team Section */}
      <FadeInStagger className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <FadeInStaggerItem key={member.name}>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <ImageWithSkeleton
                    src={member.image}
                    alt={member.name}
                    fill={true}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* Stats Section */}
      <FadeInStagger className="mb-20">
        <div className="bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <FadeInStaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </FadeInStaggerItem>
            ))}
          </div>
        </div>
      </FadeInStagger>

      {/* Clients Section */}
      <FadeInStagger className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">Trusted By</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <FadeInStaggerItem key={client.name}>
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center">
                <ImageWithSkeleton
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* CTA Section */}
      <FadeIn>
        <div className="bg-primary/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create something extraordinary. Our team is ready to bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of digital trends to deliver cutting-edge solutions that give our clients a competitive advantage.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in both design and development, ensuring every project exceeds expectations.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships with our clients, working collaboratively to achieve their digital goals.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const expertise = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Design',
    skills: ['UI/UX Design', 'Responsive Design', 'Brand Identity', 'Figma', 'Adobe Creative Suite'],
  },
  {
    title: 'Digital Marketing',
    skills: ['SEO', 'Analytics', 'Content Strategy', 'Social Media', 'Email Marketing'],
  },
];

const process = [
  {
    title: 'Discovery',
    description: 'We start by understanding your goals, target audience, and unique requirements through in-depth consultation.',
  },
  {
    title: 'Design',
    description: 'Our designers create beautiful, user-focused mockups that align with your brand and objectives.',
  },
  {
    title: 'Development',
    description: "We build your website using modern technologies, ensuring it's fast, secure, and scalable.",
  },
  {
    title: 'Delivery',
    description: 'After thorough testing, we launch your site and provide training and ongoing support.',
  },
];

const team = [
  {
    name: 'Eric Swanson',
    role: 'Founder & Lead Developer',
    image: '/team/eric.jpg',
    bio: 'Full-stack developer with a passion for creating beautiful, functional websites that drive results.',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    image: '/team/sarah.jpg',
    bio: 'Creative director with 8+ years of experience in UI/UX design and brand strategy.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Technical Architect',
    image: '/team/michael.jpg',
    bio: 'Backend specialist focused on building scalable, secure web applications.',
  },
];

const stats = [
  {
    value: '50+',
    label: 'Projects Completed',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
  },
  {
    value: '5+',
    label: 'Years Experience',
  },
  {
    value: '24/7',
    label: 'Support',
  },
];

const clients = [
  {
    name: 'Mountain Bike Adventures',
    logo: '/clients/mba-logo.png',
  },
  {
    name: 'Earthy Soul Wellness',
    logo: '/clients/esw-logo.png',
  },
  {
    name: 'Local Food Market',
    logo: '/clients/lfm-logo.png',
  },
  {
    name: 'Tech Innovators',
    logo: '/clients/ti-logo.png',
  },
];
