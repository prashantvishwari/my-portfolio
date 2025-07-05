import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4 py-10">
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prashant Gupta
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          BCA Graduate | Web Developer | Creator of CompareBuddy.in
        </motion.p>
      </header>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Skills</h2>
              <p className="text-slate-300">HTML, CSS, JavaScript, Python, MySQL, Git, Excel, Communication</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <p className="text-slate-300">BCA - Uttaranchal University</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "CompareBuddy.in",
              description:
                "Affiliate price comparison tool with Telegram bot integration.",
              link: "https://comparebuddy.in",
            },
            {
              title: "PetSphere",
              description:
                "Pet care website with profile management and tips.",
            },
            {
              title: "PawPals",
              description:
                "Animal rescue platform connecting adopters.",
            },
            {
              title: "QR Code Generator",
              description: "Generates QR from URLs using JS.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              className="bg-slate-700 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Visit Site
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center text-slate-400 mt-20 text-sm">
        © {new Date().getFullYear()} Prashant Gupta | All rights reserved
      </footer>
    </div>
  );
}