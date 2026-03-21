import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";

const CONTACT = {
  email: "mahedihasan.codes@gmail.com",
  whatsappDisplay: "+880 1768-857058",
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
          name: form.name,
          time: formattedTime,
          message: form.message,
          email: form.email,
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
    <section id="contact" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-shell"
      >
        <div className="section-header">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Ready to launch something that feels <span className="text-gradient">more polished and professional</span>?
          </h2>
        </div>
      </motion.div>

      <div className="section-shell grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pro-card space-y-5 rounded-[2rem] p-7"
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-2xl border border-border bg-secondary/70 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-2xl border border-border bg-secondary/70 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-2xl border border-border bg-secondary/70 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button type="submit" disabled={isSending} className="button-primary disabled:pointer-events-none disabled:opacity-60">
            <Send size={16} />
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="pro-card rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Direct Contact</p>
            <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">
              If you need a portfolio, landing page, dashboard, or full product UI that
              looks trustworthy and modern, we can map the scope quickly.
            </p>
          </div>

          <div className="pro-card flex items-center gap-4 rounded-[1.75rem] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <a href={`mailto:${CONTACT.email}`} className="text-xs text-muted-foreground transition-colors hover:text-primary">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="pro-card flex items-center gap-4 rounded-[1.75rem] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">WhatsApp</p>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                {CONTACT.whatsappDisplay}
              </a>
            </div>
          </div>

          <div className="mt-2 flex gap-3">
            {[
              { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
              { icon: Github, href: CONTACT.github, label: "GitHub" },
              { icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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
