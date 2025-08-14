import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-lg p-4 rounded-xl transition-all"
    >
      {/* Event info here */}
    </motion.div>
  );
};
