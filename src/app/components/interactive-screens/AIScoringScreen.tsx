import { motion } from 'motion/react';
import { ChevronLeft, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AIScoringScreen() {
  const [score, setScore] = useState(0);
  const [showInsights, setShowInsights] = useState(false);

  useEffect(() => {
    // Animate score counting up
    const interval = setInterval(() => {
      setScore(prev => {
        if (prev >= 80) {
          clearInterval(interval);
          setShowInsights(true);
          return 80;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        <span className="text-sm text-gray-400">Risk Score: 6 — 2026-05-07</span>
      </div>

      <div className="p-4 space-y-4">
        {/* Lead Created Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-xl p-4"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Lead Created</h3>
              <p className="text-sm text-green-700">
                Test 1 Lead was added to the pipeline
              </p>
              <p className="text-xs text-green-600 mt-1">2026-05-01T18:26:28.19684+00:00</p>
            </div>
          </div>
        </motion.div>

        {/* Smart Action Queue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold mb-3">Smart Action Queue</h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 border-l-4 border-red-500 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h4 className="font-medium">Fast-track document collection</h4>
              </div>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                High
              </span>
            </div>
            <p className="text-sm text-gray-600">
              This lead looks strong. Move quickly to maintain momentum.
            </p>
          </motion.div>
        </motion.div>

        {/* Risk Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-semibold mb-3">Risk Score</h3>
          <div className="bg-white rounded-xl p-6">
            {/* Circular Score Display */}
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-40 h-40">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#10b981"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '439.8', strokeDashoffset: '439.8' }}
                    animate={{
                      strokeDashoffset: 439.8 - (439.8 * score) / 100
                    }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    className="text-4xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: score > 0 ? 1 : 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {score}
                  </motion.span>
                  <span className="text-sm text-gray-500">/ 100</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showInsights ? 1 : 0 }}
              className="text-center"
            >
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Label: Low Risk
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* AI Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-semibold mb-3">AI Assistant</h3>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200">
            <p className="text-sm text-gray-700 mb-3">
              Run scoring to unlock smart recommendations, suggested next steps,
              and a ready-to-use follow-up message.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-blue-600 font-medium"
            >
              <Sparkles className="w-4 h-4" />
              Generate AI Insights
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
