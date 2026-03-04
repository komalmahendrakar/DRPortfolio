'use server';
/**
 * @fileOverview AI Assistant for Orthopedic and Spine inquiries.
 *
 * - orthoAssistant - A function that handles patient inquiries about orthopedic health.
 * - OrthoAssistantInput - The input type for the assistant.
 * - OrthoAssistantOutput - The return type for the assistant.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OrthoAssistantInputSchema = z.object({
  message: z.string().describe('The patient\'s question or concern.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    text: z.string()
  })).optional().describe('Previous conversation history.'),
});
export type OrthoAssistantInput = z.infer<typeof OrthoAssistantInputSchema>;

const OrthoAssistantOutputSchema = z.object({
  reply: z.string().describe('The AI\'s response to the patient.'),
  suggestedAction: z.enum(['book_appointment', 'emergency', 'none']).describe('A suggested next step for the user.'),
});
export type OrthoAssistantOutput = z.infer<typeof OrthoAssistantOutputSchema>;

const prompt = ai.definePrompt({
  name: 'orthoAssistantPrompt',
  input: { schema: OrthoAssistantInputSchema },
  output: { schema: OrthoAssistantOutputSchema },
  system: `You are an expert medical AI assistant for Dr. Poornesh Gowda, an Orthopedic and Spine Surgeon. 
  Your goal is to provide helpful, professional, and reassuring information about orthopedic conditions, spine health, and joint replacements.
  
  GUIDELINES:
  1. Always remind users that you are an AI and your advice does not replace a clinical consultation.
  2. If the user describes severe symptoms like loss of bowel control, sudden paralysis, or extreme trauma, set suggestedAction to 'emergency'.
  3. If the user seems interested in treatment or has chronic pain, set suggestedAction to 'book_appointment'.
  4. Be empathetic but professional. 
  5. Mention Dr. Poornesh Gowda's 9+ years of experience when relevant.
  6. The clinic is located at The Bangalore Hospital, Basavanagudi.
  
  CONTEXT:
  Dr. Poornesh Gowda specializes in:
  - Spine Surgery (Micro-discectomy, Spinal Fusion)
  - Joint Replacement (Total Knee/Hip Replacement)
  - Complex Trauma & Fractures
  - Orthopedic Oncology`,
  prompt: `
  Conversation History:
  {{#each history}}
  {{role}}: {{{text}}}
  {{/each}}
  
  Patient: {{{message}}}`,
});

export async function orthoAssistant(input: OrthoAssistantInput): Promise<OrthoAssistantOutput> {
  const { output } = await prompt(input);
  if (!output) throw new Error('Failed to generate response');
  return output;
}
