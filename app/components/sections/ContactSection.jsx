// app/components/ContactForm.jsx
import { useState } from "react"
import { Input } from "../ui/shad-input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { H2 } from "../ui/typography"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[112px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4 w-full">
              <H2 className="mx-auto max-w-[500px]">
                We Value Your Feedback
              </H2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                Help us improve Mo Speech by sharing your experiences, suggestions, or reporting any issues you&apos;ve encountered.
              </p>
            </div>
            <form className="w-full space-y-4 mx-auto max-w-[600px]" onSubmit={handleSubmit}>
              <Input
                name="name"
                className="bg-white border border-slate-400"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Input
                name="email"
                type="email"
                className="bg-white border border-slate-400"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Textarea
                name="message"
                className="bg-white border border-slate-400"
                placeholder="Type your message here"
                value={form.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}