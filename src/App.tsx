import { useState } from 'react'
import { ChevronRight, ArrowRight, Check, Menu, X } from 'lucide-react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [emailValue, setEmailValue] = useState('')

  const handleGetStarted = () => {
    const element = document.getElementById('pricing')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${emailValue}!`)
    setEmailValue('')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="premium-container">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Apex
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors py-2">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors py-2">Pricing</a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-foreground transition-colors py-2">Testimonials</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="premium-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-semibold px-4 py-2 bg-white/10 backdrop-blur rounded-full">
                  Introducing Apex Pro
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Premium experience for everyone
              </h1>
              
              <p className="text-xl text-white/80 max-w-xl">
                Create, collaborate, and deliver exceptional work with our intuitive platform. Built for teams that demand excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleGetStarted}
                  className="premium-button-primary flex items-center justify-center gap-2 text-white bg-white text-primary hover:bg-gray-100"
                >
                  Get Started <ArrowRight size={20} />
                </button>
                <button className="premium-button-outline text-white border-white hover:bg-white/10">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white/5 backdrop-blur rounded-2xl border border-white/20 p-8 h-96 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-white/10 rounded-xl">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-white/70 text-sm font-medium">Lightning Fast Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="premium-section">
        <div className="premium-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="premium-title mb-4">Powerful features designed for you</h2>
            <p className="premium-subtitle">Everything you need to succeed, nothing you don't</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intelligent Automation',
                description: 'Save hours every week with AI-powered workflows and smart automation',
                icon: '⚡'
              },
              {
                title: 'Real-time Collaboration',
                description: 'Work together seamlessly with built-in communication and version control',
                icon: '🤝'
              },
              {
                title: 'Advanced Analytics',
                description: 'Make data-driven decisions with comprehensive insights and reporting',
                icon: '📊'
              },
              {
                title: 'Enterprise Security',
                description: 'Military-grade encryption and compliance with SOC 2 and GDPR',
                icon: '🔒'
              },
              {
                title: 'Unlimited Integrations',
                description: 'Connect to your favorite tools and build custom workflows',
                icon: '🔗'
              },
              {
                title: '24/7 Premium Support',
                description: 'Dedicated support team ready to help whenever you need assistance',
                icon: '💬'
              }
            ].map((feature, idx) => (
              <div key={idx} className="premium-card p-8 space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="premium-section bg-gradient-accent">
        <div className="premium-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="premium-title mb-4">Simple, transparent pricing</h2>
            <p className="premium-subtitle">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                description: 'Perfect for individuals and small projects',
                features: ['Up to 3 projects', '5 GB storage', 'Community support', 'Basic analytics']
              },
              {
                name: 'Professional',
                price: '$79',
                period: '/month',
                description: 'Best for growing teams',
                features: ['Unlimited projects', '100 GB storage', 'Priority support', 'Advanced analytics', 'Team collaboration', 'Custom integrations'],
                featured: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'For large organizations',
                features: ['Everything in Professional', 'Unlimited storage', 'Dedicated support', 'Custom contracts', 'Advanced security', 'SLA guarantee']
              }
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`premium-card p-8 space-y-8 relative transition-all duration-300 ${
                  plan.featured ? 'ring-2 ring-primary shadow-premium-lg md:scale-105' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{ plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={20} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={plan.featured ? 'premium-button-primary w-full' : 'premium-button-secondary w-full'}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="premium-section">
        <div className="premium-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="premium-title mb-4">Loved by teams worldwide</h2>
            <p className="premium-subtitle">See what our customers have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Product Manager at TechCorp',
                content: 'Apex has transformed how our team collaborates. We\'ve cut project timelines by 40%.'
              },
              {
                name: 'Michael Rodriguez',
                role: 'CEO at StartupIO',
                content: 'The automation features alone have saved us countless hours. Highly recommended.'
              },
              {
                name: 'Emma Thompson',
                role: 'Director of Operations',
                content: 'Best investment we\'ve made for our team. The ROI was immediate and substantial.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="premium-card p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-section bg-gradient-accent">
        <div className="premium-container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="premium-title">Ready to transform your workflow?</h2>
            <p className="premium-subtitle text-base">Join thousands of teams already using Apex to work smarter</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="premium-button-primary whitespace-nowrap flex items-center justify-center gap-2">
                Get Started <ChevronRight size={20} />
              </button>
            </form>

            <p className="text-muted-foreground text-sm">
              No credit card required. Start free for 14 days.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="premium-container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Apex</h3>
              <p className="text-muted-foreground text-sm">Premium productivity platform for modern teams.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
            <p>&copy; 2024 Apex. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
