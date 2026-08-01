import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/services/service-detail-page';

export const metadata: Metadata = { title: 'Business Automation & n8n Workflows | Crest Code Creative', description: 'Reliable automations that connect business tools, reduce repetitive work, and keep people in control.', alternates: { canonical: '/services/n8n-automations' } };

export default function AutomationPage() {
  return <ServiceDetailPage eyebrow="AI & business automation" title="Move the repetitive work without losing the human judgment." introduction="Connected workflows, AI-assisted operations, and reliable n8n systems for businesses ready to spend less time moving information by hand." image="/images/services/n8n-hero.png" imageAlt="A connected business automation workflow" premise="The best automation is quiet infrastructure. It moves the right information, handles routine decisions safely, shows its work, and brings a person back in whenever context or consequence demands it." services={[
    { title: 'Workflow discovery', body: 'Find the repeated handoffs, delays, and error-prone steps worth automating first.', details: ['Process mapping', 'Risk and exception review', 'Opportunity prioritization'] },
    { title: 'Connected automation', body: 'Link the tools already in use and move information through a dependable workflow.', details: ['n8n implementation', 'CRM and form routing', 'Notifications and reporting'] },
    { title: 'AI-assisted work', body: 'Use models for classification, drafting, retrieval, or first-pass analysis with clear guardrails.', details: ['Knowledge assistants', 'Document processing', 'Human review steps'] },
    { title: 'Operations & monitoring', body: 'Make failures visible, protect credentials, and document how the system behaves.', details: ['Logging and alerts', 'Retries and fallbacks', 'Documentation and support'] },
  ]} process={[
    { title: 'Observe the manual path', body: 'Document what happens now, including exceptions and the decisions people actually make.' },
    { title: 'Design the guardrails', body: 'Choose what can run automatically, what requires approval, and how failures recover.' },
    { title: 'Build and test', body: 'Connect systems in a safe environment and validate real examples before activation.' },
    { title: 'Operate with visibility', body: 'Launch with monitoring, ownership, and a clear plan for changes to connected tools.' },
  ]} fit={['People copy the same information between systems every day.', 'Leads, invoices, requests, or records wait on avoidable handoffs.', 'Your team wants AI assistance without opaque autonomous behavior.', 'Existing automations are brittle, undocumented, or difficult to monitor.']} />;
}
