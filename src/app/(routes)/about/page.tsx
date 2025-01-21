import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';

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
            <ImageWithSkeleton
              src="/images/about/eric-profile.jpg"
              alt="Eric Swanson"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Story</h2>
              <p className="text-gray-600 mb-4">
                As a proud graduate of Western Colorado University&apos;s Computer Science program, I&apos;ve combined my technical expertise with a deep understanding of our unique mountain community. My journey in software development began right here in Gunnison Valley, where I discovered the power of technology to transform local businesses.
              </p>
              <p className="text-gray-600 mb-4">
                With 5 years of experience in software development and UI/UX design, I&apos;ve worked on projects ranging from simple websites to complex enterprise applications. My local education at Western has given me both the technical foundation and the community connection to understand the unique challenges faced by businesses in our mountain town.
              </p>
              <p className="text-gray-600">
                Today, I&apos;m dedicated to helping Gunnison Valley businesses thrive in the digital age by providing sophisticated technical solutions that maintain the authentic character of our community.
              </p>
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
            <p className="text-gray-600 mb-6">
              As a local business owner and Western graduate, I&apos;m deeply committed to the success of our community. I understand the unique challenges and opportunities that come with operating in a seasonal, tourism-driven economy.
            </p>
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  <p className="text-gray-600">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <ImageWithSkeleton
              src="/images/about/crested-butte.jpg"
              alt="Crested Butte"
              fill={true}
              className="object-cover"
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
  "Supporting local businesses with technology solutions that respect our town's character",
  "Active participation in community events and business organizations",
  "Mentoring aspiring developers at Western Colorado University",
  "Providing special rates for local non-profit organizations",
  "Contributing to sustainable tourism through smart digital solutions"
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
