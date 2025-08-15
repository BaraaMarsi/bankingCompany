const BenefitsData = [
    {
        title: "Competitive Compensation",
        desc: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
        imageUrl: "OurBenefitsIcons/benefit_icon_1.svg",
    },
     {
        title: "Health and Wellness",
        desc: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
        imageUrl: "OurBenefitsIcons/benefit_icon_2.svg",
    },
     {
        title: "Retirement Planning",
        desc: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
        imageUrl: "OurBenefitsIcons/benefit_icon_3.svg",
    },
     {
        title: "Work-Life Balance",
        desc: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
        imageUrl: "OurBenefitsIcons/benefit_icon_4.svg",
    },
]
export default BenefitsData;

const data = JSON.stringify(BenefitsData)
localStorage.setItem('benefits' , data)