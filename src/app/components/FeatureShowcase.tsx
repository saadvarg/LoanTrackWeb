import { motion } from 'motion/react';
import { useState } from 'react';
import { BarChart3, Brain, Calculator, Users, TrendingUp, Shield, ChevronRight } from 'lucide-react';
import { imageUrl } from '../lib/assets';

interface Feature {
  id: string;
  icon: any;
  title: string;
  description: string;
  detailedDescription: string;
  screenshot: string;
  color: string;
  stats: { label: string; value: string }[];
  highlights: string[];
}

const features: Feature[] = [
  {
    id: 'dashboard',
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    description: 'Track leads, pipeline value, and conversion rates with live analytics',
    detailedDescription: 'The dashboard provides a comprehensive overview of your entire sales pipeline at a glance. Monitor total leads in progress, track your pipeline value in real-time, calculate average loan amounts, and measure conversion rates. Features personalized greetings, role-based views for Super Admins, and top priority leads with risk assessment tags. The dashboard updates instantly as team members make changes, ensuring everyone has access to the latest data.',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.04-1.png'),
    color: 'from-blue-600 to-cyan-600',
    stats: [
      { label: 'Total Leads', value: '2' },
      { label: 'Pipeline Value', value: 'MAD 380K' },
      { label: 'Avg Loan', value: 'MAD 190K' }
    ],
    highlights: [
      'Live data synchronization across team',
      'Personalized user greetings',
      'Priority lead highlighting',
      'Pipeline health indicators',
      'Role-based dashboard views'
    ]
  },
  {
    id: 'analytics',
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Visualize lead status distribution and pipeline health with interactive charts',
    detailedDescription: 'Powerful analytics tools transform your data into actionable insights. View lead status distribution across New, Contacted, Qualified, Closed, and Lost stages with interactive bar charts. Analyze pipeline composition with pie charts showing percentage breakdowns. Track closed leads separately and monitor conversion funnels. The analytics dashboard helps identify bottlenecks, predict trends, and optimize your sales process with data-driven decisions.',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.15-1.png'),
    color: 'from-purple-600 to-pink-600',
    stats: [
      { label: 'New Leads', value: '1' },
      { label: 'Qualified', value: '1' },
      { label: 'Closed', value: '0' }
    ],
    highlights: [
      'Interactive bar & pie charts',
      'Lead status distribution',
      'Conversion funnel analysis',
      'Historical trend tracking',
      'Export reports functionality'
    ]
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI-Powered Scoring',
    description: 'Intelligent risk assessment with automated lead prioritization',
    detailedDescription: 'Revolutionary AI engine analyzes lead data to generate risk scores from 0-100, automatically categorizing leads as Low, Medium, or High Risk. The Smart Action Queue provides AI-generated recommendations like "Fast-track document collection" based on lead quality. View detailed scoring breakdowns, risk labels, and unlock AI-generated insights for next steps and follow-up messages. The system learns from your historical data to continuously improve accuracy.',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.36-1.png'),
    color: 'from-violet-600 to-purple-600',
    stats: [
      { label: 'Risk Score', value: '80/100' },
      { label: 'Risk Level', value: 'Low Risk' },
      { label: 'AI Insights', value: 'Ready' }
    ],
    highlights: [
      'Automated risk scoring (0-100)',
      'Smart Action Queue',
      'AI-generated recommendations',
      'Risk level categorization',
      'Predictive lead prioritization'
    ]
  },
  {
    id: 'calculator',
    icon: Calculator,
    title: 'Loan Calculator',
    description: 'Quick calculations for monthly payments, rates, and term breakdowns',
    detailedDescription: 'Built-in financial calculator enables instant loan calculations without leaving the app. Input principal amount, interest rate, and term length to instantly calculate monthly payments. View detailed breakdowns showing principal amount, interest rate percentages, and loan term duration. Perfect for on-the-spot client consultations, proposal generation, and what-if scenario planning. Supports multiple currency formats and calculation methods.',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.26.04-1.png'),
    color: 'from-green-600 to-emerald-600',
    stats: [
      { label: 'Principal', value: 'MAD 60K' },
      { label: 'Rate', value: '20%' },
      { label: 'Term', value: '30 years' }
    ],
    highlights: [
      'Instant monthly payment calculation',
      'Detailed breakdown display',
      'Scenario planning support',
      'Multiple currency formats',
      'Save calculation history'
    ]
  },
  {
    id: 'team',
    icon: Users,
    title: 'Team Management',
    description: 'Role-based access control for Super Admins, Agents, and team members',
    detailedDescription: 'Comprehensive team management system with granular role-based access control. Manage Super Admins with full system access, Agents with sales capabilities, and custom team members with specific permissions. View team member status (Active, Suspended), track team performance, and control data visibility per role. The admin panel provides complete oversight of user management, pending approvals, and team statistics.',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.26.12-1.png'),
    color: 'from-amber-600 to-orange-600',
    stats: [
      { label: 'Super Admins', value: '2' },
      { label: 'Agents', value: '5' },
      { label: 'Active Users', value: '7' }
    ],
    highlights: [
      'Role-based access control',
      'Super Admin & Agent roles',
      'User status management',
      'Team performance tracking',
      'Custom permission settings'
    ]
  },
  {
    id: 'details',
    icon: Shield,
    title: 'Lead Details',
    description: 'Comprehensive lead profiles with financial data and status tracking',
    detailedDescription: 'Detailed lead profiles capture every critical piece of information in one place. Store contact details (name, email, phone), track lead status (New, Contacted, Qualified, Closed, Lost), and maintain comprehensive financial records including loan amounts, income, debt, credit scores, and employment status. Edit information on-the-fly, save changes instantly, and maintain a complete audit trail of all modifications. Secure data storage ensures client information remains protected.',
    screenshot: imageUrl('Simulator_Screenshot_-_iPhone_17_Pro_-_2026-05-07_at_13.25.26-1.png'),
    color: 'from-red-600 to-rose-600',
    stats: [
      { label: 'Loan Amount', value: 'MAD 300K' },
      { label: 'Credit Score', value: '890' },
      { label: 'Status', value: 'Qualified' }
    ],
    highlights: [
      'Complete contact information',
      'Financial data management',
      'Status tracking & updates',
      'Edit mode for quick changes',
      'Audit trail & version history'
    ]
  }
];

export function FeatureShowcase() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="space-y-12">
      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isSelected = selectedFeature.id === feature.id;

          return (
            <motion.button
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedFeature(feature)}
              className={`relative p-6 rounded-2xl text-left transition-all border-2 ${
                isSelected
                  ? 'bg-white/10 border-white/30 shadow-xl'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{feature.description}</p>

              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-purple-400 text-sm font-medium"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Feature Detail View */}
      <motion.div
        key={selectedFeature.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Screenshot */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, rotateY: -20 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedFeature.color} blur-3xl opacity-30 rounded-3xl`} />

              {/* Phone Frame */}
              <div className="relative w-[280px] mx-auto bg-black rounded-[50px] p-3 shadow-2xl border border-white/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />
                <div className="relative w-full h-[580px] rounded-[42px] overflow-hidden">
                  <img
                    src={selectedFeature.screenshot}
                    alt={selectedFeature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${selectedFeature.color} rounded-full mb-4`}
              >
                {(() => {
                  const Icon = selectedFeature.icon;
                  return <Icon className="w-4 h-4" />;
                })()}
                <span className="text-sm font-medium">Featured</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold mb-4"
              >
                {selectedFeature.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                {selectedFeature.detailedDescription}
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {selectedFeature.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              {selectedFeature.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-2"
            >
              {['Swift', 'SwiftUI', 'CoreData', 'Charts'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.05 }}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
