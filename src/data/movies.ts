import { Movie, ContentRow } from '../types';

// Import images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Expo Agents',
    description: "Expo.ai's intelligent agents are a breakthrough in no-code automation, delivering personalized AI co-pilots that execute complex tasks seamlessly. These agents interact with APIs, make smart decisions, and automate multi-step workflows with zero manual input. Built for speed and adaptability, they enable users—from solo developers to enterprise teams—to offload repetitive work and focus on strategic goals. Unlike traditional tools that require intricate logic building or coding expertise, Expo Agents are ready out-of-the-box, understand context, and evolve with user needs. They can triage incoming information, launch multi-branch logic, or even run continuous background operations. Users can integrate them into systems like CRMs, help desks, marketing stacks, or internal operations to eliminate friction and unlock real-time responsiveness. Whether it's scheduling, summarizing, classifying, or analyzing, Expo Agents act with autonomy—bridging the gap between static automation and dynamic decision-making. This represents a shift from 'if-this-then-that' logic to AI-augmented reasoning in automation.",
    genre: ['AI', 'Automation', 'No-Code'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 15m',
    thumbnail: img1,
    backdrop: img1,
    videoUrl: '/videos/expo-agents.mp4',
    trailerUrl: '/videos/expo-agents-trailer.mp4',
    likes: 1250
  },
  {
    id: '2',
    title: 'Solo Launch',
    description: "In a standout example of speed and innovation, a solo founder built and launched a complete GPT-powered application in just 14 days using Expo.ai. This success story not only highlights the platform's power but also demonstrates how indie developers can match the agility of startup teams. The app was conceived, designed, built, tested, and shipped—all within two weeks—thanks to Expo.ai's no-code agents, reusable workflows, and integrated AI features. This case study is more than just a testimonial; it's proof that with the right tools, individual creators can produce production-grade AI products without needing a team of engineers. The platform's prebuilt workflows, seamless integration capabilities, and customizable logic blocks allowed the founder to iterate rapidly. Expo.ai eliminated the traditional bottlenecks of coding, deployment, and infrastructure setup, empowering the creator to focus entirely on user experience and problem-solving. This solo launch reveals a deeper trend: the democratization of AI development.",
    genre: ['Startup', 'Innovation', 'Success Story'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: img2,
    backdrop: img2,
    videoUrl: '/videos/solo-launch.mp4',
    trailerUrl: '/videos/solo-launch-trailer.mp4',
    likes: 890
  },
  {
    id: '3',
    title: 'Workflow Marketplace',
    description: "Expo.ai's newly launched Workflow Marketplace is a game-changer for AI-powered automation. With over 200 ready-to-deploy workflows, the marketplace transforms how users approach task automation—making it faster, easier, and more scalable. Whether you need a lead generation bot, a document summarizer, a calendar scheduler, or a social media assistant, there's a plug-and-play workflow ready to go. The workflows span multiple domains—marketing, customer service, data processing, internal ops—covering real-world use cases that would otherwise require significant setup time or coding knowledge. Each workflow comes pre-configured but remains customizable, allowing users to tweak logic, inputs, and triggers according to their needs. This marketplace approach removes the barrier of building from scratch. Users can simply browse, preview, and activate workflows within minutes, turning the platform into a modular automation system. It's akin to a SaaS app store—but for intelligent workflows.",
    genre: ['Marketplace', 'Automation', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: img3,
    backdrop: img3,
    videoUrl: '/videos/workflow-marketplace.mp4',
    trailerUrl: '/videos/workflow-marketplace-trailer.mp4',
    likes: 1100
  },
  {
    id: '4',
    title: 'Custom GPT',
    description: "Expo.ai introduces a user-friendly guide that empowers anyone—regardless of technical background—to build custom GPT agents within its platform. This no-code tutorial demystifies the process, walking users through every step: defining an agent's role, setting response behavior, configuring data inputs, and embedding the tool into workflows. With an intuitive UI and contextual prompts, users can design GPTs to answer customer queries, generate content, transform data, or act as assistants within specific business functions. This guide lowers the bar to entry, making advanced AI accessible to business teams, educators, marketers, and solo creators. Instead of wrangling APIs or writing Python code, users simply describe their GPT's function, set a few parameters, and deploy instantly. Expo.ai handles the backend complexity—model access, session memory, API interactions—behind the scenes. More importantly, the platform lets you link your custom GPT to triggers, data streams, and multi-step workflows.",
    genre: ['AI', 'Tutorial', 'Custom'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: img4,
    backdrop: img4,
    videoUrl: '/videos/custom-gpt.mp4',
    trailerUrl: '/videos/custom-gpt-trailer.mp4',
    likes: 750
  },
  {
    id: '5',
    title: 'Automation Future',
    description: "Expo.ai paints a compelling vision for the future of intelligent automation, focusing on the evolution from static workflows to adaptive, self-improving agents. This isn't just about automating tasks—it's about building systems that learn from interactions, improve over time, and proactively adapt to changing needs. In this forward-looking article, Expo.ai explores the concept of agentic workflows—AI agents that observe outcomes, refine their strategies, and coordinate with other tools and agents in real time. This approach mirrors how human teams collaborate and evolve, but with the speed and consistency of machines. Imagine an AI assistant that not only responds to emails but also learns which replies get better engagement—and adjusts tone accordingly. Or a customer support bot that evolves its scripts based on resolution success. Expo.ai is working toward this vision by embedding feedback loops, logging intelligence, and context-aware actions into its automation infrastructure.",
    genre: ['Future', 'AI', 'Vision'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 20m',
    thumbnail: img5,
    backdrop: img5,
    videoUrl: '/videos/automation-future.mp4',
    trailerUrl: '/videos/automation-future-trailer.mp4',
    likes: 1350
  },
  {
    id: '6',
    title: 'Team Templates',
    description: "Expo.ai introduces Team Templates, a powerful feature that allows users to create, save, and share custom workflow blueprints across their organization. This innovation is designed for speed, consistency, and collaboration—especially valuable for teams scaling operations or onboarding new members. With Team Templates, users can define standardized workflows for common tasks (like lead qualification, internal approvals, or content publishing) and distribute them organization-wide. New users can instantly deploy these pre-vetted processes without needing to configure anything from scratch. It's like giving every team a starter kit tailored to their exact needs. This system improves process reliability by minimizing variation and errors. It also fosters knowledge sharing across departments. For example, a marketing automation that worked well in one campaign can be templatized and reused in future launches or by another region. Templates support versioning, so updates propagate efficiently.",
    genre: ['Team', 'Templates', 'Collaboration'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: img11,
    backdrop: img11,
    videoUrl: '/videos/team-templates.mp4',
    trailerUrl: '/videos/team-templates-trailer.mp4',
    likes: 920
  },
  {
    id: '7',
    title: 'Smart Inbox',
    description: "Expo.ai's Smart Inbox feature transforms Gmail and Outlook into dynamic automation hubs by integrating directly with your inbox and enabling intelligent email workflows. It's not just an email filter—it's an AI assistant that acts on your behalf. Smart Inbox can auto-tag messages based on content, generate replies using GPT, trigger custom workflows from email events, and summarize threads to save time. It lets users build email-based automations visually, without code. For example, an inbound client request can instantly create a task, notify a Slack channel, and add the lead to a CRM—all based on email content. The power lies in combining AI with contextual triggers: natural language classification, sentiment detection, and pattern matching are built into the system. Smart Inbox can escalate issues, follow up with reminders, or route emails to other automations. Teams can build shared inbox rules to ensure timely and consistent responses.",
    genre: ['Email', 'Automation', 'Smart'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: img12,
    backdrop: img12,
    videoUrl: '/videos/smart-inbox.mp4',
    trailerUrl: '/videos/smart-inbox-trailer.mp4',
    likes: 680
  },
  {
    id: '8',
    title: 'Behind the Dashboard',
    description: "Expo.ai has overhauled its dashboard, delivering a dramatically improved interface that enhances the entire user experience—from first-time builders to advanced automation architects. The update introduces live logging, grouped nodes, real-time previews, and cleaner visuals—making it easier to build, monitor, and debug complex workflows. With live logs, users can now track agent behavior, data flow, and error points in real time, dramatically reducing friction in testing and troubleshooting. Grouped nodes help manage complexity by allowing users to cluster steps into labeled sections, improving readability and modularity. Real-time previews offer an instant view of how data moves through a workflow, revealing edge cases and logic misfires before they become problems. Visually, the dashboard feels modern and responsive, with drag-and-drop enhancements and collapsible panels that adapt to user focus. These upgrades reflect Expo's commitment to both power and usability.",
    genre: ['Dashboard', 'UX', 'Interface'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: img13,
    backdrop: img13,
    videoUrl: '/videos/dashboard.mp4',
    trailerUrl: '/videos/dashboard-trailer.mp4',
    likes: 1050
  }
];

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'Expo Agents Revolution',
  description: "Experience the future of intelligent automation with Expo.ai's breakthrough agent technology. These AI co-pilots don't just follow instructions—they think, adapt, and evolve with your business needs. From API interactions to complex decision-making, Expo Agents represent the next generation of no-code automation that bridges the gap between static workflows and dynamic intelligence.",
  genre: ['AI', 'Automation', 'Innovation'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 30m',
  thumbnail: img31,
  backdrop: img31,
  videoUrl: '/videos/featured-expo.mp4',
  trailerUrl: '/videos/featured-expo-trailer.mp4',
  isFeatured: true,
  likes: 2100
};

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.slice(0, 6)
  },
  {
    id: 'expo-features',
    title: 'Expo.ai Features',
    movies: movies.slice(0, 8)
  },
  {
    id: 'automation',
    title: 'Automation & AI',
    movies: [movies[0], movies[2], movies[4], movies[7], movies[1]]
  },
  {
    id: 'success-stories',
    title: 'Success Stories',
    movies: [movies[1], movies[5], movies[6]]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically based on likes
  }
];

export const getMostLikedMovies = (movieLikes: Record<string, number>) => {
  return movies
    .map(movie => ({
      ...movie,
      likes: movieLikes[movie.id] || movie.likes || 0
    }))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};