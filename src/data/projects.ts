import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'modelcompare',
    name: 'ModelCompare',
    type: 'Built Product · AI',
    category: 'built',
    tagline: 'Multi-model AI comparison tool',
    description:
      'A multi-model AI comparison tool that helps users compare LLM responses for specific tasks using configurable evaluation criteria.',
    tags: ['AI', 'LLMs', 'Product Design', 'Evaluation'],
    links: [
      { label: 'Live Demo', url: 'https://model-compare-chatbot.vercel.app/', type: 'live' },
    ],
    metrics: [
      { value: '3', label: 'Models compared simultaneously' },
      { value: '6–7s', label: 'AI comparison latency', highlight: true },
      { value: 'Custom', label: 'Evaluation criteria per task' },
      { value: 'Free', label: 'No signup required' },
    ],
    overview:
      'ModelCompare is a working prototype that lets users send a single prompt to multiple LLMs side-by-side and evaluate responses against configurable criteria. It helps product teams and individuals pick the right model for a given task without manually testing each model separately.',
    sections: [
      {
        heading: 'Problem',
        body: 'Choosing the right LLM for a specific task is hard. Different models excel at different things — reasoning, creative writing, coding, summarization. Most users test models one at a time, making it slow and difficult to compare quality objectively.',
      },
      {
        heading: 'Solution',
        body: 'ModelCompare sends a single prompt to up to three models simultaneously and displays responses side-by-side. Users define evaluation criteria relevant to their task (accuracy, tone, structure, etc.) and score each model against those criteria.',
        items: [
          'Send one prompt to 3 models at once',
          'Side-by-side response comparison',
          'Configurable evaluation criteria per task',
          'Score-based model recommendation',
        ],
      },
      {
        heading: 'Product Decisions',
        subsections: [
          {
            heading: 'Configurable Criteria Over Fixed Rubrics',
            body: 'Different tasks need different evaluation dimensions. Instead of forcing a universal rubric, users define what matters for their specific use case.',
          },
          {
            heading: 'Side-by-Side Over Sequential Testing',
            body: 'Comparing models sequentially is slow and biased by recency. Side-by-side comparison reduces cognitive load and makes differences immediately visible.',
          },
          {
            heading: 'No Signup Required',
            body: 'Removing the signup barrier lets users try the tool immediately. The value proposition is clear in the first interaction.',
          },
        ],
      },
      {
        heading: 'Technical Approach',
        items: [
          'OpenRouter API for multi-model access',
          'Streamlit for rapid frontend iteration',
          'Concurrent API calls for parallel response fetching',
          'Deployed on Vercel for public access',
        ],
      },
      {
        heading: 'What I Learned',
        items: [
          'Model evaluation is highly contextual — no single model wins every task',
          'Latency perception matters as much as actual latency in comparison UIs',
          'Configurable criteria created more value than a fixed scoring rubric would have',
        ],
      },
    ],
    visualStyle: 'neumorphism',
    accentColor: '#6B705C',
  },
  {
    slug: 'voice-of-customer',
    name: 'Voice-of-Customer Agent',
    type: 'Built Product · AI · VoC',
    category: 'built',
    tagline: 'AI agent for review-to-insight automation',
    description:
      'An AI agent that automatically turns app reviews into structured product insights, user impact, and issue prioritization.',
    tags: ['AI', 'VoC', 'Automation', 'Product Insights'],
    links: [
      { label: 'Live Demo', url: 'https://voc-ai-agent-mxvbqu7omcjfvmrkykxvbp.streamlit.app/', type: 'live' },
    ],
    metrics: [
      { value: 'Auto', label: 'Review-to-insight pipeline' },
      { value: 'Priority', label: 'Issue scoring & ranking', highlight: true },
      { value: 'Structured', label: 'Insight categorization' },
      { value: 'Streamlit', label: 'Deployed on Streamlit Cloud' },
    ],
    overview:
      'The Voice-of-Customer Agent ingests app store reviews and uses AI to extract structured product insights — categorizing issues, scoring user impact, and prioritizing what the product team should address first.',
    sections: [
      {
        heading: 'Problem',
        body: 'Product teams receive hundreds of app reviews, but most are unstructured and noisy. Manually reading, categorizing, and prioritizing reviews is time-consuming and inconsistent across team members.',
      },
      {
        heading: 'Solution',
        body: 'The VoC Agent automatically processes reviews and produces structured outputs: categorized issues, user impact scores, and a prioritized list of what to address first.',
        items: [
          'Ingests raw app store reviews',
          'Categorizes issues by type (bug, feature request, UX, performance)',
          'Scores user impact based on review language and frequency',
          'Generates a prioritized action list for product teams',
        ],
      },
      {
        heading: 'Product Decisions',
        subsections: [
          {
            heading: 'Impact Scoring Over Sentiment Analysis',
            body: 'Sentiment alone does not tell a PM what to fix. A 1-star review with specific feedback about a payment failure is more actionable than a vague 1-star. Impact scoring weights specificity and frequency.',
          },
          {
            heading: 'Categorization Before Prioritization',
            body: 'Grouping similar issues first prevents the team from treating every review as unique. Categorization enables pattern detection across the review stream.',
          },
          {
            heading: 'Streamlit for Rapid Deployment',
            body: 'The tool needed to be accessible to non-technical stakeholders. Streamlit provided a web UI without frontend development overhead.',
          },
        ],
      },
      {
        heading: 'How It Works',
        items: [
          'Reviews are ingested as raw text data',
          'AI categorizes each review into issue types',
          'Impact scoring evaluates severity and frequency',
          'A prioritized list is generated with recommended actions',
        ],
      },
      {
        heading: 'What I Learned',
        items: [
          'AI is most valuable in VoC when it structures data, not when it summarizes it',
          'Impact scoring is more useful than sentiment for product prioritization',
          'Pattern detection across reviews surfaces issues that individual reviews miss',
        ],
      },
    ],
    visualStyle: 'glassmorphism',
    accentColor: '#7C5C9E',
  },
  {
    slug: 'rapido-night',
    name: 'Rapido Night Safety',
    type: 'Interactive Prototype · Product Design',
    category: 'prototype',
    tagline: 'Safety-focused ride experience concept',
    description:
      'A safety-focused ride experience designed to give riders faster access to trusted contacts, ride information, live location, and emergency support.',
    tags: ['Product Design', 'Safety', 'Ride-hailing', 'Prototype'],
    links: [
      { label: 'Prototype', url: 'https://bolt.new/p/70667912', type: 'prototype' },
    ],
    metrics: [
      { value: '1-tap', label: 'Emergency SOS access' },
      { value: 'Live', label: 'Location sharing with contacts' },
      { value: '4 layers', label: 'Safety verification flow', highlight: true },
      { value: 'Trusted', label: 'Contact notification system' },
    ],
    overview:
      'Rapido Night Safety is an interactive prototype that reimagines the night-time ride experience with layered safety features — driver verification, trusted contact sharing, live location tracking, and one-tap emergency SOS.',
    sections: [
      {
        heading: 'Problem',
        body: 'Night-time rides carry higher perceived risk, especially for solo riders. Existing ride-hailing apps treat safety as a secondary feature buried in menus rather than a first-class experience.',
      },
      {
        heading: 'Solution',
        body: 'A safety-first ride experience that layers four key protections into the booking and ride flow:',
        items: [
          'Driver Verification — visible verification badge and ride details before pickup',
          'Trusted Contacts — automatic sharing of ride details with pre-selected contacts',
          'Live Sharing — real-time location sharing throughout the ride',
          'Emergency SOS — one-tap access to emergency services and trusted contacts',
        ],
      },
      {
        heading: 'Product Decisions',
        subsections: [
          {
            heading: 'Safety as a First-Class Flow',
            body: 'Instead of burying safety features in a menu, the night safety experience is triggered contextually when a ride is booked at night. Safety becomes part of the core flow, not an afterthought.',
          },
          {
            heading: 'Trusted Contacts Over Emergency Contacts Only',
            body: 'Traditional apps only offer emergency contacts. Trusted contacts receive proactive ride updates, creating a passive safety net that does not require the rider to act in an emergency.',
          },
          {
            heading: 'Layered Over Single-Feature',
            body: 'No single safety feature is sufficient. The combination of verification, sharing, tracking, and SOS creates a system where each layer reinforces the others.',
          },
        ],
      },
      {
        heading: 'Design Approach',
        items: [
          'Safety features introduced contextually at night booking',
          'Progressive disclosure — details expand only when needed',
          'Clear visual hierarchy for emergency actions',
          'Minimal cognitive load during the ride',
        ],
      },
      {
        heading: 'What I Learned',
        items: [
          'Contextual triggers are more effective than manual feature discovery',
          'Passive safety nets (auto-sharing) complement active ones (SOS)',
          'Layered design prevents any single point of failure in safety flows',
        ],
      },
    ],
    visualStyle: 'parallax',
    accentColor: '#B86F52',
  },
  {
    slug: 'quickbite',
    name: 'QuickBite Payment SDK RCA',
    type: 'Product Case Study · RCA',
    category: 'study',
    tagline: 'Root cause analysis of checkout completion drop',
    description:
      'Diagnosing a drop in checkout completion after a payment SDK update and identifying the backend callback-processing failure.',
    tags: ['RCA', 'Metrics', 'Funnels', 'Payments'],
    links: [],
    metrics: [
      { value: '92% → 82%', label: 'Order completion rate drop' },
      { value: '+10pp', label: 'Completion rate decline' },
      { value: 'Callback', label: 'Root cause identified', highlight: true },
      { value: 'Backend', label: 'Failure isolated to SDK update' },
    ],
    overview:
      'A root cause analysis case study where checkout completion dropped from 92% to 82% after a payment SDK update. The investigation traces the drop through funnel analysis, hypothesis testing, and root cause identification.',
    sections: [
      {
        heading: 'Situation',
        body: 'QuickBite, a food delivery platform, updated its payment SDK. Within 48 hours, the order completion rate dropped from 92% to 82%. The engineering team confirmed the SDK was deployed successfully with no errors in their logs.',
      },
      {
        heading: 'Investigation Approach',
        items: [
          'Funnel analysis: measured drop-off at each checkout step',
          'Segmentation: checked by payment method, device, OS, and geography',
          'Hypothesis testing: generated and tested multiple root cause hypotheses',
          'Timeline correlation: matched the drop to the exact SDK deployment time',
        ],
      },
      {
        heading: 'Funnel Analysis',
        body: 'The checkout funnel was analyzed step by step:',
        subsections: [
          {
            heading: 'Steps 1–3: Normal',
            body: 'Cart → Address → Payment Method selection showed no change in conversion. Users were reaching the payment screen at the same rate as before.',
          },
          {
            heading: 'Step 4: Payment Processing',
            body: 'The drop occurred after payment submission. Users clicked "Pay" but the order was not confirmed. The completion rate at this step dropped from ~95% to ~86%.',
          },
          {
            heading: 'Step 5: Order Confirmation',
            body: 'No additional drop at confirmation. The issue was specifically in the payment-to-confirmation transition, not in order creation.',
          },
        ],
      },
      {
        heading: 'Hypothesis Testing',
        subsections: [
          {
            heading: 'H1: Frontend Payment UI Bug',
            body: 'Tested by checking if the drop was device-specific. Drop was consistent across iOS, Android, and web. Rejected.',
          },
          {
            heading: 'H2: Payment Gateway Downtime',
            body: 'Checked gateway status pages and error rates. No anomalies. Rejected.',
          },
          {
            heading: 'H3: Backend Callback Processing Failure',
            body: 'The new SDK changed how payment callbacks were processed. The old SDK sent callbacks synchronously; the new SDK sent them asynchronously. If the callback handler did not acknowledge the async callback within 5 seconds, the SDK marked the payment as failed. Confirmed.',
          },
        ],
      },
      {
        heading: 'Root Cause',
        body: 'The new payment SDK switched from synchronous to asynchronous callback processing. The backend callback handler was not updated to handle the async pattern. Callbacks arriving after 5 seconds were marked as failed, causing the order to appear unsuccessful even though the payment was actually completed on the gateway side.',
      },
      {
        heading: 'Resolution & Learnings',
        items: [
          'Updated the callback handler to process async callbacks with a longer timeout',
          'Added monitoring for callback acknowledgment rates',
          'SDK updates should trigger integration tests on callback handling, not just deployment checks',
          'Funnel analysis isolated the problem to a specific step, saving hours of investigation',
        ],
      },
    ],
    visualStyle: 'motion',
    accentColor: '#6B705C',
  },
  {
    slug: 'google-maps',
    name: 'Google Maps Trip Plan Assistant',
    type: 'Product Case Study · AI · Interactive Prototype',
    category: 'study',
    tagline: 'AI-powered trip planning concept',
    description:
      'An AI-powered trip planning concept designed to reduce the effort required to research and organize personalized travel itineraries.',
    tags: ['AI', 'Travel', 'Itinerary', 'Prototype'],
    links: [
      { label: 'Prototype', url: 'https://bolt.new/p/71624025', type: 'prototype' },
    ],
    metrics: [
      { value: '54%', label: 'Places visited from AI itinerary' },
      { value: 'AI', label: 'Personalized itinerary generation', highlight: true },
      { value: 'Auto', label: 'Route & time optimization' },
      { value: '1 input', label: 'Destination + preferences' },
    ],
    overview:
      'An AI-powered trip planning assistant concept for Google Maps that generates personalized itineraries from a destination and user preferences, reducing the research and planning effort for travelers.',
    sections: [
      {
        heading: 'Problem',
        body: 'Planning a trip requires researching destinations, reading reviews, checking distances, estimating travel times, and organizing an itinerary. This process takes hours and often results in suboptimal plans because information is scattered across multiple tools.',
      },
      {
        heading: 'Solution',
        body: 'A trip planning assistant within Google Maps that takes a destination and user preferences (interests, budget, duration) and generates a personalized, time-optimized itinerary with mapped routes.',
        items: [
          'Input: destination + preferences (interests, duration, budget)',
          'AI generates a day-by-day itinerary with mapped activities',
          'Route optimization between locations',
          'Editable itinerary — users can swap, add, or remove activities',
        ],
      },
      {
        heading: 'Product Decisions',
        subsections: [
          {
            heading: 'Within Google Maps Over Standalone App',
            body: 'Google Maps already has location data, reviews, and routing. Building the assistant within Maps leverages existing infrastructure and user habits rather than competing for a new app install.',
          },
          {
            heading: 'Editable Over Fixed Itineraries',
            body: 'AI-generated itineraries are a starting point, not a final plan. Allowing edits respects that travelers have preferences AI cannot fully predict.',
          },
          {
            heading: 'Route Optimization Over List Generation',
            body: 'A list of places is not an itinerary. Route optimization between locations creates a time-feasible plan that accounts for travel time, not just visit time.',
          },
        ],
      },
      {
        heading: 'Validation Approach',
        items: [
          'Built an interactive prototype to test the core flow',
          'Measured what percentage of AI-suggested places users actually visited',
          '54% of suggested places were visited — indicating the AI recommendations were relevant',
          'Collected feedback on editability and route optimization',
        ],
      },
      {
        heading: 'What I Learned',
        items: [
          'AI itineraries work best as editable suggestions, not fixed plans',
          'Route optimization is what turns a list into an itinerary',
          'Existing platforms (Maps) offer distribution advantages over standalone apps',
          '54% visit rate suggests the AI recommendations were genuinely useful',
        ],
      },
    ],
    visualStyle: 'micro',
    accentColor: '#2E6F40',
  },
  {
    slug: 'ai-study-assistant',
    name: 'AI Study Assistant',
    type: 'Product Case Study · AI · RAG',
    category: 'study',
    tagline: 'RAG-powered study material assistant',
    description:
      'An AI study assistant designed to help engineering students quickly retrieve and understand information from their study material.',
    tags: ['AI', 'RAG', 'Education', 'Embeddings'],
    links: [],
    metrics: [
      { value: 'RAG', label: 'Retrieval-augmented generation' },
      { value: 'Cited', label: 'Answers with source references', highlight: true },
      { value: 'Grounded', label: 'Only answers from uploaded material' },
      { value: 'Chunks', label: 'Semantic retrieval pipeline' },
    ],
    overview:
      'An AI study assistant that uses RAG (Retrieval-Augmented Generation) to help engineering students retrieve and understand information from their uploaded study material, with cited sources for every answer.',
    sections: [
      {
        heading: 'Problem',
        body: 'Engineering students often struggle to find specific information in dense textbooks and notes. Traditional search does not understand questions in natural language, and generic AI chatbots answer from the entire internet, not from the specific course material.',
      },
      {
        heading: 'Solution',
        body: 'A RAG-based study assistant that ingests uploaded study material, chunks it semantically, and answers questions using only that material — with citations to the source passages.',
        items: [
          'Upload study material (PDFs, notes)',
          'Material is chunked and embedded for semantic search',
          'Questions are answered using only the uploaded material',
          'Every answer includes source citations',
        ],
      },
      {
        heading: 'Product Decisions',
        subsections: [
          {
            heading: 'RAG Over Fine-Tuning',
            body: 'Fine-tuning requires substantial data and compute. RAG achieves grounded answers by retrieving relevant chunks at query time, which is more flexible and cost-effective for a study tool.',
          },
          {
            heading: 'Grounded Answers Over Open Internet',
            body: 'Students need answers from their specific material, not from the internet. Grounding prevents hallucination and ensures the answer matches what the course teaches.',
          },
          {
            heading: 'Citations Over Unreferenced Answers',
            body: 'Citations let students verify answers and find the original context. This builds trust and supports learning rather than just answer-getting.',
          },
        ],
      },
      {
        heading: 'Technical Pipeline',
        items: [
          'Document ingestion and text extraction',
          'Semantic chunking of study material',
          'Embedding generation for each chunk',
          'Query embedding and similarity search',
          'Retrieved chunks fed to LLM for answer generation',
          'Source citations attached to each answer',
        ],
      },
      {
        heading: 'What I Learned',
        items: [
          'RAG is more practical than fine-tuning for document-specific Q&A',
          'Grounding prevents hallucination and builds user trust',
          'Citations transform the tool from answer-giver to learning aid',
          'Chunking strategy significantly affects retrieval quality',
        ],
      },
    ],
    visualStyle: 'hybrid',
    accentColor: '#4B3869',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
