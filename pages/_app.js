import { motion, AnimatePresence } from "framer-motion";
import "styles/style.scss";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div key={router.route}
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// transition={{ duration: 2 }}
			>
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence >
	)
}
