import { Calculator, TrendingUp, DollarSign, PieChart, Building2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const calculators = [
  {
    title: "Emergency Fund Calculator",
    description: "Calculate how much you need in your emergency fund",
    icon: <DollarSign className="h-6 w-6" />,
    href: "/emergency-fund-calculator",
    category: "Personal Finance",
  },
  {
    title: "Break-Even Point Calculator",
    description: "Find out when your business will become profitable",
    icon: <TrendingUp className="h-6 w-6" />,
    href: "/break-even-calculator",
    category: "Business",
  },
  {
    title: "Startup Cost Estimator",
    description: "Estimate the total cost to start your business",
    icon: <Building2 className="h-6 w-6" />,
    href: "/startup-cost-calculator",
    category: "Business",
  },
  {
    title: "Cash Flow Projector",
    description: "Project your business cash flow over time",
    icon: <TrendingUp className="h-6 w-6" />,
    href: "/cash-flow-calculator",
    category: "Business",
  },
  {
    title: "Loan Payment Calculator",
    description: "Calculate payments for any type of loan",
    icon: <Calculator className="h-6 w-6" />,
    href: "/loan-calculator",
    category: "Loans",
  },
  {
    title: "Pricing Calculator",
    description: "Set the right price for your products and services",
    icon: <DollarSign className="h-6 w-6" />,
    href: "/pricing-calculator",
    category: "Business",
  },
  {
    title: "ROI Calculator",
    description: "Calculate return on investment for any project",
    icon: <PieChart className="h-6 w-6" />,
    href: "/roi-calculator",
    category: "Investment",
  },
  {
    title: "Tax Savings Calculator",
    description: "Estimate your potential tax savings",
    icon: <Calculator className="h-6 w-6" />,
    href: "/tax-calculator",
    category: "Tax",
  },
  {
    title: "Employee vs Contractor Calculator",
    description: "Compare costs of hiring employees vs contractors",
    icon: <Users className="h-6 w-6" />,
    href: "/employee-contractor-calculator",
    category: "Business",
  },
  {
    title: "Profit Margin Calculator",
    description: "Calculate your business profit margins",
    icon: <TrendingUp className="h-6 w-6" />,
    href: "/profit-margin-calculator",
    category: "Business",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FinnaCalc</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/budgeting" className="text-gray-700 hover:text-blue-600">
                Budgeting
              </Link>
              <Link href="/investing" className="text-gray-700 hover:text-blue-600">
                Investing
              </Link>
              <Link href="/advising" className="text-gray-700 hover:text-blue-600">
                Advising
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </nav>
            <Link href="/premium">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Premium</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional <span className="text-blue-600">Financial Calculators</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Free, accurate, and easy-to-use financial calculators for individuals, small business owners,
              entrepreneurs, and anyone looking to make informed financial decisions with professional tools.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="py-16 bg-gray-50" id="calculators">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Calculator</h2>
            <p className="text-lg text-gray-600">
              Professional financial tools to help individuals and businesses make better financial decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link href={calc.href}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{calc.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{calc.title}</CardTitle>
                        <span className="text-sm text-blue-600 font-medium">{calc.category}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{calc.description}</CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose FinnaCalc?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">100% Free to Use</h3>
                    <p className="text-gray-600">All basic calculators are completely free with no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accurate Results</h3>
                    <p className="text-gray-600">
                      Professional-grade calculations you can trust for important decisions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Save & Share Results</h3>
                    <p className="text-gray-600">Export your calculations and share them with your team or advisors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ad-space h-64">
              <p>Advertisement Space - Affiliate Products</p>
              <p className="text-sm mt-2">Business Credit Cards, Accounting Software, etc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of business owners who trust FinnaCalc for their financial planning
          </p>
          <div className="flex justify-center">
            <Link href="#calculators">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">Explore Our Calculators</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">FinnaCalc</span>
              </div>
              <p className="text-gray-400">Professional financial calculators for smart business decisions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Calculators</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/loan-calculator" className="hover:text-white">
                    Loan Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/roi-calculator" className="hover:text-white">
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/break-even-calculator" className="hover:text-white">
                    Break-Even Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/emergency-fund-calculator" className="hover:text-white">
                    Emergency Fund
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-white">
                    Financial Guides
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-white">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-white">
                    Premium Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FinnaCalc. All rights reserved. Professional Financial Calculators for Business Success.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
