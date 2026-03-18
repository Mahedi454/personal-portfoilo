import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Linkedin, Github, Instagram } from "lucide-react";

const CONTACT = {
  email: "mahedihasan.codes@gmail.com",
  whatsappDisplay: "+880 1768-857058",
  // WhatsApp "click to chat" format: remove + and punctuation
  whatsappLink: "https://wa.me/8801768857058",
  linkedin: "https://www.linkedin.com/in/mahedihasan916/",
  github: "https://github.com/Mahedi454",
  instagram: "https://www.instagram.com/mahashi916/",
} as const;

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    const now = new Date();
    const formattedTime = now.toLocaleString("en-BD", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    emailjs
      .send(
        "service_chfcxq7",
        "template_93lr19h",
        {
          // Match EmailJS template variables: {{name}}, {{time}}, {{message}}
          name: form.name,
          time: formattedTime,
          message: form.message,
          email: form.email,
          // Optional: allows you to reply directly from your email client
          reply_to: form.email,
        },
        "2F4-NGbtyH4KyqgXU",
      )
      .then(
        () => {
          alert("Thanks for your message! I'll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          alert("Sorry, something went wrong while sending your message. Please try again.");
        },
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
          Let's <span className="text-gradient">Connect</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div>
            <label className="text-sm font-medium mb-1.5 block">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 glow-primary disabled:opacity-60 disabled:hover:scale-100"
          >
            <Send size={16} />
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">WhatsApp</p>
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {CONTACT.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3 mt-2">
            {[
              { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
              { icon: Github, href: CONTACT.github, label: "GitHub" },
              { icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
