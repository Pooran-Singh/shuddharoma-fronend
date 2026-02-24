import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export const SectionTitle = ({ eyebrow, title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    {eyebrow && <p className="mb-2 text-sm uppercase tracking-[0.25em] text-forest-600">{eyebrow}</p>}
    <h2 className="font-heading text-4xl text-forest-700 md:text-5xl">{title}</h2>
    {subtitle && <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">{subtitle}</p>}
  </motion.div>
);
