export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  image: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const mayaProfile = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  credentials: "PsyD",
  role: "Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  serviceModes: [
    "In-person sessions in Santa Monica",
    "Secure telehealth across California",
  ],
  clientFocus:
    "Adults, especially thoughtful, high-achieving, and self-aware individuals navigating anxiety, overwhelm, burnout, perfectionism, or past experiences.",
  approach:
    "Warm, collaborative, and grounded. Sessions provide supportive structure while holding space for depth and reflection.",
  traumaPhilosophy:
    "Carefully paced, safety and stabilization first, with a focus on helping clients feel more regulated in daily life.",
  modalities: [
    {
      name: "Cognitive-Behavioral Therapy (CBT)",
      description: "Practical cognitive and behavioral tools to identify and shift unhelpful thought and stress patterns.",
    },
    {
      name: "EMDR Therapy",
      description: "Evidence-based trauma processing with a strong emphasis on pacing, grounding, and stabilization.",
    },
    {
      name: "Mindfulness-Based Practices",
      description: "Cultivating present-moment awareness, emotional balance, and reduced reactivity to daily stress.",
    },
    {
      name: "Body-Oriented Techniques",
      description: "Somatic and nervous-system regulation to address the physiological components of stress and trauma.",
    },
  ],
  hero: {
    eyebrow: "IN-PERSON THERAPY IN SANTA MONICA + SECURE TELEHEALTH ACROSS CALIFORNIA",
    title: "Anxiety & Trauma Therapy in Santa Monica for Adults Ready to Feel Grounded Again",
    subtext:
      "When life looks functional from the outside but feels exhausting underneath, therapy can offer a place to slow down, understand what is happening, and build steadier ways of moving through work, relationships, and daily life.",
    primaryCta: "Explore Therapy Options",
    secondaryCta: "Meet Dr. Maya",
  },
  empathy: {
    eyebrow: "UNDERSTANDING YOUR EXPERIENCE",
    headline: "You may be keeping up with everything while internally feeling overwhelmed.",
    paragraphs: [
      "You might be managing your responsibilities, career, and relationships while internally feeling tense, exhausted, or stuck in chronic overthinking.",
      "Perhaps you find yourself sleeping poorly, constantly bracing for the next problem, or noticing that earlier experiences still shape how safe, worthy, and confident you feel today.",
      "Therapy can make room to understand those patterns with care and clarity—without asking you to simply push harder or ignore what your mind and body are telling you.",
    ],
    highlights: [
      "Constant worry & nervous system alert",
      "Perfectionism & internal pressure",
      "Impacts of past traumatic experiences",
      "Chronic stress & emotional exhaustion",
    ],
  },
  services: [
    {
      id: "anxiety-panic",
      title: "Anxiety & Panic Therapy",
      subtitle: "Relief for constant worry, overthinking, and nervous system tension",
      description:
        "Support for constant worry, overthinking, physical tension, sleep disruption, panic, and the feeling that your nervous system is always on high alert. Sessions combine practical CBT tools, mindfulness, and body-oriented awareness to help you understand your triggers and build steady regulation.",
      focusAreas: [
        "Chronic worry and overthinking",
        "Physical tension and panic symptoms",
        "Sleep disruption and stress cycles",
        "Nervous system regulation tools",
      ],
      image: "/images/services/service-anxiety.jpg",
      imageAlt: "Serene morning journal with warm tea on a natural wood table in peaceful sunlight",
    },
    {
      id: "trauma-emdr",
      title: "Trauma & EMDR Therapy",
      subtitle: "Paced, stabilizing processing for single-event and longer-standing trauma",
      description:
        "Carefully paced trauma work for single events or longer-standing experiences connected to childhood, relationships, or chronic stress. Maya integrates EMDR and body-oriented methods with a foundational emphasis on safety, stabilization, and greater day-to-day regulation.",
      focusAreas: [
        "Single-incident or complex trauma",
        "Childhood and relational stress",
        "EMDR evidence-based processing",
        "Stabilization and somatic grounding",
      ],
      image: "/images/services/service-trauma.jpg",
      imageAlt: "Grounding, warm interior sanctuary with natural woven wall art and eucalyptus branches in ceramic vase",
    },
    {
      id: "burnout-perfectionism",
      title: "Burnout & Perfectionism Therapy",
      subtitle: "A reflective space for high-achieving professionals and creatives",
      description:
        "A space for professionals, entrepreneurs, and creatives who have spent years pushing through pressure and now feel exhausted or disconnected from themselves. Therapy can help you slow down, dismantle harsh internal expectations, and develop more sustainable ways of living and working.",
      focusAreas: [
        "High-functioning anxiety & perfectionism",
        "Creative & career burnout",
        "Setting realistic, grounded boundaries",
        "Reconnecting with internal balance",
      ],
      image: "/images/services/service-burnout.jpg",
      imageAlt: "Peaceful California garden terrace with olive trees, terracotta pots, and natural morning light",
    },
  ] as ServiceItem[],
  breathingStatement: {
    quote:
      "Therapy is not about fixing what is broken—it is a collaborative space to slow down, understand your internal cues, and cultivate lasting resilience.",
    attribution: "Dr. Maya Reynolds, PsyD",
  },
  approachSection: {
    eyebrow: "THERAPEUTIC APPROACH",
    title: "How Therapy Works With Dr. Maya",
    description:
      "Dr. Maya Reynolds takes a warm, collaborative, and grounded approach. Sessions have enough structure to feel supportive and purposeful, while still leaving room for open reflection and depth. Rather than applying a one-size-fits-all model, she integrates evidence-based modalities tailored to your unique emotional and physiological needs.",
    corePrinciples: [
      {
        title: "Safety & Stabilization First",
        text: "Trauma and chronic stress work is never rushed. We establish safety, grounded coping mechanisms, and emotional stability before exploring deeper layers.",
      },
      {
        title: "Mind & Body Integration",
        text: "Recognizing how the nervous system stores stress, sessions bridge cognitive insight (CBT) with somatic mindfulness and body-aware techniques.",
      },
      {
        title: "Collaborative & Respectful",
        text: "You are the expert on your life. Therapy is a respectful partnership where we work at a sustainable pace aligned with your personal values.",
      },
    ],
  },
  about: {
    eyebrow: "ABOUT DR. MAYA REYNOLDS",
    title: "A Grounded, Compassionate Partner in Your Healing Journey",
    paragraphs: [
      "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist based in Santa Monica, California. She works with adults navigating anxiety, panic, trauma, burnout, perfectionism, and the effects of chronic stress.",
      "Her goal is not only short-term symptom relief, but helping clients develop deep insight, resilience, and a stronger relationship with themselves over time.",
      "In her practice, she combines structured evidence-based interventions—such as CBT and EMDR—with mindfulness and nervous-system awareness, fostering an environment where clients feel truly seen, safe, and supported.",
    ],
    details: [
      { label: "Degree & Licensure", value: "PsyD, Licensed Clinical Psychologist" },
      { label: "Office Location", value: "Santa Monica, California" },
      { label: "Session Formats", value: "In-Person (Santa Monica) & California Telehealth" },
      { label: "Clinical Focus", value: "Adults, Anxiety, Trauma, Burnout & Perfectionism" },
    ],
    image: "/images/maya/maya-portrait.jpg",
    imageAlt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in her Santa Monica office",
  },
  office: {
    eyebrow: "OUR OFFICE SPACE",
    title: "A Calm Space for Therapy in Santa Monica",
    description:
      "In-person sessions are offered from Dr. Maya Reynolds' Santa Monica office at 123th Street 45 W, Santa Monica, CA 90401. The office is quiet and private, filled with warm natural light and designed with a comfortable, uncluttered environment to help you feel calm, present, and grounded.",
    telehealthNote:
      "For clients residing throughout California who prefer virtual care or are unable to commute to Santa Monica, secure telehealth video sessions are available.",
    features: [
      {
        title: "Quiet & Private",
        description: "A tranquil environment protected from outside noise to support deep, confidential conversation.",
      },
      {
        title: "Natural Light & Calm Atmosphere",
        description: "Large windows with organic light, soft textures, and an uncluttered design to ease cognitive load.",
      },
      {
        title: "Convenient Santa Monica Location",
        description: "Easily accessible office setting with comfortable seating designed specifically for mindful therapy.",
      },
    ],
    images: [
      {
        src: "/images/office/office-main.jpg",
        alt: "Dr. Maya Reynolds Santa Monica therapy office space",
        caption: "Main therapy office with natural lighting and comfortable seating",
      },
      {
        src: "/images/office/office-detail.jpg",
        alt: "Interior detail of Dr. Maya Reynolds Santa Monica therapy room",
        caption: "Quiet, comfortable space designed to feel calm and grounding",
      },
    ],
  },
  faqs: [
    {
      question: "Who do you work with?",
      answer:
        "Dr. Maya works with adults—often high-achieving, thoughtful, and self-aware individuals—who are navigating anxiety, panic, trauma, burnout, perfectionism, chronic stress, or the ongoing impact of earlier life experiences.",
    },
    {
      question: "What approaches do you use?",
      answer:
        "Depending on your needs, Dr. Maya integrates Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented (somatic) techniques to address both the cognitive and physiological aspects of stress.",
    },
    {
      question: "Do you offer trauma therapy?",
      answer:
        "Yes. Dr. Maya works with both single-incident and complex or longer-standing trauma. Trauma therapy is carefully paced with a strong foundation in safety, stabilization, and nervous system regulation before moving into deeper processing.",
    },
    {
      question: "Do you offer in-person and online therapy?",
      answer:
        "Yes. In-person sessions are offered at the Santa Monica office (123th Street 45 W, Santa Monica, CA 90401), and secure telehealth sessions are available for clients located in California.",
    },
    {
      question: "What is your therapy style?",
      answer:
        "Dr. Maya's style is warm, collaborative, and grounded. Sessions provide a supportive structure so you have actionable tools, while maintaining plenty of spaciousness for deeper reflection, insight, and emotional processing.",
    },
    {
      question: "What is your office like?",
      answer:
        "The Santa Monica office is a quiet, private, naturally lit space with a comfortable, uncluttered design created specifically to feel grounding, serene, and restorative from the moment you step in.",
    },
  ] as FaqItem[],
  finalCta: {
    eyebrow: "BEGIN YOUR THERAPY JOURNEY",
    title: "Ready to Create a Steadier, More Grounded Way Forward?",
    description:
      "Whether you are seeking in-person therapy in Santa Monica or secure telehealth across California, take the first step toward insight, regulation, and sustainable well-being.",
    primaryButton: "Send Practice Inquiry",
    secondaryButton: "Explore Services",
  },
  disclaimer: {
    medical:
      "Disclaimer: This website is for informational purposes. If you are experiencing a life-threatening mental health emergency, please call 988 (Suicide & Crisis Lifeline), dial 911, or go to your nearest emergency room.",
    academic:
      "Demonstration Site: Created as an informational and visual showcase for Dr. Maya Reynolds, PsyD.",
  },
} as const;
