import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-12">
          Local developer with global expertise, bringing Silicon Valley quality to Gunnison Valley businesses.
        </p>
      </FadeIn>

      {/* My Story Section */}
      <FadeIn className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about/eric-profile.jpg"
              alt="Eric Swanson"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Story</h2>
              My connection to the Gunnison Valley began in 2015.  Like many, I was drawn to the stunning beauty and vibrant community. I immersed myself in local life, working at Crested Butte Mountain Resort, Gunnison Valley Health, and several of our cherished restaurants and small businesses. These experiences weren&apos;t just jobs; they were an education in the unique spirit and challenges of our valley.
<br /><br />
Inspired by the potential of technology to empower local businesses, I pursued a Computer Science degree at Western Colorado University. My time at Western provided me with a strong technical foundation, while also deepening my understanding of the specific needs of our mountain community.
<br /><br />
After graduating, I gained valuable professional experience, first as a web developer for a financial planning company in Denver, and then transitioning to remote roles with big tech companies. This allowed me to achieve a long-held dream: building a successful career in technology while remaining rooted in the Gunnison Valley.
<br /><br />
With five years of experience in software development and UI/UX design, I&apos;ve honed my skills on a diverse range of projects, from crafting elegant, user-friendly websites to developing complex, enterprise-level applications. Now, I&apos;m bringing that expertise back home.
<br /><br />
I&apos;m passionate about helping Gunnison Valley businesses thrive in the digital age. My goal is to provide sophisticated technical solutions that are tailored to your specific needs, helping you connect with customers, streamline operations, and grow your business – all while preserving the authentic character of the community that has shaped me, and that we both love.
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Mission & Vision */}
      <FadeIn className="mb-20">
        <div className="bg-primary/5 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
            <p className="text-gray-600 mb-8">
              To empower Gunnison Valley businesses with technology solutions that preserve our town&apos;s unique character while enabling growth and success in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Community Commitment */}
      <FadeIn className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Community Commitment</h2>
            <p className="text-gray-600 mb-8">
              Having worked in various local businesses before my tech career, I intimately understand the unique rhythm of our valley&apos;s economy. My commitment goes beyond just providing services - it&apos;s about being a true partner in our community&apos;s growth and success.
            </p>
            <div className="space-y-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-primary group-hover:text-primary/80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/coffee-shop.jpg"
              alt="Client Meeting"
              fill={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
              className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </FadeIn>

      {/* Impact Section */}
      <FadeInStagger className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {impact.map((stat) => (
            <FadeInStaggerItem key={stat.label}>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* CTA Section */}
      <FadeIn>
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Let&apos;s discuss how we can create a digital solution that works for you.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

const values = [
  {
    title: 'Local Expertise',
    description: "Deep understanding of Gunnison Valley's business environment and community needs.",
    icon: '🏔️'
  },
  {
    title: 'Technical Excellence',
    description: 'Cutting-edge solutions built on a strong computer science foundation from Western.',
    icon: '💻'
  },
  {
    title: 'Community Focus',
    description: "Committed to preserving and enhancing our mountain town's unique character.",
    icon: '🤝'
  }
];

const commitments = [
  "Deep understanding of local business needs through years of hands-on experience in the valley",
  "Commitment to providing affordable, high-quality tech solutions tailored to our community",
  "Active participation in local business networks and community events",
  "Flexible support and maintenance schedules that adapt to seasonal business patterns",
  "Dedication to preserving our valley's unique character while embracing digital innovation"
];

const impact = [
  {
    value: '5+',
    label: 'Years of Experience'
  },
  {
    value: '30+',
    label: 'Local Businesses Helped'
  },
  {
    value: '100%',
    label: 'Client Satisfaction'
  },
  {
    value: '24/7',
    label: 'Local Support'
  }
];
