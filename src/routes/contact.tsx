import { createFileRoute } from '@tanstack/react-router'
import ContactForm from '@/components/ContactForm'
import { MdEmail } from 'react-icons/md'
import PageHeader from '@/components/PageHeader'

export const Route = createFileRoute('/contact')({
    component: Contact,
    head: () => ({
        meta: [
            {
                title: 'Contact Me - Andrew Christian Young',
            },
            {
                name: 'description',
                content: 'Contact me.',
            },
        ],
    }),
})

function Contact() {
    return (
        <>
            <PageHeader title="Contact" icon={MdEmail} />

            <ContactForm />
        </>
    )
}
