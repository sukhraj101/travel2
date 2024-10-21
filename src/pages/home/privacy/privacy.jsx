import React from 'react'
import PageHeader from '../../../components/common/page-header'

export default function Privacy() {
    const breadcrumbs = [
        { label: 'Home', link: '/', active: false },
        { label: 'Privacy Policy', active: true }
    ];
  return (
    <>
        <PageHeader 
            title="Privacy Policy"
            breadcrumbs={breadcrumbs}
        />
        <div className="container space-bottom-2 space-top-lg-1">
            <div className="w-lg-80 w-xl-60 mx-auto collapse_custom position-relative mb-4 pb-xl-1">
                <h4 className="font-size-16 font-weight-semi-bold text-gray-6 pb-1">Read our privacy policy terms carefully</h4>
                <p>At our tour company, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, and safeguard your data when you engage with our services, whether online or in person. By booking a tour with us, you consent to the practices outlined in this policy.</p>
                <p>We collect personal information such as your name, email address, phone number, and payment details when you book a tour or sign up for our newsletters. This data is necessary to process your reservation, provide customer support, and communicate important updates regarding your tour. We may also collect non-personal data, such as browser type and usage statistics, to improve our website's functionality and user experience.</p>
                <p>Your personal information is stored securely and will never be sold, rented, or shared with third parties for marketing purposes. However, we may share your details with trusted partners, such as local guides and transportation providers, who assist in delivering our services. These third parties are bound by confidentiality agreements and will only use your data as needed to perform their services.</p>
                <p>We employ industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse. Our website uses encryption technology to ensure your personal and payment information is transmitted securely. However, no online platform can guarantee complete security, so we encourage you to take precautions when sharing sensitive information over the internet.</p>
                <p>You have the right to access, update, or delete your personal information at any time. If you wish to review the data we hold on you or make any changes, please contact our customer support team. We will respond promptly to any such requests, in compliance with applicable data protection laws.</p>
                <p>This Privacy Policy may be updated periodically to reflect changes in our practices or legal obligations. We recommend checking this page regularly to stay informed about how we are protecting your data. By continuing to use our services after any updates are made, you agree to the revised terms of this policy.</p>
            </div>
        </div>
    </>
  )
}
