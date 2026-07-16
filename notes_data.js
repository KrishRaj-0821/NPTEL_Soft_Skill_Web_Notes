// NPTEL Soft Skills (noc26_hs193) Course Data
// Instructor: Prof. Binod Mishra (IIT Roorkee)

const lecturesData = [
  {
    id: 1,
    week: 1,
    title: "Introduction to Soft Skills",
    youtubeId: "vEpzXQ1994o",
    objectives: [
      "Understand Soft Skills as an 'umbrella term' for personality and social graces.",
      "Distinguish between Hard Skills (academic/technical) and Soft Skills (behavioral/interpersonal).",
      "Analyze the employability crisis and the qualification irony in the global market."
    ],
    notes: `
      <div class="space-y-8">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">Core Conceptual Framework</h3>
          <p class="text-sm text-slate-500 mt-1">Syllabus foundation and definitions.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="text-amber-800 font-semibold mb-3 uppercase tracking-wider text-xs">Official Definition</h4>
            <p class="italic text-slate-700 leading-relaxed">
              "Soft Skills comprise personality traits, social graces, facility with language, personal habits, friendliness, and optimism that mark people to varying degrees."
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <span class="block text-amber-600 font-bold text-base mb-1">01. Buzzword</span>
              <p class="text-xs text-slate-500">Globally recognized career prerequisite.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <span class="block text-amber-600 font-bold text-base mb-1">02. Complement</span>
              <p class="text-xs text-slate-500">Enables hard skills to function effectively.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <span class="block text-amber-600 font-bold text-base mb-1">03. People Skills</span>
              <p class="text-xs text-slate-500">Focuses on human-to-human interaction.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <span class="block text-amber-600 font-bold text-base mb-1">04. Umbrella Term</span>
              <p class="text-xs text-slate-500">Encompasses diverse non-technical traits.</p>
            </div>
          </div>
        </div>

        <div class="bg-slate-900 rounded-2xl p-6 text-white">
          <h4 class="text-lg font-bold mb-4">The Dual Category Ecosystem</h4>
          <p class="text-sm text-slate-400 mb-6">Soft skills are broadly divided into Behavioral (internal traits) and People (external relations) skills.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <h5 class="text-amber-500 font-bold mb-3">Behavioral Skills (Internal)</h5>
              <ul class="space-y-2 text-xs text-slate-300">
                <li class="flex items-center gap-2">✔ <strong>Self-Awareness:</strong> Understanding strengths, limits, and triggers.</li>
                <li class="flex items-center gap-2">✔ <strong>Self-Confidence:</strong> Belief in your capacity to face challenges.</li>
                <li class="flex items-center gap-2">✔ <strong>Flexibility:</strong> Adaptability to changing environments.</li>
                <li class="flex items-center gap-2">✔ <strong>Persistence & Perseverance:</strong> Drive to continue despite obstacles.</li>
              </ul>
            </div>
            <div class="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <h5 class="text-amber-500 font-bold mb-3">People Skills (External)</h5>
              <ul class="space-y-2 text-xs text-slate-300">
                <li class="flex items-center gap-2">✔ <strong>Communication:</strong> Clear expression across digital/verbal media.</li>
                <li class="flex items-center gap-2">✔ <strong>Interpersonal Skills:</strong> Building rapport and trust.</li>
                <li class="flex items-center gap-2">✔ <strong>Management:</strong> Controlling time, conflicts, and stress.</li>
                <li class="flex items-center gap-2">✔ <strong>Leadership & Teamwork:</strong> Motivating and working in global teams.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-800 mb-4">Hard Skills vs. Soft Skills</h4>
          <div class="overflow-x-auto rounded-xl border border-slate-200">
            <table class="w-full text-left border-collapse text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase text-xs">
                <tr>
                  <th class="p-4 font-semibold border-b">Parameter</th>
                  <th class="p-4 font-semibold border-b">Hard Skills (Engine)</th>
                  <th class="p-4 font-semibold border-b">Soft Skills (Fuel)</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr class="hover:bg-slate-50/50">
                  <td class="p-4 font-bold border-b bg-slate-50/30">Nature</td>
                  <td class="p-4 border-b">Technical, cognitive, academic expertise</td>
                  <td class="p-4 border-b">Behavioral, relational, emotional qualities</td>
                </tr>
                <tr class="hover:bg-slate-50/50">
                  <td class="p-4 font-bold border-b bg-slate-50/30">Acquisition</td>
                  <td class="p-4 border-b">Formal schools, text books, curriculum</td>
                  <td class="p-4 border-b">Lifelong learning, reflection, experience</td>
                </tr>
                <tr class="hover:bg-slate-50/50">
                  <td class="p-4 font-bold border-b bg-slate-50/30">Primary Focus</td>
                  <td class="p-4 border-b">"What" tasks you perform</td>
                  <td class="p-4 border-b">"How" you perform and interact</td>
                </tr>
                <tr class="hover:bg-slate-50/50">
                  <td class="p-4 font-bold bg-slate-50/30">Role</td>
                  <td class="p-4">Gets you the interview ("Foot in the door")</td>
                  <td class="p-4">Secures and sustains the job ("True employability")</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-amber-50/30 p-6 rounded-2xl border border-amber-100">
          <h4 class="text-lg font-bold text-slate-800 mb-4">Socio-Economic Relevance & Crisis</h4>
          <p class="text-sm text-slate-600 mb-4">Data points proving the critical need for Soft Skills in India:</p>
          <ul class="space-y-3 text-sm text-slate-700">
            <li class="flex items-start gap-2">
              <span class="text-amber-600 font-bold">▪</span>
              <span><strong>The Qualification Irony:</strong> Census 2011 data indicates that the unemployment rate is higher among the "better qualified" graduates, as academic degrees don't correlate to workplace readiness.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-600 font-bold">▪</span>
              <span><strong>The Peon Crisis (2015):</strong> Over 23 Lakh candidates, including thousands of doctors, B.Tech, and MBA holders, applied for 368 entry-level peon jobs in Uttar Pradesh.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-600 font-bold">▪</span>
              <span><strong>The Employability Gap:</strong> Tech industry assessments report that up to 82% of engineering graduates in India are unemployable in core functional jobs due to lack of communication, adaptability, and emotional intelligence.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following is categorized as a People Skill rather than a Behavioral Skill?",
        options: ["Self-Awareness", "Self-Confidence", "Conflict Management", "Persistence"],
        answer: 2,
        explanation: "Conflict Management is an external relationship-oriented skill (People Skill), whereas Self-Awareness, Self-Confidence, and Persistence are internal traits (Behavioral Skills)."
      },
      {
        question: "In the 'Engine vs. Fuel' analogy, what represents the Soft Skills?",
        options: ["The Engine", "The Fuel", "The Vehicle Chassis", "The Driver"],
        answer: 1,
        explanation: "Hard skills represent the technical engine that gets you started, but soft skills are the fuel that powers and sustains your career forward."
      },
      {
        question: "According to Census 2011 data discussed in Lecture 1, what is the 'Qualification Irony'?",
        options: [
          "Unemployment is lower among higher-educated groups.",
          "Unemployment is actually higher among graduates and post-graduates than primary-educated individuals.",
          "More qualified individuals start businesses.",
          "Unemployment is only restricted to rural areas."
        ],
        answer: 1,
        explanation: "The irony is that higher academic qualifications in India have historically suffered from higher unemployment rates due to the lack of industry-needed soft skills."
      }
    ]
  },
  {
    id: 2,
    week: 1,
    title: "Aspects of Soft Skills",
    youtubeId: "V_9w5d_o5kU",
    objectives: [
      "Analyze the key aspects and facets that make up soft skills.",
      "Understand the relationship between internal attributes and external expressions.",
      "Recognize how grooming, behavior, and social graces form a unified impression."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">FACETS OF SOFT SKILLS</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding the multi-dimensional structure of soft skills.</p>
        </div>
        <p class="text-sm text-slate-650 leading-relaxed">
          Soft skills are not a single, isolated attribute but rather a constellation of overlapping habits, traits, and behaviors. Prof. Binod Mishra outlines that an individual's personal and professional effectiveness depends on how they synchronize their internal psychology with external presentation.
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h4 class="font-bold text-amber-700 mb-2">1. Social Graces</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Etiquette, politeness, table manners, and respect for diversity in professional and social environments.</p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h4 class="font-bold text-amber-700 mb-2">2. Personal Habits</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Punctuality, work ethic, personal hygiene, layout of workspaces, and general discipline in daily tasks.</p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h4 class="font-bold text-amber-700 mb-2">3. Optimism & Tone</h4>
            <p class="text-xs text-slate-500 leading-relaxed">A positive outlook on problems, resilience under stress, and maintaining a constructiveness in communication.</p>
          </div>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">Key Takeaway for Exams: The Three Pillars of Self-Management</h4>
          <ul class="space-y-2 text-xs text-slate-650">
            <li><strong>Self-Assessment:</strong> Regular SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis to discover internal gaps.</li>
            <li><strong>Self-Regulation:</strong> Controlling sudden impulses, outbursts, and managing emotional reactions.</li>
            <li><strong>Self-Development:</strong> Actively reading, seeking feedback, and committing to lifelong refinement of behavioral traits.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following is considered an aspect of personal habits?",
        options: ["Punctuality", "Teamwork", "Public Speaking", "Negotiation"],
        answer: 0,
        explanation: "Punctuality is a personal habit and discipline, whereas Teamwork, Public Speaking, and Negotiation involve interactive relationships (People Skills)."
      },
      {
        question: "Why is optimism considered a critical aspect of soft skills?",
        options: [
          "It helps in ignoring all negative outcomes.",
          "It provides the mental resilience to approach problem-solving constructively.",
          "It guarantees financial success.",
          "It forces others to agree with your ideas."
        ],
        answer: 1,
        explanation: "Optimism is a soft skill aspect because it provides the psychological resilience needed to face setbacks and seek positive, constructive solutions."
      },
      {
        question: "What is the primary purpose of regular self-assessment?",
        options: [
          "To show others how smart you are.",
          "To identify personal strengths and areas requiring development.",
          "To criticize colleagues.",
          "To demand a salary hike."
        ],
        answer: 1,
        explanation: "Self-assessment allows an individual to honestly map their strengths and weaknesses, which is the first step of self-development."
      }
    ]
  },
  {
    id: 3,
    week: 1,
    title: "Effective Communication Skills",
    youtubeId: "J8a46yS19aU",
    objectives: [
      "Understand the basic communication process loop.",
      "Identify the 7 Cs of effective communication.",
      "Distinguish between sender-centric and receiver-centric models."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">THE COMMUNICATION PROCESS LOOP</h3>
          <p class="text-sm text-slate-500 mt-1">How information is transmitted, decoded, and validated.</p>
        </div>

        <div class="p-6 bg-slate-900 text-white rounded-2xl text-center space-y-4">
          <p class="text-sm text-slate-400">The 5 Core Stages of the Communication Process:</p>
          <div class="flex flex-wrap justify-center items-center gap-4 text-xs font-bold">
            <span class="bg-slate-850 px-3 py-2 rounded border border-slate-700">1. Sender (Encoding)</span>
            <span class="text-amber-500">➔</span>
            <span class="bg-slate-850 px-3 py-2 rounded border border-slate-700">2. Message / Channel</span>
            <span class="text-amber-500">➔</span>
            <span class="bg-slate-850 px-3 py-2 rounded border border-slate-700">3. Receiver (Decoding)</span>
            <span class="text-amber-500">➔</span>
            <span class="bg-slate-850 px-3 py-2 rounded border border-slate-700">4. Feedback Loop</span>
          </div>
          <p class="text-xs text-slate-450 italic">Note: Communication is incomplete without Feedback!</p>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-800 mb-4">The 7 Cs of Effective Communication</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Clarity</h5>
              <p class="text-xxs text-slate-500 mt-1">Clear goals and simple expressions.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Conciseness</h5>
              <p class="text-xxs text-slate-500 mt-1">Brief and straight to the point.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Concreteness</h5>
              <p class="text-xxs text-slate-500 mt-1">Supported by facts and figures.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Correctness</h5>
              <p class="text-xxs text-slate-500 mt-1">Proper grammar and accurate data.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Consideration</h5>
              <p class="text-xxs text-slate-500 mt-1">Focusing on the recipient's perspective ('You-attitude').</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Completeness</h5>
              <p class="text-xxs text-slate-500 mt-1">Providing all facts required for action.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Courtesy</h5>
              <p class="text-xxs text-slate-500 mt-1">Polite, respectful, and unbiased.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
              <h5 class="font-bold text-amber-700 text-sm">Credibility</h5>
              <p class="text-xxs text-slate-500 mt-1">Building trust through reliability.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "When is the communication process considered fully complete?",
        options: [
          "When the sender writes a detailed email.",
          "When the message is transmitted via the channel.",
          "When the receiver sends back feedback verifying understanding.",
          "When the receiver opens the document."
        ],
        answer: 2,
        explanation: "Communication is a double-lane street. It is only complete when the receiver decodes it and provides appropriate feedback."
      },
      {
        question: "Which of the 7 Cs focuses on adopting the 'You-attitude' and showing empathy for the receiver?",
        options: ["Conciseness", "Consideration", "Correctness", "Concreteness"],
        answer: 1,
        explanation: "Consideration ('You-attitude') means tailoring the communication while keeping the receiver's feelings, background, and mindset in focus."
      },
      {
        question: "What does 'Concreteness' in communication mean?",
        options: [
          "Using complex language and decorative words.",
          "Being specific, definitive, and vivid rather than vague and general.",
          "Writing notes on solid surfaces.",
          "Expressing feelings without boundaries."
        ],
        answer: 1,
        explanation: "Concreteness means your message is supported by facts, figures, and solid evidence rather than generic abstractions."
      }
    ]
  },
  {
    id: 4,
    week: 1,
    title: "Classification of Communication",
    youtubeId: "n8lO0Gmq9nQ",
    objectives: [
      "Understand the classifications based on channels, direction, and formality.",
      "Differentiate between Formal and Informal communication network channels.",
      "Analyze the role of grapevine networks in organizations."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">TAXONOMY OF COMMUNICATION</h3>
          <p class="text-sm text-slate-500 mt-1">Classifying how interactions occur in structured environments.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-amber-50/30 p-5 rounded-xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">By Medium</h4>
            <ul class="text-xs space-y-1 text-slate-700">
              <li>• <strong>Verbal:</strong> Oral, written, digital text.</li>
              <li>• <strong>Non-Verbal:</strong> Body signs, silent pauses.</li>
              <li>• <strong>Visual:</strong> Diagrams, charts, color codes.</li>
            </ul>
          </div>
          <div class="bg-amber-50/30 p-5 rounded-xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">By Formality</h4>
            <ul class="text-xs space-y-1 text-slate-700">
              <li>• <strong>Formal:</strong> Memo, official letter, reports.</li>
              <li>• <strong>Informal:</strong> Casual talks, watercooler gossip.</li>
              <li>• <strong>Grapevine:</strong> Spontaneous social network.</li>
            </ul>
          </div>
          <div class="bg-amber-50/30 p-5 rounded-xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">By Direction</h4>
            <ul class="text-xs space-y-1 text-slate-700">
              <li>• <strong>Downward:</strong> Manager to subordinate.</li>
              <li>• <strong>Upward:</strong> Subordinate to director.</li>
              <li>• <strong>Horizontal:</strong> Peer-to-peer sharing.</li>
            </ul>
          </div>
        </div>

        <div class="p-6 bg-white rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">Exam Insight: The Grapevine (Informal Network)</h4>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">
            The Grapevine represents an unstructured, informal communication network that carries rumors, sentiment, and unofficial news within an organization. While it operates at rapid speeds, it lacks accountability and is prone to distortion.
          </p>
          <div class="grid grid-cols-2 gap-4 text-center">
            <div class="bg-green-50 text-green-800 p-2 rounded text-xxs font-semibold">Pros: Fast, releases tension, builds social bond</div>
            <div class="bg-red-50 text-red-800 p-2 rounded text-xxs font-semibold">Cons: Distorts facts, spreads rumors, lacks paper trail</div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which type of communication network carries informal workplace rumors and gossip?",
        options: ["Downward", "Formal", "Grapevine", "Upward"],
        answer: 2,
        explanation: "Grapevine is the term used to represent informal, unofficial communication networks in organizational behavior."
      },
      {
        question: "A project status update report sent from a developer to the project coordinator is an example of:",
        options: ["Downward Communication", "Upward Communication", "Horizontal Communication", "Diagonal Communication"],
        answer: 1,
        explanation: "Upward communication goes from lower hierarchal roles (subordinate/employee) to higher ones (supervisor/manager)."
      },
      {
        question: "What is a primary disadvantage of grapevine communication networks?",
        options: [
          "It is extremely slow and bureaucratic.",
          "It lacks authenticity and information can be easily distorted.",
          "It requires formal written authorization.",
          "It limits social bonding among peers."
        ],
        answer: 1,
        explanation: "Because the grapevine is unofficial and mouth-to-mouth, facts get heavily distorted, leading to rumor-mongering."
      }
    ]
  },
  {
    id: 5,
    week: 1,
    title: "Personality Development",
    youtubeId: "W4Fh9S18cE8",
    objectives: [
      "Understand the definition and determinants of human personality.",
      "Analyze the difference between introversion, extroversion, and ambiversion.",
      "Explore the impact of positive self-talk and personality development hacks."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">DYNAMICS OF PERSONALITY</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding the internal mechanisms that define individual behavior.</p>
        </div>

        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">Determinants of Personality</h4>
          <p class="text-xs text-slate-600 mb-4">An individual's personality is shaped by a complex interplay of three primary factors:</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-xl border border-slate-100 text-center">
              <span class="text-amber-600 font-bold block mb-1">Biological</span>
              <p class="text-xxs text-slate-500">Heredity, genetics, physical features, and biological temperament.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 text-center">
              <span class="text-amber-600 font-bold block mb-1">Environmental</span>
              <p class="text-xxs text-slate-500">Culture, family environment, school education, and societal norms.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 text-center">
              <span class="text-amber-600 font-bold block mb-1">Situational</span>
              <p class="text-xxs text-slate-500">Critical events, trauma, opportunities, and unique life experiences.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-800 mb-3">Self-Talk & Mindset Mastery</h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            Your internal dialogue shapes your self-image. Negative self-talk creates self-limiting beliefs. Cognitive behavioral research shows that converting "I can't do this" to "How can I learn to do this?" shifts the brain from a defense mode to a growth and problem-solving mode.
          </p>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following is NOT considered a direct determinant of human personality?",
        options: ["Heredity & Biology", "Environmental Factors", "Astronomical Positions", "Situational Experiences"],
        answer: 2,
        explanation: "Heredity, environment, and situations are scientifically established determinants of personality, whereas astrology is not."
      },
      {
        question: "What term defines an individual who balances traits of both introversion and extroversion depending on context?",
        options: ["Introvert", "Ambivert", "Extrovert", "Pervert"],
        answer: 1,
        explanation: "An ambivert lies in the middle of the spectrum, showing adaptability by behaving as an introvert or extrovert depending on social situations."
      },
      {
        question: "How does positive self-talk affect personality development?",
        options: [
          "It makes a person instantly perfect.",
          "It helps replace negative, self-limiting thoughts with constructive, growth-oriented mindsets.",
          "It eliminates the need to study or work.",
          "It allows individuals to control others' thoughts."
        ],
        answer: 1,
        explanation: "Positive self-talk works by restructuring cognitive responses, helping reduce anxiety and fostering self-confidence."
      }
    ]
  },
  {
    id: 6,
    week: 2,
    title: "Positive Thinking",
    youtubeId: "Wn9a1-u5V9Y",
    objectives: [
      "Understand the distinction between optimistic and pessimistic mindsets.",
      "Analyze the health and professional benefits of positive thinking.",
      "Explore techniques for reframing negative situations."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">THE POWER OF PERSPECTIVE</h3>
          <p class="text-sm text-slate-500 mt-1">Reframing challenges as opportunities for growth.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="text-amber-800 font-bold text-sm mb-3">Pessimism (The Fixed Defeatist View)</h4>
            <p class="text-xs text-slate-650 leading-relaxed mb-3">
              Pessimists view setbacks as permanent ("It will never change"), pervasive ("This ruins everything"), and personal ("It is all my fault"). This cognitive style breeds learned helplessness and high stress.
            </p>
          </div>
          <div class="bg-green-50/50 p-6 rounded-2xl border border-green-100">
            <h4 class="text-green-800 font-bold text-sm mb-3">Optimism (The Dynamic Growth View)</h4>
            <p class="text-xs text-slate-650 leading-relaxed mb-3">
              Optimists view setbacks as temporary ("This will pass"), specific ("This was just one bad test"), and situational ("Conditions were difficult today, but I will prepare better next time").
            </p>
          </div>
        </div>

        <div class="p-6 bg-slate-900 text-white rounded-2xl">
          <h4 class="font-bold mb-3 text-sm">Practicing Cognitive Reframing</h4>
          <div class="grid grid-cols-2 gap-4 text-xs">
            <div class="bg-slate-800 p-3 rounded">
              <span class="text-red-400 font-bold block mb-1">Negative Frame:</span>
              "I completely failed the group discussion, I am terrible at communication."
            </div>
            <div class="bg-slate-800 p-3 rounded">
              <span class="text-green-400 font-bold block mb-1">Reframed Positive Frame:</span>
              "I struggled during the discussion, but now I know I need to practice active listening and voice modulation."
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "How do optimists typically view a temporary setback or failure?",
        options: [
          "As a permanent mark of inability.",
          "As a temporary, specific event that can be overcome with effort and strategy.",
          "As something caused entirely by luck.",
          "As an excuse to stop attempting the task."
        ],
        answer: 1,
        explanation: "Optimists frame failure as temporary and specific rather than permanent and pervasive, keeping them motivated."
      },
      {
        question: "Which of the following is a proven benefit of positive thinking?",
        options: [
          "Instant cure of physical diseases without medicine.",
          "Lower stress levels and higher resilience in difficult work environments.",
          "Getting high marks without reading transcripts.",
          "Changing others' behavior through telepathy."
        ],
        answer: 1,
        explanation: "Positive thinking reduces cortisol levels, helps manage anxiety, and strengthens the cognitive ability to cope with stress."
      },
      {
        question: "What is 'Cognitive Reframing'?",
        options: [
          "Erasing past memories completely.",
          "Identifying and disputing negative thoughts to present them in a more constructive light.",
          "Changing career fields frequently.",
          "Accepting defeat without question."
        ],
        answer: 1,
        explanation: "Cognitive reframing is a technique to change the conceptual viewpoint or frame of reference from which a situation is experienced."
      }
    ]
  },
  {
    id: 7,
    week: 2,
    title: "Telephonic Communication Skills (Part I)",
    youtubeId: "J2a4o9v4sA8",
    objectives: [
      "Understand the unique challenges of voice-only communication.",
      "Analyze the importance of vocal tone, pitch, and speed over the telephone.",
      "Explore standard rules of professional phone greetings and introductions."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">TELEPHONIC ETIQUETTE FOUNDATIONS</h3>
          <p class="text-sm text-slate-500 mt-1">Navigating communication when visual cues are missing.</p>
        </div>

        <p class="text-sm text-slate-655 leading-relaxed">
          Over the telephone, up to 70% of communication meaning is derived from your **voice tone, pitch, and speed**, because the listener cannot read facial expressions or hand gestures. Prof. Binod Mishra highlights the concept of "voice modulation" as a tool to establish instant credibility.
        </p>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <h4 class="font-bold text-slate-800 text-sm">The Anatomy of a Professional Call Introduction</h4>
          <ol class="space-y-3 text-xs text-slate-700">
            <li class="flex gap-2">
              <span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">1</span>
              <span><strong>The Polite Greeting:</strong> Start with a clear "Good morning / afternoon" rather than a casual "Hello, who is this?".</span>
            </li>
            <li class="flex gap-2">
              <span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">2</span>
              <span><strong>Self-Identification:</strong> State your full name and company/department clearly (e.g., "This is Raj from Product Support").</span>
            </li>
            <li class="flex gap-2">
              <span class="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">3</span>
              <span><strong>Purpose & Permission:</strong> Explain why you are calling and check if it is a convenient time to speak.</span>
            </li>
          </ol>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Why is voice modulation extremely crucial over the telephone?",
        options: [
          "It helps in making your voice sound louder.",
          "Visual cues are absent, so tone and pitch carry the emotional context and clarity.",
          "It saves network bandwidth.",
          "It helps in ending calls quickly."
        ],
        answer: 1,
        explanation: "On a phone call, gestures and expressions are invisible. Tone, pitch, and pauses represent the entire non-verbal layer."
      },
      {
        question: "What is the best way to open an outgoing professional telephonic call?",
        options: [
          "Say 'Hey, who's this? I need to speak to the manager.'",
          "Greet politely, introduce yourself and organization, and state the purpose of the call.",
          "Start speaking directly about your issue without greeting.",
          "Ask 'Am I speaking to the right person?' without introducing yourself."
        ],
        answer: 1,
        explanation: "A professional call requires a greeting, self-identification, organization context, and clarification of the call's purpose."
      },
      {
        question: "What should you do if the telephone line is noisy or unclear?",
        options: [
          "Shout louder into the receiver.",
          "Hang up and call back, or request the recipient politely to allow a redial.",
          "Continue talking, assuming they understand.",
          "Complain angrily about their poor network provider."
        ],
        answer: 1,
        explanation: "Shouting distorts the sound more. The professional response is to politely acknowledge the disturbance and offer a redial."
      }
    ]
  },
  {
    id: 8,
    week: 2,
    title: "Telephonic Communication Skills (Part II)",
    youtubeId: "K2a4_s8wA5Q",
    objectives: [
      "Master call handling skills like putting calls on hold and transferring calls.",
      "Understand the ethics of dealing with angry callers.",
      "Explore techniques of taking and leaving accurate voice messages."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">ADVANCED CALL HANDLING & ETHICS</h3>
          <p class="text-sm text-slate-500 mt-1">Managing conflict and coordinating communication over lines.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2 text-sm">Putting Calls on Hold</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-3">
              Never place a caller on hold without their permission. Ask: "May I place your call on hold for a minute while I retrieve your files?" Wait for their response, and when returning, start with: "Thank you for holding."
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2 text-sm">Handling Angry Customers</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-3">
              Remain calm and do not take their anger personally. Practice **active listening** without interrupting. Acknowledge their issue, apologize for the inconvenience, and offer a concrete resolution plan.
            </p>
          </div>
        </div>

        <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h4 class="font-bold text-slate-800 mb-2 text-sm">The 'HEAT' Protocol for Customer Support Calls</h4>
          <ul class="text-xs space-y-2 text-slate-700">
            <li>🔥 <strong>H - Hear them out:</strong> Let the angry caller explain their grievance fully.</li>
            <li>🔥 <strong>E - Empathize:</strong> Show genuine concern for their frustration.</li>
            <li>🔥 <strong>A - Apologize:</strong> Offer a sincere apology on behalf of the company.</li>
            <li>🔥 <strong>T - Take Action:</strong> Provide a clear, time-bound solution.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is the correct protocol before placing a professional call on hold?",
        options: [
          "Simply press the hold button instantly without saying anything.",
          "Ask for the caller's permission and wait for them to agree before placing them on hold.",
          "Tell them to wait and mute your microphone.",
          "Put them on hold and hang up after 2 minutes."
        ],
        answer: 1,
        explanation: "Placing someone on hold without consent is considered extremely impolite. Always ask and wait for confirmation."
      },
      {
        question: "What does the 'E' in the customer call-handling HEAT protocol stand for?",
        options: ["Exasperation", "Empathy", "Explanation", "Exaggeration"],
        answer: 1,
        explanation: "E stands for Empathy—acknowledging the caller's emotional state and showing that you understand their frustration."
      },
      {
        question: "When returning to a caller after they have been on hold, what is the best opening line?",
        options: [
          "Okay, let's start now.",
          "Thank you for holding, I have the information you requested.",
          "Sorry for wasting your time.",
          "Are you still there?"
        ],
        answer: 1,
        explanation: "Thanking the caller for holding is a polite and professional way to re-engage their attention."
      }
    ]
  },
  {
    id: 9,
    week: 2,
    title: "Communicating without Words (Part I): Body Language",
    youtubeId: "L2a4_v8wA9P",
    objectives: [
      "Understand the definition of Kinesics (Body Language).",
      "Analyze the role of gestures, postures, and eye contact (Oculesics).",
      "Explore the differences between open and closed body postures."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">KINESICS & OCULESICS</h3>
          <p class="text-sm text-slate-500 mt-1">Decoding physical signals and spatial communication.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-3 text-sm">Open Posture (Receptive)</h4>
            <ul class="text-xs space-y-2 text-slate-300">
              <li>✔ Arms uncrossed and palms facing slightly upward.</li>
              <li>✔ Maintaining steady, friendly eye contact (Oculesics).</li>
              <li>✔ Leaning slightly forward to show engagement and interest.</li>
              <li>✔ Relaxed shoulders and natural smile.</li>
            </ul>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-3 text-sm">Closed Posture (Defensive)</h4>
            <ul class="text-xs space-y-2 text-slate-300">
              <li>✖ Arms tightly crossed over the chest.</li>
              <li>✖ Avoiding eye contact or staring aggressively.</li>
              <li>✖ Slouching back or turning away from the speaker.</li>
              <li>✖ Fidgeting with objects, clicking pens, or tapping feet.</li>
            </ul>
          </div>
        </div>

        <div class="p-6 bg-white border border-slate-200 rounded-2xl">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">Key Scientific Terminology for Exams</h4>
          <ul class="space-y-2 text-xs text-slate-650">
            <li><strong>Kinesics:</strong> The systematic study of body language, including facial expressions, gestures, and postures.</li>
            <li><strong>Oculesics:</strong> The study of eye behavior, gaze directions, blink rates, and pupil dilation in communication.</li>
            <li><strong>Haptics:</strong> The study of touch as a communication channel (shaking hands, patting backs).</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which branch of non-verbal communication study specifically deals with eye contact and gaze?",
        options: ["Kinesics", "Oculesics", "Proxemics", "Haptics"],
        answer: 1,
        explanation: "Oculesics is the specific subcategory of non-verbal communication that focuses on eye behavior."
      },
      {
        question: "What does a closed body posture, like crossing arms tightly over the chest, typically communicate to a recruiter?",
        options: [
          "Deep confidence and readiness.",
          "Defensiveness, discomfort, or lack of openness.",
          "Extreme agreement with what they are saying.",
          "Nothing, recruiters ignore body language."
        ],
        answer: 1,
        explanation: "Crossed arms are a classic defensive shield posture, signaling discomfort, resistance, or lack of openness."
      },
      {
        question: "Which gesture is universally seen as open and inviting?",
        options: [
          "Pointing a index finger directly at someone.",
          "Keeping palms open and slightly visible while speaking.",
          "Clenching fists tightly.",
          "Crossing fingers behind the back."
        ],
        answer: 1,
        explanation: "Showing open palms indicates honesty, transparency, and a lack of hidden threats, which builds trust."
      }
    ]
  },
  {
    id: 10,
    week: 2,
    title: "Communicating without Words (Part II): Paralanguage & Proxemics",
    youtubeId: "M2a4_w8wA0Q",
    objectives: [
      "Understand Paralanguage (how something is said, rather than what is said).",
      "Analyze the zones of personal space as defined by Edward T. Hall (Proxemics).",
      "Explore non-verbal feedback cues in organizational meetings."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">PARALANGUAGE & PROXEMICS</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding vocal tone and physical distance boundaries.</p>
        </div>

        <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
          <h4 class="font-bold text-amber-900 mb-3 text-sm">Edward T. Hall's 4 Proxemic Zones</h4>
          <p class="text-xs text-slate-650 mb-4 font-semibold">The physical space around a person dictates the nature of relationship and comfort:</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div class="bg-white p-3 rounded border border-slate-100">
              <span class="text-amber-700 font-bold block text-xs">1. Intimate Zone</span>
              <span class="text-xxs text-slate-500">0 to 1.5 feet<br>(Spouse, family, pets)</span>
            </div>
            <div class="bg-white p-3 rounded border border-slate-100">
              <span class="text-amber-700 font-bold block text-xs">2. Personal Zone</span>
              <span class="text-xxs text-slate-500">1.5 to 4 feet<br>(Close friends, peers)</span>
            </div>
            <div class="bg-white p-3 rounded border border-slate-100">
              <span class="text-amber-700 font-bold block text-xs">3. Social Zone</span>
              <span class="text-xxs text-slate-500">4 to 12 feet<br>(Meetings, interviews)</span>
            </div>
            <div class="bg-white p-3 rounded border border-slate-100">
              <span class="text-amber-700 font-bold block text-xs">4. Public Zone</span>
              <span class="text-xxs text-slate-500">12+ feet<br>(Public speeches, lectures)</span>
            </div>
          </div>
        </div>

        <div class="p-6 bg-slate-900 text-white rounded-2xl">
          <h4 class="font-bold mb-3 text-sm">Components of Paralanguage (Vocalics)</h4>
          <p class="text-xs text-slate-400 mb-4">Paralanguage focuses on the vocal elements that accompany verbal messages:</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-xs">
            <div class="bg-slate-800 p-2 rounded"><strong>Pitch:</strong> High/low frequency of voice. High pitch can indicate nervousness.</div>
            <div class="bg-slate-800 p-2 rounded"><strong>Volume:</strong> Loudness/softness. Expresses confidence or intimidation.</div>
            <div class="bg-slate-800 p-2 rounded"><strong>Rate:</strong> Speech speed. Too fast causes confusion; too slow causes boredom.</div>
            <div class="bg-slate-800 p-2 rounded"><strong>Pronunciation:</strong> Clarity of articulating words correctly.</div>
            <div class="bg-slate-850 p-2 rounded"><strong>Silence / Pauses:</strong> Strategic gaps to emphasize points or allow processing.</div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "According to Edward T. Hall, what is the distance range for the 'Social Zone' used in interviews and professional meetings?",
        options: ["0 to 1.5 feet", "1.5 to 4 feet", "4 to 12 feet", "12 feet and above"],
        answer: 2,
        explanation: "The social zone ranges from 4 to 12 feet, which is standard for business transactions, interviews, and official meetings."
      },
      {
        question: "Which of the following is an example of paralanguage?",
        options: ["Crossed legs", "Vocal tone and pitch", "Eye contact", "Physical distance between chairs"],
        answer: 1,
        explanation: "Paralanguage involves the vocal delivery (tone, pitch, speed, pauses) rather than the physical gestures (kinesics) or distance (proxemics)."
      },
      {
        question: "What vocal rate is generally recommended for professional presentations?",
        options: [
          "Extremely fast to show high intelligence.",
          "Extremely slow to ensure every single syllable is dragged.",
          "A moderate rate of 120-150 words per minute with strategic pauses.",
          "Alternating between shouting and whispering."
        ],
        answer: 2,
        explanation: "Speaking at a moderate rate (120-150 WPM) gives the audience time to absorb the content, while pauses add emphasis."
      }
    ]
  },
  {
    id: 11,
    week: 3,
    title: "Proxemics, Haptics (The Language of Touch)",
    youtubeId: "N2a4_w8wA01",
    objectives: [
      "Explore the cultural differences in touch communication (Haptics).",
      "Understand safe and professional touch boundaries.",
      "Analyze the role of handshakes in establishing rapport."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">HAPTICS: TOUCH DYNAMICS</h3>
          <p class="text-sm text-slate-500 mt-1">The psychology of touch in social and business environments.</p>
        </div>

        <p class="text-sm text-slate-655 leading-relaxed">
          Touch (Haptics) is one of the oldest forms of human communication. In professional settings, a touch can establish warmth, authority, or rapport, but it is heavily regulated by cultural norms and corporate ethics. A firm handshake is often the only globally accepted touch in professional environments.
        </p>

        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">The Science of a Professional Handshake</h4>
          <div class="grid md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span class="font-bold text-amber-700 block mb-1">Firmness:</span>
              Moderate pressure. Avoid the limp "dead fish" or the painful "bone crusher."
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span class="font-bold text-amber-700 block mb-1">Duration:</span>
              Keep it brief, around 2 to 3 seconds, synchronized with natural eye contact.
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span class="font-bold text-amber-700 block mb-1">Posture:</span>
              Stand tall, square your shoulders, and keep your hands dry.
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is 'Haptics' in the study of non-verbal communication?",
        options: ["The study of voice pitch", "The study of touch", "The study of eye movement", "The study of physical distance"],
        answer: 1,
        explanation: "Haptics is the study of touching as a form of non-verbal communication."
      },
      {
        question: "Which handshake style should be avoided in professional interactions?",
        options: [
          "A firm, 2-second handshake accompanied by a smile.",
          "A limp, dry handshake (dead-fish style) or an overly tight grip.",
          "A steady grip with direct eye contact.",
          "All handshakes should be avoided."
        ],
        answer: 1,
        explanation: "Limp handshakes indicate lack of confidence, while bone-crushers show aggressive dominance. Both create negative impressions."
      },
      {
        question: "Why are haptic rules highly sensitive in global business?",
        options: [
          "Touch is illegal in all countries.",
          "Touch behaviors carry vastly different meanings across different cultures and genders.",
          "Touch is not important for building trust.",
          "Because handshakes are old-fashioned."
        ],
        answer: 1,
        explanation: "Some cultures are high-contact (e.g., Latin America, Southern Europe), while others are low-contact (e.g., Japan, Northern Europe). Sensitivity is vital."
      }
    ]
  },
  {
    id: 12,
    week: 3,
    title: "Communication Breakdown (Part I)",
    youtubeId: "O2a4_w8wA02",
    objectives: [
      "Identify the major barriers causing communication breakdown.",
      "Analyze physiological and environmental barriers.",
      "Explore semantic and language differences in encoding messages."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">BARRIERS TO COMMUNICATION</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding where messages go wrong in the channel.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">Physiological Barriers</h4>
            <p class="text-xs text-slate-655 leading-relaxed mb-3">
              Obstacles arising from the biological state of the sender or receiver—such as hearing loss, visual impairment, extreme fatigue, hunger, or illness that reduces focus.
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">Semantic & Language Barriers</h4>
            <p class="text-xs text-slate-300 leading-relaxed mb-3">
              Occurs when the sender and receiver interpret words differently. Using highly technical jargon, ambiguous phrases, abbreviations, or translating idioms literally creates semantic distortion.
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following is an example of a semantic barrier in communication?",
        options: [
          "Noise from a construction site outside the room.",
          "Using complex technical medical jargon with a general patient.",
          "Severe migraine making it hard to listen.",
          "A broken microphone during a speech."
        ],
        answer: 1,
        explanation: "Using technical jargon with someone who doesn't know it is a semantic barrier—they cannot decode the meaning of the words used."
      },
      {
        question: "How does extreme physical fatigue in a receiver act as a communication barrier?",
        options: [
          "It acts as a semantic filter.",
          "It is a physiological barrier that limits cognitive concentration and encoding capacity.",
          "It is an environmental distraction.",
          "It does not affect communication."
        ],
        answer: 1,
        explanation: "Fatigue, hunger, and illness are biological states, classifying them as physiological barriers to listening."
      },
      {
        question: "What is the best way to bypass language barriers in cross-functional teams?",
        options: [
          "Speak louder and slower in your regional language.",
          "Use simple, clear English, avoid local idioms, and double-check understanding.",
          "Write long, detailed emails filled with vocabulary words.",
          "Refuse to communicate with team members from other regions."
        ],
        answer: 1,
        explanation: "Simplifying vocabulary, avoiding colloquialisms/idioms, and verifying understanding is the key to bypassing language barriers."
      }
    ]
  },
  {
    id: 13,
    week: 3,
    title: "Communication Breakdown (Part II)",
    youtubeId: "P2a4_w8wA03",
    objectives: [
      "Understand psychological and emotional barriers (fear, prejudice, ego).",
      "Identify organizational barriers like hierarchy and info overload.",
      "Explore ways to overcome communication breakdown."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">PSYCHOLOGICAL & ORGANIZATIONAL BARRIERS</h3>
          <p class="text-sm text-slate-500 mt-1">Analyzing the emotional and structural factors of communication failure.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">Psychological Filters & Prejudices</h4>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">
            Ego, anxiety, anger, and pre-existing prejudices prevent objective decoding. If a receiver dislikes a sender, they might interpret neutral statements as hostile. Similarly, **information overload** causes the receiver's brain to filter out key details to prevent cognitive exhaustion.
          </p>
        </div>

        <div class="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
          <h4 class="font-bold text-sm">Master Plan to Overcome Breakdown</h4>
          <ul class="text-xs space-y-2 text-slate-300">
            <li>✔ <strong>Active Listening:</strong> Focus fully, avoid planning your rebuttal while the other person is speaking.</li>
            <li>✔ <strong>Feedback Validation:</strong> Ask: "Just to clarify, do you mean [X]?"</li>
            <li>✔ <strong>Emotional Regulation:</strong> Pause and cool down before responding in anger or panic.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "When a manager rejects a subordinate's constructive idea simply because of a personal ego clash, this represents which barrier?",
        options: ["Physiological Barrier", "Psychological Barrier", "Environmental Barrier", "Physical Barrier"],
        answer: 1,
        explanation: "Ego, bias, and emotional states belong to psychological barriers, altering how information is received."
      },
      {
        question: "Which term describes receiving too much information at once, leading to confusion and loss of focus?",
        options: ["Cognitive Dissonance", "Information Overload", "Semantic Slippage", "Filtering Gap"],
        answer: 1,
        explanation: "Information overload happens when the volume of inputs exceeds the mental processing capacity of the receiver."
      },
      {
        question: "What is the primary objective of active listening?",
        options: [
          "To show the speaker that you are quiet.",
          "To comprehend the complete meaning of the message, both verbal and emotional.",
          "To prepare an aggressive argument to counter the speaker.",
          "To ignore unnecessary information."
        ],
        answer: 1,
        explanation: "Active listening focuses on complete comprehension, empathy, and capturing verbal and emotional contexts before responding."
      }
    ]
  },
  {
    id: 14,
    week: 3,
    title: "Culture as Communication",
    youtubeId: "Q2a4_w8wA04",
    objectives: [
      "Understand the definition of culture in communication context.",
      "Explore the differences between high-context and low-context cultures.",
      "Analyze the role of cultural values in global teams."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">CULTURAL PATTERNS</h3>
          <p class="text-sm text-slate-500 mt-1">Exploring context levels in intercultural interactions.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">High-Context Cultures</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Communication relies heavily on context, relationships, status, non-verbal cues, and shared history. Messages are indirect. Saying "No" directly is avoided to preserve harmony.
              <br><strong class="mt-2 block">Examples:</strong> India, Japan, China, Arab countries.
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">Low-Context Cultures</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Communication is direct, explicit, and literal. The message is embedded entirely in the words used. "Yes means yes, and no means no." Business is transactional and task-focused.
              <br><strong class="mt-2 block">Examples:</strong> USA, Germany, Switzerland, Canada.
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "In which type of culture is communication highly indirect and dependent on non-verbal signs and relationship history?",
        options: ["Low-Context Culture", "High-Context Culture", "Mono-chronic Culture", "Linear Culture"],
        answer: 1,
        explanation: "High-context cultures (like India or Japan) prioritize non-verbal cues, trust, and indirect phrasing over explicit literal text."
      },
      {
        question: "Which of the following countries is characterized as having a Low-Context culture?",
        options: ["Japan", "Germany", "India", "Saudi Arabia"],
        answer: 1,
        explanation: "Germany, USA, and Switzerland are classic low-context cultures where communication is direct, task-oriented, and highly explicit."
      },
      {
        question: "Why should global managers understand context variations in culture?",
        options: [
          "To classify people into fixed labels.",
          "To avoid misunderstandings caused by indirect vs. direct communication patterns.",
          "To force all employees to adopt low-context habits.",
          "Cultural differences are not important in business."
        ],
        answer: 1,
        explanation: "Understanding context helps prevent friction—for instance, realizing a high-context teammate's hesitation means 'No' even if they don't say it explicitly."
      }
    ]
  },
  {
    id: 15,
    week: 3,
    title: "Communicating Across Cultures",
    youtubeId: "R2a4_w8wA05",
    objectives: [
      "Understand the traps of Ethnocentrism and Stereotyping.",
      "Explore non-verbal cultural variations (gestures, eye contact).",
      "Analyze keys to building cross-cultural empathy."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">INTERCULTURAL EMBRACE</h3>
          <p class="text-sm text-slate-500 mt-1">Overcoming ethnocentrism in global business relationships.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <h4 class="font-bold text-slate-800 text-sm">Two Cultural Traps to Avoid</h4>
          <ul class="space-y-3 text-xs text-slate-650">
            <li>
              🔴 <strong>Ethnocentrism:</strong> The subconscious belief that one's own culture, values, and habits are superior, and evaluating other cultures solely based on these standards.
            </li>
            <li>
              🔴 <strong>Stereotyping:</strong> Generalizing fixed, oversimplified traits to an entire demographic (e.g., "All Germans are cold" or "All Italians are emotional").
            </li>
          </ul>
        </div>

        <div class="bg-slate-900 text-white p-6 rounded-2xl">
          <h4 class="font-bold text-amber-500 mb-3 text-sm">Keys to Cross-Cultural Competence</h4>
          <ul class="space-y-2 text-xs text-slate-300">
            <li>✔ <strong>Active Curiosity:</strong> Reading about a country's greeting customs before visiting.</li>
            <li>✔ <strong>Avoiding Idioms:</strong> Sports analogies (e.g., "touch base", "ballpark figure") confuse non-native speakers.</li>
            <li>✔ <strong>Suspending Judgment:</strong> Recognizing different habits as "different" rather than "incorrect."</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is 'Ethnocentrism'?",
        options: [
          "The study of regional folk music.",
          "The tendency to view one's own culture as the default standard and superior to others.",
          "The integration of multiple cultures into a single firm.",
          "The language of signs used by travelers."
        ],
        answer: 1,
        explanation: "Ethnocentrism is the belief that one's native culture is superior, using it to judge and dismiss other cultures' behaviors."
      },
      {
        question: "Why can using local idioms (like 'spill the beans') be a barrier in cross-cultural communication?",
        options: [
          "It is considered offensive in most countries.",
          "Literal translation does not convey the idiomatic meaning, causing confusion.",
          "It violates corporate rules.",
          "It makes messages too simple."
        ],
        answer: 1,
        explanation: "Idioms are unique to specific language communities. Non-native speakers will translate them literally, resulting in complete confusion."
      },
      {
        question: "How should a professional approach differences in eye contact norms across cultures?",
        options: [
          "Demand that everyone maintain steady eye contact.",
          "Adapt to the context, knowing that some cultures view direct gaze as respectful while others view it as confrontational.",
          "Avoid eye contact completely in all scenarios.",
          "Maintain eye contact only with superiors."
        ],
        answer: 1,
        explanation: "Eye contact norms vary. In East Asia, downcast eyes show respect; in Western contexts, direct gaze indicates honesty. Adaptability is key."
      }
    ]
  },
  {
    id: 16,
    week: 4,
    title: "Organizational Communication",
    youtubeId: "S2a4_w8wA06",
    objectives: [
      "Understand the structured networks of information flow in corporations.",
      "Analyze the causes of communication gaps between management and labor.",
      "Explore solutions for open door policies and suggestion schemes."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">CORPORATE FLOW NETWORKS</h3>
          <p class="text-sm text-slate-500 mt-1">How feedback and policies traverse hierarchy levels.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">Upward Flow Management</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Subordinates communicate grievances, progress reports, and suggestions. Organizations can improve this by implementing:
              <br>• Suggestion Boxes / Portal
              <br>• Open Door Policies
              <br>• Regular Employee Townhalls
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">Downward Flow Integrity</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Management communicates goals, policies, and tasks. To prevent dilution or distortion (the 'telephone game' effect), downward flows must be documented, clear, and summarized in writing.
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is the primary risk associated with downward communication passing through many levels of hierarchy?",
        options: [
          "It gets faster.",
          "Information gets distorted, filtered, or diluted along the way.",
          "It becomes too horizontal.",
          "No risk is present."
        ],
        answer: 1,
        explanation: "As directives pass down multiple levels, layers of management filter or interpret them, leading to a loss of the original message intent."
      },
      {
        question: "Which mechanism specifically helps improve upward communication in a company?",
        options: ["Monthly circulars", "An open-door policy and digital suggestion portal", "Company rulebook distribution", "A centralized database"],
        answer: 1,
        explanation: "An open-door policy and suggestion portals encourage subordinates to safely communicate feedback to high-level managers."
      },
      {
        question: "Horizontal communication occurs between:",
        options: [
          "Supervisors and their direct subordinates.",
          "Employees working at the same organizational level.",
          "External clients and vendors.",
          "Directors and regulatory authorities."
        ],
        answer: 1,
        explanation: "Horizontal (lateral) communication involves peers at the same hierarchical level coordinating work directly."
      }
    ]
  },
  {
    id: 17,
    week: 4,
    title: "Negotiation Skills (Part I)",
    youtubeId: "T2a4_w8wA07",
    objectives: [
      "Understand the definition and stages of negotiation.",
      "Differentiate between Distributive (Win-Lose) and Integrative (Win-Win) negotiation.",
      "Explore the concept of BATNA (Best Alternative to a Negotiated Agreement)."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">NEGOTIATION STRATEGY</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding the structures of dealmaking and concessions.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">Distributive Negotiation (Win-Lose)</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Zero-sum game where resources are fixed. Every dollar one party saves is a dollar the other party loses (e.g., haggling over a used car). High competition, low trust.
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">Integrative Negotiation (Win-Win)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Focuses on expanding the pie by identifying shared interests, values, and creative concessions. Collaborative problem-solving to benefit both parties (e.g., partnership deals).
            </p>
          </div>
        </div>

        <div class="p-6 bg-white border border-slate-200 rounded-2xl">
          <h4 class="font-bold text-slate-800 mb-2 text-sm">What is BATNA?</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            <strong>BATNA (Best Alternative to a Negotiated Agreement):</strong> The most advantageous alternative course of action a party can take if negotiations fail and an agreement cannot be reached. Your BATNA determines your leverage and walk-away point.
          </p>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does the negotiation acronym BATNA stand for?",
        options: [
          "Best Agreement Trust Negotiation Authority",
          "Best Alternative to a Negotiated Agreement",
          "Bargaining Agreement Target Network Action",
          "Behavioral Assessment Tool for Negotiation Analysis"
        ],
        answer: 1,
        explanation: "BATNA stands for 'Best Alternative to a Negotiated Agreement'—your backup option if the current deal fails."
      },
      {
        question: "Which style of negotiation views the situation as a zero-sum game with fixed resources?",
        options: ["Integrative Negotiation", "Distributive Negotiation", "Collaborative Negotiation", "Passive Negotiation"],
        answer: 1,
        explanation: "Distributive bargaining assumes a fixed pie where resources are distributed competitively (win-lose)."
      },
      {
        question: "Why is integrative negotiation preferred for long-term business partnerships?",
        options: [
          "It is much faster to execute.",
          "It focuses on mutual gain and relationship preservation.",
          "It ensures one party dominates the other.",
          "It eliminates the need for contracts."
        ],
        answer: 1,
        explanation: "Integrative negotiation seeks win-win solutions that satisfy both parties' interests, which builds trust and maintains relationships."
      }
    ]
  },
  {
    id: 18,
    week: 4,
    title: "Negotiation Skills (Part II)",
    youtubeId: "U2a4_w8wA08",
    objectives: [
      "Analyze tactics used in business negotiations (Good Cop/Bad Cop, Anchoring).",
      "Explore the role of emotional control and silence in dealmaking.",
      "Understand how to handle deadlocks and walk away."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">TACTICS & CONFLICT IN NEGOTIATION</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding psychological barriers and deadlock resolutions.</p>
        </div>

        <div class="bg-slate-900 text-white p-6 rounded-2xl">
          <h4 class="font-bold text-amber-500 mb-3 text-sm">Common Negotiation Tactics</h4>
          <ul class="space-y-3 text-xs text-slate-300">
            <li>🎯 <strong>Anchoring:</strong> Establishing the first offer, which sets the mental boundary for the entire negotiation range.</li>
            <li>🎯 <strong>Good Cop / Bad Cop:</strong> One negotiator takes an aggressive, unreasonable stance, while their partner acts sympathetic and reasonable to force a quick compromise.</li>
            <li>🎯 <strong>The Nibble:</strong> Asking for a small, extra concession (e.g., free shipping) just as the agreement is being signed.</li>
          </ul>
        </div>

        <div class="p-6 bg-white border border-slate-200 rounded-2xl">
          <h4 class="font-bold text-slate-800 mb-2 text-sm">Resolving Deadlocks</h4>
          <p class="text-xs text-slate-655 leading-relaxed mb-3">
            A deadlock occurs when neither party is willing to make further concessions. Strategies to resolve this include:
          </p>
          <ul class="text-xs space-y-1 text-slate-600">
            <li>• Suggesting a temporary recess to cool down emotions.</li>
            <li>• Introducing a neutral third-party mediator.</li>
            <li>• Changing the package of variables (swapping price concessions for payment terms or warranty extensions).</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which tactic involves setting the initial price or offer to bias the rest of the discussion range?",
        options: ["Nibbling", "Anchoring", "Good Cop/Bad Cop", "Stonewalling"],
        answer: 1,
        explanation: "Anchoring is the cognitive bias where negotiators rely too heavily on the first piece of information offered (the anchor)."
      },
      {
        question: "What is a deadlock in negotiation?",
        options: [
          "A successful final agreement signature.",
          "A state where progress is blocked because neither side is willing to make concessions.",
          "A physical fight during meetings.",
          "A negotiation done via email."
        ],
        answer: 1,
        explanation: "Deadlock (or impasse) occurs when negotiations stall completely due to conflicting non-negotiable positions."
      },
      {
        question: "How should a negotiator counter the 'Good Cop / Bad Cop' tactic?",
        options: [
          "Argue angrily with the bad cop.",
          "Call out the tactic openly and focus solely on objective standards and interests.",
          "Immediately surrender to the good cop.",
          "Leave the negotiation room without saying anything."
        ],
        answer: 1,
        explanation: "Naming and addressing the tactic neutrally helps neutralize the psychological pressure, returning the focus to objective merits."
      }
    ]
  },
  {
    id: 19,
    week: 4,
    title: "Time Management (Part I)",
    youtubeId: "V2a4_w8wA09",
    objectives: [
      "Explore the philosophy of time and the causes of time wastage.",
      "Understand the difference between urgent and important tasks.",
      "Analyze the Eisenhower Matrix for task prioritization."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">THE PRIORITIZATION FRAMEWORK</h3>
          <p class="text-sm text-slate-500 mt-1">Applying the Eisenhower Matrix to manage daily tasks.</p>
        </div>

        <div class="grid grid-cols-2 gap-4 text-xs text-slate-700">
          <div class="bg-red-50 p-4 rounded-xl border border-red-150">
            <h4 class="font-bold text-red-900 mb-1">Quadrant I: DO</h4>
            <p class="text-xxs text-slate-550 mb-2">Urgent & Important</p>
            <ul class="space-y-1 text-xxs">
              <li>• Crisis management</li>
              <li>• Project deadlines</li>
              <li>• Pressing emergencies</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-xl border border-green-150">
            <h4 class="font-bold text-green-900 mb-1">Quadrant II: PLAN (The Sweet Spot)</h4>
            <p class="text-xxs text-slate-550 mb-2">Important but Not Urgent</p>
            <ul class="space-y-1 text-xxs">
              <li>• Long-term strategy</li>
              <li>• Health & learning</li>
              <li>• Relationship building</li>
            </ul>
          </div>
          <div class="bg-amber-50 p-4 rounded-xl border border-amber-150">
            <h4 class="font-bold text-amber-900 mb-1">Quadrant III: DELEGATE</h4>
            <p class="text-xxs text-slate-555 mb-2">Urgent but Not Important</p>
            <ul class="space-y-1 text-xxs">
              <li>• Interruptions & meetings</li>
              <li>• Some emails & calls</li>
              <li>• Other people's minor issues</li>
            </ul>
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-1">Quadrant IV: ELIMINATE</h4>
            <p class="text-xxs text-slate-550 mb-2">Not Urgent & Not Important</p>
            <ul class="space-y-1 text-xxs">
              <li>• Social media doomscrolling</li>
              <li>• Mindless TV watching</li>
              <li>• Trivial busywork</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "In the Eisenhower Matrix, which quadrant represents the 'Sweet Spot' of strategy, planning, and self-improvement?",
        options: ["Quadrant I (Urgent & Important)", "Quadrant II (Not Urgent & Important)", "Quadrant III (Urgent & Not Important)", "Quadrant IV (Not Urgent & Not Important)"],
        answer: 1,
        explanation: "Quadrant II (Important but Not Urgent) is the zone of focus, relationship building, planning, and personal growth."
      },
      {
        question: "Which of the following is a classic example of an Urgent but Not Important task (Quadrant III)?",
        options: [
          "Preparing a project proposal due in 1 hour.",
          "Answering most casual notifications and telephone calls that disrupt your deep work.",
          "Exercising at the gym.",
          "Watching a movie catalog."
        ],
        answer: 1,
        explanation: "Notifications and minor phone calls present themselves as urgent, but they are often not important to your primary goals."
      },
      {
        question: "What is the primary action recommended for Quadrant IV tasks?",
        options: ["Do immediately", "Plan for later", "Delegate to subordinates", "Eliminate or minimize"],
        answer: 3,
        explanation: "Quadrant IV tasks are distractions that waste time. They should be eliminated, minimized, or dropped."
      }
    ]
  },
  {
    id: 20,
    week: 4,
    title: "Time Management (Part II)",
    youtubeId: "W2a4_w8wA10",
    objectives: [
      "Analyze techniques to combat procrastination (Pomodoro, 2-Minute Rule).",
      "Understand the Pareto Principle (80/20 Rule) in workload management.",
      "Explore strategies for saying 'No' politely to protect time."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">COMBATING PROCRASTINATION</h3>
          <p class="text-sm text-slate-500 mt-1">Tools to defeat inertia and optimize efforts.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-amber-700 mb-2">The Pomodoro Technique</h4>
            <p class="text-xs text-slate-500 leading-relaxed">
              Work for 25 minutes with absolute focus, followed by a 5-minute break. After 4 cycles, take a longer 20-minute break. This prevents mental exhaustion.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-amber-700 mb-2">The Pareto Principle (80/20)</h4>
            <p class="text-xs text-slate-500 leading-relaxed">
              80% of results come from 20% of your efforts. Identify and focus on the high-impact tasks rather than spending hours on low-value details.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-amber-700 mb-2">The 2-Minute Rule</h4>
            <p class="text-xs text-slate-500 leading-relaxed">
              If an incoming task takes less than 2 minutes to complete (like replying to a calendar request), do it immediately rather than putting it on a checklist.
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does the Pareto Principle (80/20 rule) state in relation to time management?",
        options: [
          "80% of work takes 20 hours to complete.",
          "80% of outputs or results come from 20% of inputs or high-impact efforts.",
          "80% of employees do 20% of work.",
          "Time must be divided into 80 minutes of work and 20 minutes of rest."
        ],
        answer: 1,
        explanation: "The Pareto Principle states that roughly 80% of consequences come from 20% of causes. Focus efforts on the high-leverage 20%."
      },
      {
        question: "In the Pomodoro technique, what is the standard duration of a single focused work interval?",
        options: ["10 minutes", "25 minutes", "50 minutes", "90 minutes"],
        answer: 1,
        explanation: "A standard Pomodoro sprint consists of 25 minutes of uninterrupted work followed by a 5-minute break."
      },
      {
        question: "What is the core premise of the '2-Minute Rule'?",
        options: [
          "Meetings should only last 2 minutes.",
          "If a task takes under 2 minutes, do it immediately to prevent scheduling and cognitive clutter.",
          "It takes 2 minutes to fall asleep.",
          "Emails must be read within 2 minutes of receiving."
        ],
        answer: 1,
        explanation: "The 2-minute rule prevents small, trivial tasks from piling up and taking up mental space on a tasks list."
      }
    ]
  },
  {
    id: 21,
    week: 5,
    title: "Stress Management (Part I)",
    youtubeId: "X2a4_w8wA11",
    objectives: [
      "Understand the definition and biological mechanism of stress.",
      "Differentiate between Eustress (positive) and Distress (negative).",
      "Identify the major sources of stress in personal and corporate life."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">UNDERSTANDING STRESS</h3>
          <p class="text-sm text-slate-500 mt-1">Analyzing biological pressure and environmental stressors.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-green-50/50 p-6 rounded-2xl border border-green-100">
            <h4 class="font-bold text-green-950 mb-2">Eustress (Positive Stress)</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Stress that acts as a positive motivator. It is short-term, feels within our coping capacities, and improves focus and performance (e.g., the adrenaline rush before a presentation or sport match).
            </p>
          </div>
          <div class="bg-red-50/50 p-6 rounded-2xl border border-red-100">
            <h4 class="font-bold text-red-950 mb-2">Distress (Negative Stress)</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Negative stress that causes anxiety, physical illness, and performance drop. It can be acute (short-term) or chronic (long-term, like working in toxic environments or facing financial crisis).
            </p>
          </div>
        </div>

        <div class="p-6 bg-slate-900 text-white rounded-2xl">
          <h4 class="font-bold mb-3 text-sm">Common Corporate Stressors (The Triggers)</h4>
          <ul class="grid grid-cols-2 gap-3 text-xs text-slate-350">
            <li>• Role Ambiguity (Unclear tasks)</li>
            <li>• Work overload / Long hours</li>
            <li>• Interpersonal conflicts with peers</li>
            <li>• Job insecurity (Fear of layoffs)</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What term is used to describe positive, motivating stress?",
        options: ["Distress", "De-stress", "Eustress", "Substress"],
        answer: 2,
        explanation: "Eustress is positive cognitive/physiological stress that motivates and helps perform better under pressure."
      },
      {
        question: "Which of the following is a classic trigger of distress in a workplace?",
        options: [
          "Getting promoted to a desired role.",
          "Role ambiguity where objectives are completely unclear.",
          "Clear performance incentives.",
          "Receiving constructive feedback."
        ],
        answer: 1,
        explanation: "Role ambiguity causes high anxiety and frustration because the employee does not know what is expected of them."
      },
      {
        question: "Chronic stress is characterized by:",
        options: [
          "A short burst of energy that fades quickly.",
          "Long-term, ongoing stress that depletes physical and mental resources.",
          "Improved cardiovascular health.",
          "Immediate relaxation."
        ],
        answer: 1,
        explanation: "Chronic stress persists over weeks or months, releasing harmful cortisol and leading to burnout."
      }
    ]
  },
  {
    id: 22,
    week: 5,
    title: "Stress Management (Part II)",
    youtubeId: "Y2a4_w8wA12",
    objectives: [
      "Learn physiological and cognitive coping strategies for stress.",
      "Explore relaxation techniques (Deep breathing, meditation).",
      "Analyze the role of sleep, nutrition, and exercise in stress reduction."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">COPING STRATEGIES & WELLNESS</h3>
          <p class="text-sm text-slate-500 mt-1">Refocusing attention and biological recovery.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Physiological Coping Techniques</h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li>• <strong>Box Breathing:</strong> Inhale for 4s, hold for 4s, exhale for 4s, hold for 4s. Activates parasympathetic nervous system.</li>
              <li>• <strong>Aerobic Exercise:</strong> Reduces adrenaline and cortisol while stimulating endorphins (mood elevators).</li>
            </ul>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Cognitive Coping Techniques</h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li>• <strong>Time Out:</strong> Pausing work to step outside and disconnect.</li>
              <li>• <strong>Social Support:</strong> Sharing feelings with friends to receive perspective and release emotional load.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "How does deep breathing (like Box Breathing) biologically help reduce acute stress?",
        options: [
          "It increases blood pressure.",
          "It stimulates the parasympathetic nervous system, lowering heart rate and calming the body.",
          "It causes oxygen deprivation.",
          "It releases high levels of cortisol."
        ],
        answer: 1,
        explanation: "Deep breathing stimulates the vagus nerve, which triggers the parasympathetic response to counter the fight-or-flight response."
      },
      {
        question: "Which hormone is commonly referred to as the 'Stress Hormone'?",
        options: ["Insulin", "Cortisol", "Melatonin", "Thyroxine"],
        answer: 1,
        explanation: "Cortisol is released by the adrenal glands during stressful situations, increasing glucose in the bloodstream."
      },
      {
        question: "What is the primary objective of cognitive coping strategies?",
        options: [
          "To ignore all problems.",
          "To alter your perception of stress and reframe the situation constructively.",
          "To take medicines.",
          "To force others to change."
        ],
        answer: 1,
        explanation: "Cognitive strategies work by changing the mental filters and interpretations you apply to external events."
      }
    ]
  },
  {
    id: 23,
    week: 5,
    title: "Conflict Management (Part I)",
    youtubeId: "Z2a4_w8wA13",
    objectives: [
      "Understand the definition and stages of conflict in organizations.",
      "Analyze the causes of interpersonal and team conflicts.",
      "Explore the difference between functional (positive) and dysfunctional (negative) conflicts."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">CONFLICT DYNAMICS</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding the structures of disagreement.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-green-50/50 p-6 rounded-2xl border border-green-100">
            <h4 class="font-bold text-green-950 mb-2">Functional Conflict (Positive)</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Constructive disagreement that supports goals, encourages creativity, improves decision quality, and releases team tensions (e.g., debating project design architectures).
            </p>
          </div>
          <div class="bg-red-50/50 p-6 rounded-2xl border border-red-100">
            <h4 class="font-bold text-red-950 mb-2">Dysfunctional Conflict (Negative)</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Destructive friction that blocks work progress, lowers team morale, increases employee turnover, and creates toxic environments (e.g., personal ego clashes or department wars).
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is a functional conflict?",
        options: [
          "A physical fight in an office.",
          "A constructive disagreement that stimulates ideas, debates, and improves team solutions.",
          "A personal argument between colleagues.",
          "A conflict that must be immediately reported to HR."
        ],
        answer: 1,
        explanation: "Functional conflict focuses on tasks and methods rather than personalities, driving creative debate."
      },
      {
        question: "What is the primary source of dysfunctional interpersonal conflict?",
        options: [
          "Goal alignment.",
          "Personal ego clashes, lack of trust, and poor communication.",
          "Standard operating procedures.",
          "Clear role definitions."
        ],
        answer: 1,
        explanation: "Dysfunctional conflict is usually rooted in relationship issues, emotional friction, and personality clashes."
      },
      {
        question: "At which stage of conflict does it become visible through actions, words, and behaviors?",
        options: ["Latent Conflict", "Perceived Conflict", "Manifest Conflict", "Aftermath Stage"],
        answer: 2,
        explanation: "Manifest conflict is when the disagreement becomes outward and observable through arguments, body language, or actions."
      }
    ]
  },
  {
    id: 24,
    week: 5,
    title: "Conflict Management (Part II)",
    youtubeId: "a2hV6sA9A84",
    objectives: [
      "Master the Thomas-Kilmann Conflict Mode Instrument (TKI).",
      "Analyze the five conflict styles: Competing, Collaborating, Compromising, Avoiding, Accommodating.",
      "Explore when to apply each style in real corporate scenarios."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">THE TKI CONFLICT MATRIX</h3>
          <p class="text-sm text-slate-500 mt-1">Applying five response modes based on Assertiveness and Cooperativeness.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-700">
          <p class="font-semibold text-slate-800">The 5 TKI Modes Explained:</p>
          <div class="space-y-3">
            <div class="p-3 bg-slate-50 rounded-lg">
              🎯 <strong>Collaborating (Win-Win):</strong> High assertiveness + High cooperativeness. Digging into issue to find solutions satisfying both sides. Use for key strategic decisions.
            </div>
            <div class="p-3 bg-slate-50 rounded-lg">
              🎯 <strong>Competing (Win-Lose):</strong> High assertiveness + Low cooperativeness. Standing your ground and winning. Use in emergencies or unpopular, vital policy decisions.
            </div>
            <div class="p-3 bg-slate-50 rounded-lg">
              🎯 <strong>Compromising (Win-Win / Lose-Lose):</strong> Moderate assertiveness + Moderate cooperativeness. Quick, middle-ground settlement. Use under tight deadlines.
            </div>
            <div class="p-3 bg-slate-50 rounded-lg">
              🎯 <strong>Accommodating (Lose-Win):</strong> Low assertiveness + High cooperativeness. Putting other's needs first to preserve relationship. Use when you realize you are wrong.
            </div>
            <div class="p-3 bg-slate-50 rounded-lg">
              🎯 <strong>Avoiding (Lose-Lose):</strong> Low assertiveness + Low cooperativeness. Dodging or delaying conflict. Use when the issue is trivial or feelings are hot.
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which conflict style involves high assertiveness and low cooperativeness, where one party pursues their goals at the other's expense?",
        options: ["Collaborating", "Avoiding", "Competing", "Accommodating"],
        answer: 2,
        explanation: "Competing is power-oriented, focused entirely on winning your point (assertive, uncooperative)."
      },
      {
        question: "When is the 'Avoiding' conflict style appropriate?",
        options: [
          "When the issue is highly critical and requires immediate strategic agreement.",
          "When the issue is trivial, or you need to allow emotions to cool down before discussing.",
          "When you are 100% sure you are right.",
          "In crisis management situations."
        ],
        answer: 1,
        explanation: "Avoiding is useful when the conflict is unimportant, or when temporary emotional space is needed to prevent escalations."
      },
      {
        question: "What is the key difference between collaborating and compromising?",
        options: [
          "Collaborating is win-lose, compromising is win-win.",
          "Collaborating finds a creative solution that fully satisfies both; compromising splits the difference where both accept some loss.",
          "Compromising is highly assertive, collaborating is highly uncooperative.",
          "There is no difference."
        ],
        answer: 1,
        explanation: "Collaboration expands options to find a win-win integration; compromise is a quick concession where both sides meet in the middle."
      }
    ]
  },
  {
    id: 25,
    week: 5,
    title: "Emotional Intelligence (Part I)",
    youtubeId: "b2hV6sA9A85",
    objectives: [
      "Understand the definition of Emotional Intelligence (EQ).",
      "Compare intelligence quotient (IQ) vs. emotional quotient (EQ).",
      "Explore the first two domains of Daniel Goleman's model: Self-Awareness and Self-Regulation."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">EMOTIONAL INTELLIGENCE BASICS</h3>
          <p class="text-sm text-slate-500 mt-1">Daniel Goleman's framework of self-mastery.</p>
        </div>

        <p class="text-sm text-slate-655 leading-relaxed">
          Emotional Intelligence (EQ) is the capacity to recognize, understand, and manage our own emotions, and to recognize and influence the emotions of others. As Prof. Binod Mishra notes, IQ might get you hired, but EQ gets you promoted.
        </p>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">Self-Awareness</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              The ability to read your own emotions and recognize their impact on work performance and relationships. Aware people know their triggers.
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">Self-Regulation</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              The capacity to control disruptive emotions and impulses. Instead of reacting instantly in anger, high-EQ individuals pause, evaluate, and choose a rational response.
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Who popularized the concept of Emotional Intelligence with his 1995 bestselling book?",
        options: ["Edward T. Hall", "Daniel Goleman", "Swami Vivekananda", "Albert Einstein"],
        answer: 1,
        explanation: "Daniel Goleman popularized the concept of EQ and built the 5-domain emotional intelligence framework."
      },
      {
        question: "What does the 'Self-Regulation' component of EQ involve?",
        options: [
          "Hiding all emotions completely from others.",
          "Controlling disruptive impulses and thinking before acting.",
          "Increasing self-confidence.",
          "Manipulating others' moods."
        ],
        answer: 1,
        explanation: "Self-regulation means managing your emotional state so you don't react impulsively or destructively to triggers."
      },
      {
        question: "In the professional arena, why is EQ often considered more critical than IQ?",
        options: [
          "IQ is not useful at all.",
          "EQ helps in handling pressure, leading teams, and managing relationships, which are core leadership skills.",
          "EQ is easier to measure via exams.",
          "High EQ makes up for complete technical incompetence."
        ],
        answer: 1,
        explanation: "While IQ guarantees cognitive strength, EQ is the driver of teamwork, leadership, empathy, and resilience under crisis."
      }
    ]
  },
  {
    id: 26,
    week: 6,
    title: "Emotional Intelligence (Part II)",
    youtubeId: "c2hV6sA9A86",
    objectives: [
      "Understand the remaining domains of EQ: Self-Motivation, Empathy, and Social Skills.",
      "Explore practical tools to increase empathy in work conversations.",
      "Analyze the role of emotional contagious effect in leadership."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">EMPATHY & SOCIAL ARCHITECTURE</h3>
          <p class="text-sm text-slate-500 mt-1">Decoding interpersonal chemistry and motivation.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Self-Motivation</h4>
            <p class="text-slate-500 leading-relaxed">Internal drive to achieve goals for self-satisfaction rather than purely external rewards (money, status).</p>
          </div>
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Empathy</h4>
            <p class="text-slate-500 leading-relaxed">Understanding the emotional coordinates of others. Listening 'between the lines' to read facial cues and voice tones.</p>
          </div>
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Social Skills</h4>
            <p class="text-slate-500 leading-relaxed">Managing emotions in others to build rapport, resolve conflicts, lead teams, and negotiate successfully.</p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which component of EQ is defined as the capacity to put oneself in another person's shoes and understand their perspective?",
        options: ["Self-Motivation", "Empathy", "Social Skills", "Self-Awareness"],
        answer: 1,
        explanation: "Empathy is the core capability to identify and share another person's emotional state or situation."
      },
      {
        question: "What is internal or intrinsic motivation?",
        options: [
          "Working only when threatened by a supervisor.",
          "A passion to pursue goals based on internal satisfaction, curiosity, and personal alignment.",
          "Working strictly for a financial bonus.",
          "Studying just to clear a test."
        ],
        answer: 1,
        explanation: "Intrinsic motivation comes from within—driven by joy, learning, and self-alignment, rather than carrots and sticks."
      },
      {
        question: "In Goleman's EQ model, 'Social Skills' is best described as:",
        options: [
          "Having many followers on social media.",
          "The ability to manage and guide other people's emotions to resolve conflicts and build networks.",
          "Talking continuously during meetings.",
          "Agreeing with everyone in a group."
        ],
        answer: 1,
        explanation: "Social skills represent the culmination of EQ—using awareness, control, and empathy to handle relations constructively."
      }
    ]
  },
  {
    id: 27,
    week: 6,
    title: "Advanced Writing Skills",
    youtubeId: "d2hV6sA9A87",
    objectives: [
      "Understand the mechanics of structured written communication.",
      "Explore the difference between reader-centered and writer-centered writing.",
      "Analyze techniques for organizing thoughts (pyramid principle)."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">WRITING WITH IMPACT</h3>
          <p class="text-sm text-slate-500 mt-1">Applying clarity and layout structure to official text.</p>
        </div>

        <div class="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
          <h4 class="font-bold text-amber-500 text-sm">The Pyramid Principle (Minto Structure)</h4>
          <p class="text-xs text-slate-300 leading-relaxed">
            When writing business messages, invert the academic essay structure. State your **conclusion first**, followed by key supporting pillars, and lastly provide the granular background details. Busy executives read the top first.
          </p>
          <div class="border-t border-slate-700 pt-3 flex justify-between text-xxs font-mono text-amber-400">
            <span>[Conclusion / Action Required]</span>
            <span>➔</span>
            <span>[3 Key Arguments]</span>
            <span>➔</span>
            <span>[Supporting Data]</span>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "In the Pyramid Principle of business writing, what should be presented first?",
        options: [
          "Detailed historical background data.",
          "The main recommendation, conclusion, or action required.",
          "Biographical introduction of the author.",
          "Glossary of terms."
        ],
        answer: 1,
        explanation: "The Pyramid Principle places the answer or primary conclusion at the top, followed by arguments, to save the reader's time."
      },
      {
        question: "What is 'Reader-Centered' writing?",
        options: [
          "Writing notes to yourself.",
          "Structuring content, tone, and terminology based on the reader's vocabulary, interests, and needs.",
          "Publishing books in large print.",
          "Letting the reader write the notes."
        ],
        answer: 1,
        explanation: "Reader-centric writing focuses on the reader's context, utilizing the 'you-attitude' and omitting jargon they won't understand."
      },
      {
        question: "Why should long blocks of text be avoided in business writing?",
        options: [
          "It takes too much ink to print.",
          "It causes visual fatigue, making the reader lose focus and miss key action points.",
          "It violates grammatical rules.",
          "It decreases search engine rankings."
        ],
        answer: 1,
        explanation: "White space and bullet points help readers scan documents quickly, locating core action points."
      }
    ]
  },
  {
    id: 28,
    week: 6,
    title: "Principles of Business Writing",
    youtubeId: "e2hV6sA9A88",
    objectives: [
      "Understand the primary rules of business correspondence.",
      "Explore word choice, sentence length, and active vs. passive voice.",
      "Analyze readability scores in corporate emails."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">BUSINESS CORRESPONDENCE RULES</h3>
          <p class="text-sm text-slate-500 mt-1">Drafting clear, active, and professional content.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-xs text-slate-700">
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Use Active Voice</h4>
            <p class="text-slate-500 leading-relaxed mb-2">
              Active voice is direct, strong, and identifies responsibility.
            </p>
            <div class="bg-red-50 text-red-800 p-2 rounded text-xxs font-mono mb-2">Passive: "A mistake was made by our team."</div>
            <div class="bg-green-50 text-green-800 p-2 rounded text-xxs font-mono">Active: "Our team made a mistake."</div>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Keep Sentences Concise</h4>
            <p class="text-slate-500 leading-relaxed mb-2">
              Average sentence length should be under 15-20 words for maximum readability.
            </p>
            <div class="bg-slate-50 p-2 rounded text-xxs leading-relaxed">
              Long, compound sentences confuse readers. Express one idea per sentence.
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which sentence is correctly written in the active voice?",
        options: [
          "The report was reviewed by the director.",
          "The director reviewed the report.",
          "Review of the report was done by the director.",
          "The report has been reviewed."
        ],
        answer: 1,
        explanation: "In 'The director reviewed the report,' the subject (director) performs the action (reviewed), which is the active voice structure."
      },
      {
        question: "What is a major rule regarding sentence length in business emails?",
        options: [
          "Use sentences containing at least 45 words.",
          "Limit sentences to a single, clear idea, averaging 15-20 words.",
          "Write entire paragraphs as a single sentence.",
          "Sentences should not contain adjectives."
        ],
        answer: 1,
        explanation: "Keeping sentences short (15-20 words) ensures high comprehension and prevents readers from losing track of the clause."
      },
      {
        question: "Why should redundant expressions like 'collaborate together' or 'end result' be avoided in professional writing?",
        options: [
          "They are grammatically illegal.",
          "They waste space and violate the principle of Conciseness.",
          "They sound too simple.",
          "They increase email delivery times."
        ],
        answer: 1,
        explanation: "Collaborating implies doing it together, and results are always at the end. Eliminating redundancies makes writing tight and crisp."
      }
    ]
  },
  {
    id: 29,
    week: 6,
    title: "Business Letters (Format and Style)",
    youtubeId: "f2hV6sA9A89",
    objectives: [
      "Understand the structural layout of a standard business letter.",
      "Explore the differences between Full-Block and Modified-Block formats.",
      "Analyze the essential sections: Salutation, Body, and Complimentary Close."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">BUSINESS LETTER FORMATS</h3>
          <p class="text-sm text-slate-500 mt-1">Analyzing alignment and structure rules.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">Full-Block Format (Modern Standard)</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Every element—Sender address, Date, Recipient Address, Salutation, Subject line, Paragraphs, Close, and Signature—starts at the **left margin**. No indentations are used. Double-spacing separates paragraphs.
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">Modified-Block Format</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Similar to block style, but the **Date, Complimentary Close, and Signature block** are aligned at the center point of the page. Paragraphs may or may not be indented.
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "In a Full-Block business letter format, where are the date and complimentary close aligned?",
        options: ["Right Margin", "Left Margin", "Center of the Page", "Indented by 5 spaces"],
        answer: 1,
        explanation: "Full-Block means *every* line begins flush with the left margin, with no indentations."
      },
      {
        question: "Which salutation is appropriate when writing to a business recipient whose name is unknown?",
        options: ["Dear Sir/Madam,", "Hey Friend,", "To whomsoever it may interest,", "Hello Department,"],
        answer: 0,
        explanation: "Dear Sir/Madam or Dear Customer Relations Director is standard and polite when the name is unknown."
      },
      {
        question: "What is double-spacing used for in a Block business letter format?",
        options: [
          "Between characters in words.",
          "Between paragraphs to separate them visually (since there are no tab indentations).",
          "Only around the signature block.",
          "Double-spacing is not used."
        ],
        answer: 1,
        explanation: "In block format, paragraphs are not indented, so a blank space (double return) must separate them."
      }
    ]
  },
  {
    id: 30,
    week: 6,
    title: "Types of Business Letters (Part II)",
    youtubeId: "g2hV6sA9A90",
    objectives: [
      "Analyze different categories of letters: Inquiry, Sales, Claim, and Collection.",
      "Explore the 3-step strategy for drafting bad-news letters.",
      "Understand the tone of a professional collection letter series."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-850">SPECIALIZED CORRESPONDENCE</h3>
          <p class="text-sm text-slate-500 mt-1">Drafting claims, collection, and bad news letters.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">The 3-Step Strategy for Bad-News Letters</h4>
          <p class="text-xs text-slate-655 leading-relaxed mb-3">
            Delivering negative news (job rejection, credit refusal) requires a **buffer approach** to maintain goodwill:
          </p>
          <ol class="space-y-2 text-xs text-slate-700">
            <li>✔ <strong>1. The Buffer:</strong> Start with a positive, neutral statement. Do not state the bad news instantly.</li>
            <li>✔ <strong>2. The Explanation & Refusal:</strong> Give objective reasons first, followed by a clear, soft refusal.</li>
            <li>✔ <strong>3. The Warm Close:</strong> Offer alternative solutions and close with a friendly, future-oriented greeting.</li>
          </ol>
        </div>

        <div class="bg-slate-900 text-white p-6 rounded-2xl">
          <h4 class="font-bold text-amber-500 mb-2 text-sm">Collection Letters Tone Progression</h4>
          <p class="text-xs text-slate-400 mb-3 font-semibold">When retrieving unpaid debts, companies send a series of letters shifting in tone:</p>
          <div class="grid grid-cols-3 gap-4 text-center text-xxs">
            <div class="bg-slate-800 p-2 rounded"><strong>Stage 1: Reminder</strong><br>Friendly, assuming oversight.</div>
            <div class="bg-slate-800 p-2 rounded"><strong>Stage 2: Inquiry</strong><br>Asking if there is an issue or payment plan needed.</div>
            <div class="bg-slate-800 p-2 rounded"><strong>Stage 3: Demand</strong><br>Firm statement of legal actions.</div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "When sending a bad-news letter (like rejecting a job applicant), what is a 'buffer'?",
        options: [
          "A warning note at the top.",
          "A neutral, positive opening statement designed to soften the emotional blow.",
          "A paragraph of terms.",
          "An attachment containing policies."
        ],
        answer: 1,
        explanation: "A buffer establishes a neutral connection with the reader before explaining the reasons for the refusal."
      },
      {
        question: "Why does the tone of collection letters change in stages?",
        options: [
          "To confuse the debtor.",
          "To maintain customer goodwill initially, shifting to legal firmness only as a last resort.",
          "Because different managers write them.",
          "To meet post office regulations."
        ],
        answer: 1,
        explanation: "Early letters assume an oversight (preserving relationships), while final stages require firm collection demand."
      },
      {
        question: "Which of the following describes a 'Claim Letter'?",
        options: [
          "A letter demanding salary hike.",
          "A letter requesting compensation, repair, or refund for defective products or services.",
          "A sales advertisement circular.",
          "A letter inquiring about job openings."
        ],
        answer: 1,
        explanation: "A claim (or complaint) letter formally notifies a seller about issues in shipment, billing, or quality, asking for adjustment."
      }
    ]
  },
  {
    id: 31,
    week: 7,
    title: "Writing Reports",
    youtubeId: "h2hV6sA9A91",
    objectives: [
      "Understand the definition and purpose of a business report.",
      "Analyze the difference between informational and analytical reports.",
      "Explore the stages of report preparation (research, outlining)."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">BUSINESS REPORT STRUCTURE</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding the objectives and planning of technical documents.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">Informational Reports</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Provides raw facts, data, progress updates, or activity records without drawing conclusions or offering recommendations (e.g., weekly sales report, status logs).
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">Analytical Reports</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Goes beyond data collection to analyze problems, interpret findings, draw logical conclusions, and recommend action steps (e.g., feasibility study, market entry report).
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is the primary difference between informational and analytical reports?",
        options: [
          "Informational reports contain only graphics; analytical reports have only text.",
          "Informational reports present data without analysis; analytical reports analyze data to draw conclusions and recommendations.",
          "Analytical reports are always much shorter.",
          "Informational reports are formal; analytical reports are informal."
        ],
        answer: 1,
        explanation: "Analytical reports interpret data to resolve issues or recommend decisions, whereas informational reports merely document data."
      },
      {
        question: "Which of the following is a classic example of an analytical business report?",
        options: ["Weekly employee attendance log", "Project feasibility study report", "Monthly financial balance sheet", "Standard corporate rules handbook"],
        answer: 1,
        explanation: "A feasibility study evaluates a business opportunity, analyzes pros and cons, and recommends whether to proceed."
      },
      {
        question: "What is the first step in planning a business report?",
        options: [
          "Designing the front cover page.",
          "Defining the exact problem, scope, and objective of the report.",
          "Drafting the bibliography page.",
          "Printing the document outline."
        ],
        answer: 1,
        explanation: "Before gathering data, you must clearly define the report's purpose and scope to stay focused."
      }
    ]
  },
  {
    id: 32,
    week: 7,
    title: "Types of Reports",
    youtubeId: "i2hV6sA9A92",
    objectives: [
      "Explore report classifications: Routine vs. Special, Formal vs. Informal.",
      "Analyze the structure of a Feasibility Report and Project Report.",
      "Understand the layout of statutory reports."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">REPORT TAXONOMIES</h3>
          <p class="text-sm text-slate-500 mt-1">Classifying documents by recurrence and legal context.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Routine Reports</h4>
            <p class="text-slate-500 leading-relaxed">
              Sent at fixed intervals (daily, weekly, monthly). They use pre-designed templates and keep managers updated on operations.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Special Reports</h4>
            <p class="text-slate-500 leading-relaxed">
              Written once to address a unique scenario (e.g., investigating a sudden factory accident or evaluating a company acquisition).
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-slate-200">
            <h4 class="font-bold text-amber-700 mb-2">Statutory Reports</h4>
            <p class="text-slate-500 leading-relaxed">
              Legally mandated reports submitted to government bodies (e.g., annual corporate audit reports submitted to regulators).
            </p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "An investigation report on a sudden fire outbreak at an office is classified as:",
        options: ["Routine Report", "Statutory Report", "Special Report", "Annual Report"],
        answer: 2,
        explanation: "An accident investigation is a one-time response to a unique incident, making it a special report."
      },
      {
        question: "Which reports are required by company laws and must be submitted to the Registrar of Companies?",
        options: ["Non-Statutory Reports", "Statutory Reports", "Informal memos", "Routine weekly logs"],
        answer: 1,
        explanation: "Statutory reports are legally required by laws and government authorities to maintain corporate registration status."
      },
      {
        question: "What distinguishes an informal report from a formal report?",
        options: [
          "Informal reports use a memo format and are usually short; formal reports have titles, tables of contents, and appendices.",
          "Informal reports contain only opinions.",
          "Formal reports are always printed in black and white.",
          "Informal reports do not require dates."
        ],
        answer: 0,
        explanation: "Formal reports have elaborate structural sections (prefatory, text, supplemental), while informal reports are set up like memos or letters."
      }
    ]
  },
  {
    id: 33,
    week: 7,
    title: "Structure of Report",
    youtubeId: "j2hV6sA9A93",
    objectives: [
      "Analyze the three main divisions of a formal report.",
      "Explore prefatory elements (Title page, Letter of Transmittal, Abstract).",
      "Understand supplementary elements (Appendix, Bibliography)."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">FORMAL REPORT ANATOMY</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding the prefatory, text, and supplementary divisions.</p>
        </div>

        <div class="bg-slate-900 text-white p-6 rounded-2xl space-y-4 text-xs">
          <h4 class="font-bold text-amber-500 text-sm">The 3 Structural Divisions</h4>
          <div class="space-y-3">
            <div class="border-b border-slate-850 pb-2">
              <span class="text-amber-400 font-bold block mb-1">1. Prefatory Elements (Front Matter)</span>
              Cover Page, Title Page, Letter of Authorization, Letter of Transmittal, Table of Contents, Executive Summary (Abstract).
            </div>
            <div class="border-b border-slate-850 pb-2">
              <span class="text-amber-400 font-bold block mb-1">2. Text Elements (Body Matter)</span>
              Introduction, Methodology, Findings/Data presentation, Conclusions, Recommendations.
            </div>
            <div>
              <span class="text-amber-400 font-bold block mb-1">3. Supplemental Elements (Back Matter)</span>
              Appendix (raw charts, calculations), Glossary (definitions), Bibliography/References.
            </div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following is considered a prefatory (front matter) element of a formal report?",
        options: ["Appendix", "Executive Summary", "Bibliography", "Methodology"],
        answer: 1,
        explanation: "The Executive Summary or Abstract resides at the beginning (front matter) to summarize findings for busy decision makers."
      },
      {
        question: "What is the primary function of the Appendix in a report?",
        options: [
          "To summarize the entire report.",
          "To hold raw data, complex mathematical derivations, and sample questionnaires that would clutter the main text.",
          "To outline the table of contents.",
          "To list the references used."
        ],
        answer: 1,
        explanation: "Appendices hold supporting materials that are too detailed or bulky for the main body but essential for verification."
      },
      {
        question: "Where is a 'Letter of Transmittal' placed in a formal report structure?",
        options: ["At the very end of the Appendix.", "In the prefatory section, before the table of contents.", "Inside the findings chapter.", "It is sent in a separate email only."],
        answer: 1,
        explanation: "The Letter of Transmittal introduces the report to the commissioning authority, placed in the prefatory section."
      }
    ]
  },
  {
    id: 34,
    week: 7,
    title: "Report Style / Editing",
    youtubeId: "k2hV6sA9A94",
    objectives: [
      "Understand the objectivity requirements in report writing.",
      "Explore formatting rules, headings, and proofreading checklist.",
      "Analyze the role of active verbs in executive summaries."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">EDITING AND OBJECTIVITY</h3>
          <p class="text-sm text-slate-500 mt-1">Eliminating bias and proofreading reports.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">Maintaining Objectivity (Third-Person Tone)</h4>
          <p class="text-xs text-slate-655 leading-relaxed mb-3">
            Reports must be free of emotional bias and personal pronouns. Avoid "I feel the sales are dropping." Instead, write: "The sales data indicates a 14% decline."
          </p>
          <div class="grid grid-cols-2 gap-4 text-xxs font-mono">
            <div class="bg-red-50 text-red-800 p-2 rounded">Subjective: "I believe our competitor's packaging is much better."</div>
            <div class="bg-green-50 text-green-800 p-2 rounded">Objective: "Competitor analysis indicates higher consumer appeal for minimalist packaging designs."</div>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following sentences exhibits the correct objective tone for a report?",
        options: [
          "I think we are losing customers because our site looks boring.",
          "Our customer survey indicates a 22% drop in satisfaction due to navigation issues.",
          "My feeling is that the team is not working hard enough.",
          "We must blame the marketing head for the drop."
        ],
        answer: 1,
        explanation: "Objective reporting relies on evidence, facts, and data ('survey indicates 22% drop') rather than personal feelings."
      },
      {
        question: "Why should personal pronouns (I, We, You) be avoided in formal report text?",
        options: [
          "They make the document too long.",
          "They shift the focus from objective data to personal biases.",
          "They are grammatically incorrect in all contexts.",
          "They increase printing costs."
        ],
        answer: 1,
        explanation: "Third-person passive/active construction maintains an impartial, authoritative, and data-driven perspective."
      },
      {
        question: "What is the primary goal of the proofreading stage in editing?",
        options: [
          "Rewriting the whole report from scratch.",
          "Detecting spelling, grammar, punctuation, and mechanical layout errors.",
          "Adding more data charts.",
          "Evaluating the competitor's reports."
        ],
        answer: 1,
        explanation: "Proofreading is the final polishing stage, targeting mechanical, typographical, and formatting errors."
      }
    ]
  },
  {
    id: 35,
    week: 7,
    title: "Leadership Skills",
    youtubeId: "l2hV6sA9A95",
    objectives: [
      "Understand the difference between a Manager and a Leader.",
      "Explore leadership styles (Autocratic, Democratic, Laissez-Faire).",
      "Analyze the role of vision, integrity, and situational leadership."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">LEADERSHIP VS. MANAGEMENT</h3>
          <p class="text-sm text-slate-500 mt-1">Understanding direction setting vs. system execution.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 text-sm">
          <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">The Manager (Execution focus)</h4>
            <p class="text-xs text-slate-655 leading-relaxed">
              Managers plan, organize, coordinate, and control processes. They focus on maintaining systems, efficiency, and compliance.
              <br><strong class="mt-2 block">Motto:</strong> "Do things right."
            </p>
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 class="font-bold text-amber-500 mb-2">The Leader (Vision focus)</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Leaders establish vision, inspire teams, drive change, and align people. They focus on innovation, relationships, and transformation.
              <br><strong class="mt-2 block">Motto:</strong> "Do the right things."
            </p>
          </div>
        </div>

        <div class="p-6 bg-white border border-slate-200 rounded-2xl">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">Three Core Styles of Leadership</h4>
          <ul class="space-y-2 text-xs text-slate-650">
            <li>• <strong>Autocratic (Authoritarian):</strong> Directing team, making decisions alone. Useful in emergencies.</li>
            <li>• <strong>Democratic (Participative):</strong> Consulting team members, building consensus. High morale but slower decisions.</li>
            <li>• <strong>Laissez-Faire (Delegative):</strong> Giving absolute freedom to experts. Works with highly motivated, expert teams.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Which of the following captures the core distinction between leadership and management?",
        options: [
          "Managers setting directions; leaders maintaining systems.",
          "Leaders inspiring vision and driving change; managers executing systems and maintaining order.",
          "Managers are always autocratic; leaders are democratic.",
          "There is no practical difference."
        ],
        answer: 1,
        explanation: "Leaders focus on transformation and vision (aligning people), whereas managers focus on transactional efficiency (processes)."
      },
      {
        question: "In which leadership style does the leader delegate decision-making entirely to team members, intervening minimally?",
        options: ["Autocratic Style", "Democratic Style", "Laissez-Faire Style", "Bureaucratic Style"],
        answer: 2,
        explanation: "Laissez-Faire is hands-off leadership, giving employees absolute freedom to choose methods and take decisions."
      },
      {
        question: "When is the Autocratic (Authoritarian) leadership style most effective?",
        options: [
          "During creative brainstorm sessions for new ideas.",
          "During crisis, emergencies, or tight deadlines requiring immediate coordinated actions.",
          "When working with highly experienced senior developers.",
          "Autocratic style is never effective."
        ],
        answer: 1,
        explanation: "In emergencies, consensus-building (democratic) takes too long. Autocratic leadership provides direct, fast coordination."
      }
    ]
  },
  {
    id: 36,
    week: 8,
    title: "Group Discussion",
    youtubeId: "m2hV6sA9A96",
    objectives: [
      "Understand the purpose of Group Discussions (GD) in recruitment.",
      "Analyze the parameters evaluated in GD (knowledge, leadership, coordination).",
      "Explore strategies for initiating, contributing, and summarizing a GD."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">GROUP DISCUSSION MECHANICS</h3>
          <p class="text-sm text-slate-500 mt-1">Navigating collaborative and competitive group debates.</p>
        </div>

        <div class="bg-slate-900 text-white p-6 rounded-2xl">
          <h4 class="font-bold text-amber-500 mb-3 text-sm">Key Evaluation Parameters in GD</h4>
          <ul class="grid grid-cols-2 gap-4 text-xs text-slate-300">
            <li>• <strong>Subject Knowledge:</strong> Accuracy and depth of facts.</li>
            <li>• <strong>Communication Skills:</strong> Voice modulation and clarity.</li>
            <li>• <strong>Listening Skills:</strong> Responding to others' arguments.</li>
            <li>• <strong>Leadership:</strong> Guiding stray discussions back to focus.</li>
          </ul>
        </div>

        <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
          <h4 class="font-bold text-amber-900 mb-2 text-sm">The Initiator Trap vs. The Summarizer Advantage</h4>
          <p class="text-xs text-slate-655 leading-relaxed">
            Starting a GD gets you high marks **only** if your content is strong. If you open with vague fluff, you damage your score. Conversely, listening carefully and delivering a balanced summary of all viewpoints at the end is a highly safe, high-scoring strategy.
          </p>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Why do corporate recruiters conduct Group Discussions (GD)?",
        options: [
          "To test individual memory of technical textbooks.",
          "To evaluate team dynamics, leadership, listening skills, and communication under pressure.",
          "To let candidates argue and choose a winner.",
          "To save time on interviews."
        ],
        answer: 1,
        explanation: "GD acts as a simulator for team meetings, evaluating interpersonal traits and listening capacities alongside knowledge."
      },
      {
        question: "Is initiating the Group Discussion always advantageous?",
        options: [
          "Yes, it guarantees selection.",
          "No, it is only useful if you possess solid facts and can present the topic logically.",
          "No, initiators are always rejected.",
          "Only in technical topics."
        ],
        answer: 1,
        explanation: "Initiating with weak, vague content shows poor judgment. Initiating only pays off when your start is structured and logical."
      },
      {
        question: "How should a candidate handle a dominant, shouting participant in a GD?",
        options: [
          "Shout louder than them to establish dominance.",
          "Remain silent and stop participating.",
          "Wait for them to pause, then intervene politely, addressing the entire group to return structure.",
          "Argue personally with them."
        ],
        answer: 2,
        explanation: "Shouting reduces your score. The professional response is to keep your composure, wait for a gap, and redirect the focus group-wide."
      }
    ]
  },
  {
    id: 37,
    week: 8,
    title: "Advanced Speaking Skills",
    youtubeId: "n2hV6sA9A97",
    objectives: [
      "Understand strategies of public speaking and speech structures.",
      "Explore techniques of impromptu speaking (Extempore).",
      "Analyze the role of audience analysis and adjustments."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">PUBLIC SPEAKING & ORATORY</h3>
          <p class="text-sm text-slate-500 mt-1">Mastering delivery structures and extempore situations.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 mb-3 text-sm">The 'PREP' Formula for Impromptu Speaking</h4>
          <p class="text-xs text-slate-655 leading-relaxed mb-3">
            When asked to speak on the spot (Extempore), use this framework to structure your thoughts instantly:
          </p>
          <ul class="space-y-2 text-xs text-slate-700">
            <li>📌 <strong>P - Position:</strong> State your stance on the topic immediately.</li>
            <li>📌 <strong>R - Reason:</strong> Explain why you hold this view.</li>
            <li>📌 <strong>E - Example:</strong> Provide a fact, case, or personal anecdote.</li>
            <li>📌 <strong>P - Position:</strong> Restate your stance to close strongly.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does the 'E' in the extempore PREP formula stand for?",
        options: ["Evaluation", "Example", "Emotion", "Exposition"],
        answer: 1,
        explanation: "E stands for Example—supporting your reasons with a concrete scenario, fact, or story to build credibility."
      },
      {
        question: "What should be a speaker's primary action during the first 60 seconds of a speech?",
        options: [
          "Apologizing for being nervous.",
          "Grabbing audience attention (hook) with a question, quotation, or shocking statistic.",
          "Reading the table of contents.",
          "Distributing copies of the slides."
        ],
        answer: 1,
        explanation: "The first minute sets the tone. An attention hook establishes audience engagement instantly."
      },
      {
        question: "Impromptu speaking (Extempore) requires:",
        options: [
          "Weeks of manuscript memorization.",
          "Thinking on your feet and structuring brief remarks using frameworks like PREP.",
          "Refusing to speak if unprepared.",
          "Reading directly from slides."
        ],
        answer: 1,
        explanation: "Extempore tests spontaneous reasoning, flow, and structural organization under immediate time constraints."
      }
    ]
  },
  {
    id: 38,
    week: 8,
    title: "Oral Presentation (Planning)",
    youtubeId: "o2hV6sA9A98",
    objectives: [
      "Analyze the three stages of oral presentation: Planning, Preparing, and Delivering.",
      "Explore the 3Ps framework: Purpose, People, and Place.",
      "Understand how to design highly readable slides."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">THE PLANNING PHASE</h3>
          <p class="text-sm text-slate-500 mt-1">Applying the 3P checklist before drafting slides.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div class="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">1. Purpose</h4>
            <p class="text-slate-655 leading-relaxed font-semibold">Define the core objective:</p>
            <p class="text-slate-500 mt-1">Is it to Inform, Persuade, Motivate, or Instruct?</p>
          </div>
          <div class="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">2. People (Audience)</h4>
            <p class="text-slate-655 leading-relaxed font-semibold">Map the demographics:</p>
            <p class="text-slate-500 mt-1">What is their age, technical expertise, and expectations?</p>
          </div>
          <div class="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
            <h4 class="font-bold text-amber-900 mb-2">3. Place (Environment)</h4>
            <p class="text-slate-655 leading-relaxed font-semibold">Analyze the settings:</p>
            <p class="text-slate-500 mt-1">Room size, acoustics, projectors, seating arrangement.</p>
          </div>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What are the three components of the planning phase checklist for presentations?",
        options: [
          "Pricing, Product, Promotion",
          "Purpose, People (Audience), Place (Environment)",
          "Preparation, Practice, Printing",
          "Projector, Pointer, Podium"
        ],
        answer: 1,
        explanation: "Purpose (objective), People (audience analysis), and Place (physical layout) make up the three key planning checks."
      },
      {
        question: "How does audience analysis impact slide design?",
        options: [
          "It determines the size of the projector.",
          "It dictates technical depth, language style, and visual density required.",
          "It makes slide creation unnecessary.",
          "It forces you to use many animations."
        ],
        answer: 1,
        explanation: "If the audience is non-technical, slides must skip heavy math and code; if they are experts, they expect analytical details."
      },
      {
        question: "What is a major rule for visual slide layouts?",
        options: [
          "Fill every inch of space with text.",
          "Use high contrast, generous white space, and limit text to key bullets.",
          "Use at least 8 different colors and moving animations.",
          "Slides should contain only images with no titles."
        ],
        answer: 1,
        explanation: "Clean slides with high-contrast text and whitespace allow the audience to focus on the speaker rather than reading walls of text."
      }
    ]
  },
  {
    id: 39,
    week: 8,
    title: "Oral Presentation (Delivery & Combating Nervousness)",
    youtubeId: "p2hV6sA9A99",
    objectives: [
      "Understand stage fright and its physiological triggers.",
      "Explore strategies to combat stage nervousness (rehearsals, visualization).",
      "Analyze delivery techniques (eye contact, pacing, posture)."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">STAGE FRIGHT & DELIVERY</h3>
          <p class="text-sm text-slate-500 mt-1">Managing adrenaline and establishing presence.</p>
        </div>

        <div class="bg-slate-900 text-white p-6 rounded-2xl">
          <h4 class="font-bold text-amber-500 mb-3 text-sm">Managing Stage Nervousness</h4>
          <p class="text-xs text-slate-350 leading-relaxed mb-4">
            Stage fright is a natural adrenaline spike. You cannot eliminate it completely, but you can channel it into dynamic delivery energy using these methods:
          </p>
          <ul class="space-y-2 text-xs text-slate-300">
            <li>✔ <strong>Visualizing Success:</strong> Mentally walking through a smooth presentation.</li>
            <li>✔ <strong>The 3-Second Rule:</strong> Scanning the room and making eye contact with supportive listeners.</li>
            <li>✔ <strong>Rehearsals:</strong> Practicing aloud at least 3-5 times before the final delivery.</li>
            <li>✔ <strong>Deep Breathing:</strong> Slowing respiration rates to reduce heart palpitations.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Why is complete memorization of a presentation manuscript discouraged?",
        options: [
          "It takes too little time.",
          "If you forget a single word, you risk panic and complete derailment.",
          "It makes your speech sound too natural.",
          "Recruiters forbid it."
        ],
        answer: 1,
        explanation: "Memorization makes delivery sound robotic, and a minor memory lapse can cause immediate confusion and anxiety."
      },
      {
        question: "What physical action helps project confidence during delivery?",
        options: [
          "Pacing rapidly back and forth across the stage.",
          "Standing tall with open body language, and using steady gestures matching your points.",
          "Keeping hands inside pockets.",
          "Staring solely at the ceiling."
        ],
        answer: 1,
        explanation: "A stable stance, shoulder-width apart, combined with open hand gestures, signals authority and keeps you grounded."
      },
      {
        question: "How should a speaker use eye contact during a presentation?",
        options: [
          "Stare continuously at one person.",
          "Scan the entire room, making 2-3 seconds of contact with individual audience members.",
          "Look only at the laptop display.",
          "Look at the back wall without looking at people."
        ],
        answer: 1,
        explanation: "Distributing eye contact across different sections of the room connects the speaker to the entire audience."
      }
    ]
  },
  {
    id: 40,
    week: 8,
    title: "Group Communication",
    youtubeId: "q2hV6sA9A100",
    objectives: [
      "Understand the dynamics of communicating in small and large teams.",
      "Explore meeting management, agendas, and minutes of meetings (MoM).",
      "Analyze the role of active listening and consensus in team execution."
    ],
    notes: `
      <div class="space-y-6">
        <div class="border-l-4 border-amber-500 pl-4">
          <h3 class="text-xl font-bold text-slate-800">MEETING DYNAMICS & MINUTES</h3>
          <p class="text-sm text-slate-500 mt-1">Structuring group meetings and documenting decisions.</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <h4 class="font-bold text-slate-800 text-sm">Two Essential Meeting Documents</h4>
          <ul class="space-y-3 text-xs text-slate-655">
            <li>
              📝 <strong>The Agenda:</strong> A document sent *before* the meeting listing the topics, speakers, and schedule. It keeps the discussion focused.
            </li>
            <li>
              📝 <strong>Minutes of the Meeting (MoM):</strong> The official written record of the decisions, assignments, and action plans made during the meeting, distributed *afterwards*.
            </li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is the primary purpose of a meeting Agenda sent in advance?",
        options: [
          "To check who is absent.",
          "To keep the meeting structured, focused, and on time.",
          "To serve as a legal waiver.",
          "To list the names of attendees."
        ],
        answer: 1,
        explanation: "An agenda defines the scope and flow of the meeting, preventing digressions and wasting time."
      },
      {
        question: "What does MoM stand for in corporate communication?",
        options: ["Management of Meetings", "Minutes of the Meeting", "Methods of Management", "Model of Motivation"],
        answer: 1,
        explanation: "MoM stands for 'Minutes of the Meeting'—the official recorded details of discussions and actions decided upon."
      },
      {
        question: "Who is typically responsible for documenting the Minutes of the Meeting?",
        options: ["The external client", "A designated scribe or secretary", "All participants simultaneously", "The company CEO"],
        answer: 1,
        explanation: "A designated scribe (often the secretary or project coordinator) takes notes to produce the official MoM report."
      }
    ]
  }
];
