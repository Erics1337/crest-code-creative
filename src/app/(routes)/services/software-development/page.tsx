import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/services/service-detail-page';

export const metadata: Metadata = { title: 'Custom Software Development | Crest Code Creative', description: 'Custom web applications, SaaS platforms, integrations, and internal systems built around real business operations.', alternates: { canonical: '/services/software-development' } };

export default function SoftwareDevelopmentPage() {
  return <ServiceDetailPage eyebrow="Custom software" title="Software shaped around the way your business actually works." introduction="Full-stack product strategy and engineering for teams that have outgrown spreadsheets, disconnected tools, or off-the-shelf compromises." image="/images/polygon-mountain.jpg" imageAlt="Abstract polygonal mountain landscape" premise="Custom software earns its cost when it removes a meaningful constraint: fewer handoffs, clearer operations, a better customer experience, or a product opportunity existing tools cannot support." services={[
    { title: 'Product strategy', body: 'Turn operational pain or a new opportunity into a focused product plan with clear priorities.', details: ['Discovery and workflows', 'User and role definition', 'Roadmap and architecture'] },
    { title: 'Web applications', body: 'Build secure responsive software for customers, teams, or both.', details: ['Next.js and TypeScript', 'Authentication and permissions', 'Responsive product UI'] },
    { title: 'Data & integrations', body: 'Connect the systems your business relies on and make information useful in one place.', details: ['PostgreSQL and APIs', 'Payments and subscriptions', 'Third-party integrations'] },
    { title: 'Production systems', body: 'Ship on dependable infrastructure with the visibility needed to operate and improve.', details: ['Cloud deployment', 'Testing and CI/CD', 'Monitoring and iteration'] },
  ]} process={[
    { title: 'Map the operation', body: 'Understand users, roles, rules, data, edge cases, and the current cost of the problem.' },
    { title: 'Prove the core', body: 'Prototype the riskiest workflow and settle the architecture around real constraints.' },
    { title: 'Build in useful slices', body: 'Deliver working increments that teams can review and learn from throughout the engagement.' },
    { title: 'Release and deepen', body: 'Launch securely, monitor behavior, and extend from evidence rather than guesswork.' },
  ]} fit={['Critical work is split across spreadsheets, inboxes, and manual checks.', 'Existing software forces the business into the wrong workflow.', 'You have a product opportunity that needs senior technical execution.', 'Security, permissions, billing, or multi-tenant data need thoughtful foundations.']} />;
}
