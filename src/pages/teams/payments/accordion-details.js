import { Typography } from '@mui/material'
import React from 'react'

export const PaymentUnitDetails = () => {
    return (
        <div className='accordion-details scale-in-hor-right text-align-left' id="payment-unit-details">
            <Typography className='text-focus-in font-bold text-center font-15 margin-v8'>
                Powering Seamless Payments: The Payments Technology Team.
            </Typography>
            <div className='margin-v8'>
                <Typography className="text-align-left scale-in-hor-right font-bold">
                    Who We Are ?
                </Typography>
                <ul>
                    <li>
                        We are a dedicated, cross-functional team responsible for developing and maintaining the technological backbone of Mashreq Bank's payment systems. Our focus is ensuring that your payments are efficient, secure, and user-friendly, whether they are local or international.
                    </li>
                </ul>
                <div className='margin-v8'>
                    <Typography className="text-align-left scale-in-hor-right font-bold">
                        Our Mission
                    </Typography>
                    <ul>
                        <li>
                            Our mission is to develop and maintain cutting-edge payment infrastructure while driving innovation in payment solutions to meet the demands of an ever-evolving landscape. We are committed to guaranteeing security in all transactions, protecting your financial information, and ensuring a seamless user experience for all your payment needs.
                        </li>
                    </ul>
                </div>
                <div className="margin-v8">
                    <Typography className="text-align-left scale-in-hor-right font-bold">
                        What we Support ?
                    </Typography>
                    <Typography className="text-align-left scale-in-hor-right margin-v8">
                        <span className='font-bold'>Local Payments (UAE & IBG Countries):</span> We facilitate convenient and secure money transfers tailored to regional needs. This includes:
                    </Typography>
                    <ol>
                        <li>
                            Wages Protection System (WPS): Ensures timely and secure salary payments.
                        </li>
                        <li>
                            UAEFTS (UAE Fund Transfer System): Enables quick money transfers within the UAE.
                        </li>
                        <li>
                            ICCS (Cheque Clearing System): Process both inward and outward cheque transactions.
                        </li>
                        <li>
                            ACH (Automated Clearing House): Facilitates bulk processing of repetitive payments.
                        </li>
                        <li>
                            ECC (Electronic Cheque Clearing) System: Enables high-volume processing of recurring payments.
                        </li>
                    </ol>
                </div>
                <div>
                    <Typography className="text-align-left scale-in-hor-right margin-v8">
                        <span className='font-bold'>Instant Payment Platforms (IPP):</span> Secure Transactions, Simplified - We streamline and manage various payment processes like
                    </Typography>
                    <ol>
                        <li>
                            QR payments, card payments, wire transfers, digital wallet transactions.
                        </li>
                        <li>
                            Provide flexibility to adapt to new payment methods.
                        </li>
                    </ol>
                </div>
                <div>
                    <Typography className="text-align-left scale-in-hor-right margin-v8">
                        <span className='font-bold'>Cross-Border Payments:</span> We offer a comprehensive suite of solutions for international transactions, aided by:
                    </Typography>
                    <ol>
                        <li>
                            SWIFT & Side Viewer: for enhanced efficiency, security, and transparency in global payments.
                        </li>
                    </ol>
                </div>
                <div>
                    <Typography className="text-align-left scale-in-hor-right margin-v8">
                        <span className='font-bold'>Digitization and Reconciliation Platforms:</span> Optimizing the Payment Processes with Digitization and Reconciliation with:
                    </Typography>
                    <ol>
                        <li>
                            Transaction Lifecycle Management: Oversees the entire journey of a financial transaction.
                        </li>
                        <li>
                            Dexter (Cheque Clearing System): Efficiently handles cheque processing.
                        </li>
                        <li>
                            Sherlock (Payment Investigation Platforms): Detects and resolves payment discrepancies.
                        </li>
                        <li>
                            Braavos (Charges Management System): Reconciles charges and ensures compliance.
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <Typography className='text-focus-in text-align-left'>
                    We ensure efficiency, security, and innovation, driving:
                </Typography>
                <ul className='payment-unit-details-innovation'>
                    <li>
                        Customer Satisfaction through seamless, secure payment experiences.
                    </li>
                    <li>
                        Operational Efficiency by streamlining processes and reducing costs.
                    </li>
                    <li>
                        Competitiveness by staying ahead in the evolving payments landscape.
                    </li>
                </ul>
            </div>
            <Typography className="font-bold">
                Our commitment is to provide you with innovative and reliable financial solutions that empower your financial journey!
            </Typography>
        </div>
    )
}
