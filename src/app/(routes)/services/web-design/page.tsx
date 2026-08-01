import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/services/service-detail-page';

export const metadata: Metadata = { title: 'Web Design in Crested Butte & Gunnison Valley | Crest Code Creative', description: 'Distinct, responsive websites built around your business and designed to remain useful after launch.', alternates: { canonical: '/services/web-design' } };

export default function WebDesignPage() {
  return <ServiceDetailPage eyebrow="Web design & development" title="A website your business can grow into—not out of." introduction="Strategy, design, development, content structure, and launch support in one direct engagement." image="/images/gunnison-web-design.jpg" imageAlt="The Gunnison Valley landscape" premise="A good website does more than look current. It helps the right people understand your value, take the next step, and trust the business behind the screen—and it gives you enough control to keep it accurate." services={[
    { title: 'Strategy & structure', body: 'Clarify audiences, decisions, content, and conversion paths before visual design begins.', details: ['Discovery and goals', 'Information architecture', 'Content planning'] },
    { title: 'Visual design', body: 'Create a distinct responsive system that feels true to your business and easy to navigate.', details: ['Art direction', 'Responsive layouts', 'Accessible components'] },
    { title: 'Development', body: 'Build for speed, search visibility, maintainability, and the platform that fits your operating reality.', details: ['Custom or managed platforms', 'CMS and integrations', 'Performance and SEO'] },
    { title: 'Launch & ownership', body: 'Move into production carefully and leave your team able to operate the site with confidence.', details: ['Content migration', 'Analytics and QA', 'Training and support'] },
  ]} process={[
    { title: 'Understand the business', body: 'Define who the site serves, what they need to believe, and the actions that matter.' },
    { title: 'Shape the experience', body: 'Build the content structure and visual direction around those decisions.' },
    { title: 'Build and review', body: 'Develop responsively, review real content, and test the paths visitors will use.' },
    { title: 'Launch with control', body: 'Deploy, measure, document, and make sure your team can own what comes next.' },
  ]} fit={['Your current site no longer reflects the quality of the business.', 'Customers struggle to find information or complete the next step.', 'You need a site your team can update without breaking.', 'A new offering or business needs a credible digital home.']} />;
}
