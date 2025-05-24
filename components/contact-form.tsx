"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Copy, Check } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEmailClick = () => {
    const { name, email, subject, message } = formData
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailtoLink = `mailto:abbaniayoub@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abbaniayoub@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-zinc-400 text-sm">Name</label>
          <Input
            name="name"
            placeholder="Your name"
            className="bg-zinc-800/50 border-zinc-700 focus:border-cyan-500"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label className="text-zinc-400 text-sm">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="your.email@example.com"
            className="bg-zinc-800/50 border-zinc-700 focus:border-cyan-500"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-zinc-400 text-sm">Subject</label>
        <Input
          name="subject"
          placeholder="What is this regarding?"
          className="bg-zinc-800/50 border-zinc-700 focus:border-cyan-500"
          value={formData.subject}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <label className="text-zinc-400 text-sm">Message</label>
        <Textarea
          name="message"
          placeholder="Your message"
          className="bg-zinc-800/50 border-zinc-700 focus:border-cyan-500 min-h-[120px]"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={handleEmailClick}
          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
        >
          <Mail className="w-4 h-4 mr-2" />
          Send via Email
        </Button>

        <Button onClick={copyEmail} variant="outline" className="flex-1">
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Email
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-zinc-500 text-center">
        Click "Send via Email" to open your email client, or copy the email address to contact directly.
      </p>
    </div>
  )
}
