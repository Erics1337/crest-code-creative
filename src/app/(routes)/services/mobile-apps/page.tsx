import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/services/service-detail-page';

export const metadata: Metadata = { title: 'Mobile App Development for iOS & Android | Crest Code Creative', description: 'Cross-platform mobile product design and development from experience strategy through App Store launch.', alternates: { canonical: '/services/mobile-apps' } };

export default function MobileAppsPage() {
  return <ServiceDetailPage eyebrow="Mobile products" title="A mobile experience worth making room for." introduction="Cross-platform iOS and Android apps with native-feeling interaction, dependable infrastructure, and a clear reason to return." image="/images/mobile-outside.jpg" imageAlt="A mobile device being used outdoors" premise="An app should earn its place on someone’s phone. That starts with a recurring job, a focused experience, and a product foundation that can support accounts, content, subscriptions, notifications, and change over time." services={[
    { title: 'Product experience', body: 'Define the repeatable value and shape flows that feel at home on a phone.', details: ['User journeys', 'Native interaction design', 'Prototyping and testing'] },
    { title: 'Cross-platform build', body: 'Create one maintainable product for iOS and Android without settling for a web page in a wrapper.', details: ['React Native and Expo', 'Responsive device support', 'Offline-aware behavior'] },
    { title: 'Product infrastructure', body: 'Connect accounts, data, media, payments, and the services the experience depends on.', details: ['Authentication and sync', 'RevenueCat subscriptions', 'APIs and cloud services'] },
    { title: 'Launch & reliability', body: 'Prepare store releases, production visibility, and the next useful iteration.', details: ['Store submission', 'Analytics and Sentry', 'Testing and release automation'] },
  ]} process={[
    { title: 'Find the return reason', body: 'Clarify why the product belongs on a phone and what useful habit it should support.' },
    { title: 'Prototype the feel', body: 'Settle navigation, touch behavior, pacing, and the core path before scaling the build.' },
    { title: 'Build the product', body: 'Implement the app and backend together, testing real devices throughout.' },
    { title: 'Release responsibly', body: 'Prepare stores, monitoring, subscriptions, and support for production use.' },
  ]} fit={['The product depends on repeat use, mobility, camera, audio, or notifications.', 'Customers need a focused experience beyond a responsive website.', 'You want one strong codebase across iOS and Android.', 'The app needs subscriptions, cloud sync, or production-grade release support.']} />;
}
