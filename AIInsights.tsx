import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Spinner from './Spinner';

const AIInsights: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const stream = await ai.models.generateContentStream({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    systemInstruction: `You are Grind AI, an expert athletic performance and mentorship assistant for Grind360.
                    Your goal is to provide safe, effective, and motivational advice on sports training, nutrition, and mental resilience for athletes at all levels (youth, amateur, professional).
                    Your tone must be encouraging, professional, and knowledgeable. Always prioritize safety.
                    For questions about injuries or personalized medical advice, firmly state that you are an AI and cannot provide medical advice, and strongly recommend consulting a qualified healthcare professional.
                    Keep responses concise, actionable, and easy to understand. Format answers with paragraphs for readability.`
                }
            });

            let text = '';
            for await (const chunk of stream) {
                text += chunk.text;
                setResponse(text);
            }

        } catch (err: unknown) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ai-insights" className="py-20 md:py-32 bg-charcoal">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="font-headline text-5xl md:text-6xl text-white mb-4">
                        AI-POWERED <span className="text-lime">INSIGHTS</span>
                    </h2>
                    <p className="text-lg text-silver mb-12 max-w-3xl mx-auto">
                        Ask our AI assistant a question about training, nutrition, or mindset to get instant, expert-backed guidance for your athletic journey.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-jet p-8 rounded-lg shadow-2xl">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="ai-prompt" className="block text-silver mb-2 font-body sr-only">Your Question</label>
                                <textarea
                                    id="ai-prompt"
                                    name="ai-prompt"
                                    rows={3}
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="e.g., How can I improve my explosive power for basketball?"
                                    required
                                    className="w-full bg-charcoal border border-silver/30 text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-lime transition-shadow"
                                    disabled={isLoading}
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="font-headline text-xl bg-lime text-jet px-10 py-4 rounded-sm shadow-lg shadow-lime/20 hover:bg-white hover:shadow-xl hover:shadow-lime/40 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center mx-auto"
                                >
                                    {isLoading && <Spinner />}
                                    {isLoading ? 'GENERATING...' : 'GET INSIGHT'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {(response || error) && (
                        <div className="mt-8 bg-jet p-8 rounded-lg shadow-2xl animate-fadeIn">
                            {error ? (
                                <div className="text-red-400">
                                    <h3 className="font-headline text-2xl mb-2">Error</h3>
                                    <p>{error}</p>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-headline text-2xl text-lime mb-4">GRIND AI SAYS:</h3>
                                    <div className="prose prose-invert max-w-none text-silver space-y-4 whitespace-pre-wrap">
                                        {response}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AIInsights;