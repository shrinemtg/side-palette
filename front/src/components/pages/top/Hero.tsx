
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <motion.section
            className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-5xl font-bold text-white mb-4">Dorogawa Onsen Brewery</h2>
            <p className="text-lg text-white text-center max-w-lg">
                ノスタルジックに浸りながらできたての一杯を。
            </p>
        </motion.section>
    );
};

export default HeroSection;