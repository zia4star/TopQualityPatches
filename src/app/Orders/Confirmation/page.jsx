import Link from 'next/link'
// import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4 text-center space-y-6">
      {/* <CheckCircleIcon className="mx-auto h-20 w-20 text-green-500" /> */}
      <h1 className="text-3xl font-bold text-green-700">Order Submitted!</h1>
      <p className="text-gray-700">
        Thank you for your order. Our team will contact you shortly via email or WhatsApp.
      </p>
      <p className="text-sm text-gray-500">
        If you have not uploaded your artwork, please send it now via WhatsApp.
      </p>
      <a
        href="https://wa.me/+923462358592"
        target="_blank"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 font-semibold"
      >
        Message Us on WhatsApp
      </a>
      <div>
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
