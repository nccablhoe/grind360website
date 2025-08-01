import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setFeedbackMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || 'Something went wrong.');
            }

            setStatus('success');
            setFeedbackMessage('Thank you for your message! We will be in touch soon.');
            (e.target as HTMLFormElement).reset();
        } catch (error: unknown) {
            setStatus('error');
            setFeedbackMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
        }
    };

    const getButtonText = () => {
        switch (status) {
            case 'submitting':
                return 'SENDING...';
            case 'success':
                return 'MESSAGE SENT!';
            default:
                return 'SEND MESSAGE';
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-jet">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="font-headline text-5xl md:text-6xl text-white mb-4">
                        GET IN <span className="text-lime">TOUCH</span>
                    </h2>
                    <p className="text-lg text-silver mb-12 max-w-2xl mx-auto">
                        Have a question or ready to build the whole athlete? Drop us a line.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-charcoal p-8 md:p-12 rounded-lg shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-silver mb-2 font-body">Name</label>
                                <input type="text" id="name" name="name" required className="w-full bg-jet border border-silver/30 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-lime transition-shadow" disabled={status === 'submitting'} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-silver mb-2 font-body">Email</label>
                                <input type="email" id="email" name="email" required className="w-full bg-jet border border-silver/30 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-lime transition-shadow" disabled={status === 'submitting'} />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-silver mb-2 font-body">Message</label>
                            <textarea id="message" name="message" rows={5} required className="w-full bg-jet border border-silver/30 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-lime transition-shadow" disabled={status === 'submitting'}></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" disabled={status === 'submitting' || status === 'success'} className="font-headline text-xl bg-lime text-jet px-10 py-4 rounded-sm shadow-lg shadow-lime/20 hover:bg-white hover:shadow-xl hover:shadow-lime/40 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
                                {getButtonText()}
                            </button>
                        </div>
                        {feedbackMessage && (
                            <p className={`mt-4 text-center text-lg ${status === 'error' ? 'text-red-500' : 'text-lime'}`}>
                                {feedbackMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
