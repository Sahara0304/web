export interface SectionProps {
  id: string;
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  bgClass?: string;
}
