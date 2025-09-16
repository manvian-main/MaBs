import React, { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import SubscribeNow from '../Blogs/Subscribenow';

import Img1 from '../../assets/Blogs/Trending/1.png';
import Img2 from '../../assets/Blogs/Trending/2.png';
import Img3 from '../../assets/Blogs/Trending/3.png';
import Img4 from '../../assets/Blogs/Trending/4.png';
import Img5 from '../../assets/Blogs/Trending/5.png';
import Imag1 from '../../assets/Blogs/Author/Touheed_Fathima.jpg';
import Imag2 from '../../assets/Blogs/Author/Pranav_Jeyan.jpg';
import Imag3 from '../../assets/Blogs/Author/Aravind.jpg';
import { a } from "framer-motion/client";

const blogData = [
  {
    id: 1,
    title: 'AI Doesn’t Replace People — It Reshapes Possibilities',
    description: 'AI doesn’t replace people — it empowers them to explore new possibilities and redefine what’s achievable.',
    image: Img1,
    author: 'Touheed Fathima',
    authorImage: Imag1,
    date: 'June 01, 2025',
    category: 'Tech & Innovation',
    content: [
      '“AI Doesn’t Replace People — It Reshapes Possibilities”: How Smart Brands Are Listening to Customers Differently',
      'June 01, 2025',
      '',
      '“The best marketing doesn’t feel like marketing, It feels like someone understands you.          — Tom Fishburne',
      '',
      'In today’s digital landscape, attention is currency. Every brand — big or small — is trying to earn just a few more seconds of their customer’s time. But how do you stand out when customers are bombarded with thousands of messages each day?',
      '',
      'The answer lies not in louder marketing, but smarter listening — and Artificial Intelligence (AI) is leading the way.',
      '',
      'The Real Problem: Data Without Direction',
      'Businesses today are sitting on mountains of data:',
      '',
      'Clicks on ads',
      'Time spent on product pages',
      'Wishlist additions',
      'Social media likes, shares, and comments',
      'Online reviews and feedback',
      '',
      'But data alone doesn’t tell you what your customer actually wants. And most growing brands don’t have the time, tools, or teams to sift through it all.',
      '',
      '“We’re not short on data — we’re short on direction.”',
      '',
      'The result? Missed opportunities, generic marketing, and customers who feel unseen.',
      '',
      'The AI Shift: From Guesswork to Precision',
      'AI steps in not to replace marketing teams, but to amplify their impact.',
      '',
      'With the power of machine learning and predictive analytics, AI can:',
      '',
      'Identify customer patterns faster than any human could',
      'Recommend the next best product or content based on real behavior',
      'Automate personalized emails that feel like they were written just for you',
      'Analyze reviews to uncover hidden customer pain points',
      '',
      'Brands like Amazon, Netflix, and Spotify have mastered this. Their secret? They listen better, using AI to understand each user’s preferences and deliver exactly what they’re looking for — often before the user even asks.',
      '',
      'But Isn’t AI Replacing People?',
      'Not at all. In fact, AI is reshaping roles, not replacing them.',
      '',
      '“AI won’t replace humans. But humans using AI will replace those who don’t.”',
      '',
      '                                                                                          — Inspired by Garry Kasparov',
      '',
      'AI handles the heavy-lifting: data crunching, pattern finding, automation. This frees up human teams to focus on the things only humans do best:',
      '',
      'Creativity',
      'Empathy',
      'Brand storytelling',
      'Strategic thinking',
      '',
      'Imagine a marketing team that spends less time guessing and more time crafting impactful messages — because AI already showed them what matters most to each customer.',
      '',
      'How Any Business Can Start Using AI — Today',
      'You don’t need to be a tech giant or have a dedicated AI lab. Even growing businesses, like creative agencies and startups, can start integrating AI in simple but meaningful ways.',
      '',
      'Here’s how:',
      '',
      'Customer Segmentation',
      'Use AI-powered tools to group your audience based on behavior, location, or interests — making targeting far more effective.',
      '',
      'Recommendation Engines',
      'Suggest products, blog posts, or services based on what each visitor interacted with.',
      '',
      'AI Content Creation',
      'Tools like ChatGPT, Jasper, or Copy.ai can help you draft personalized email campaigns, social posts, or ads — fast.',
      '',
      'Smart Chatbots',
      'AI chat assistants can answer common questions 24/7, qualify leads, and even schedule appointments.',
      '',
      'Sentiment Analysis',
      'AI can scan thousands of reviews or comments and tell you what your audience feels — positive, negative, or neutral.',
      '',
      'These tools aren’t just shiny tech. They’re engines for growth, especially when paired with a human strategy.',
      '',
      'Final Takeaway: It’s Not Too Late to Start',
      'AI is no longer a far-off innovation. It’s here. And it’s scalable.',
      '',
      '“We understand the challenges of scaling smart — because we’re doing it too.”',
      '',
      'At Manvian, we believe in making powerful ideas like AI accessible and actionable, not just for global giants but for brands on the rise — businesses who are ready to grow smarter.',
      '',
      'In the end, AI doesn’t make your brand less human. It helps you become more human — by listening better, responding faster, and connecting deeper.',
      '',
      'Ready to Explore AI for Your Brand?',
      'Whether you\'re a startup founder, a creative agency, or a growing business, now is the time to harness the tools that help you listen and lead smarter.'
    ],
    authorBio: 'Touheed Fathima is an AI developer and digital strategist passionate about the intersection of artificial intelligence and human creativity, helping brands build smarter, more connected experiences.'
  },
  {
    id: 2,
    title: 'Enhancing Cybersecurity: Top Solutions for Digital Protection',
    description: 'Enhancing Cybersecurity with cutting-edge solutions to safeguard your digital world.',
    image: Img2,
    authorImage: Imag2,
    author: 'V Pranav Jeyan',
    date: 'May 03, 2025',
    category: 'Tech & Innovation',
    content: [
      "In today’s hyper-connected world, the digital landscape is more vulnerable than ever. Cyberattacks, data breaches, ransomware, phishing, and insider threats have become daily concerns for businesses and individuals alike. With the increasing sophistication of cybercriminals, it's no longer a question of if you'll be targeted, but when. That’s why enhancing your cybersecurity posture is essential—not optional.",
      '',
      "In this blog, we explore the top cybersecurity solutions that can help safeguard your digital assets and protect against evolving threats.",
      '',
      '1. Next-Generation Firewalls (NGFWs)',
      '',
      'Traditional firewalls are no longer sufficient. NGFWs offer deep packet inspection, intrusion prevention, and application awareness, allowing organizations to monitor and control traffic more effectively. They serve as the first line of defense in detecting and blocking malicious traffic in real time.',
      '',
      '2. Endpoint Detection and Response (EDR)',
      '',
      'EDR solutions provide continuous monitoring of endpoints like desktops, laptops, and mobile devices. They detect suspicious behavior and offer forensic tools to analyze threats. Some advanced platforms also offer automated incident response to neutralize attacks quickly.',
      '',
      '3. Zero Trust Architecture',
      '',
      'The Zero Trust model follows the principle of “never trust, always verify.” It ensures strict access control and micro-segmentation, where users and devices are continuously authenticated and authorized, regardless of their location within or outside the network.',
      '',
      '4. Multi-Factor Authentication (MFA)',
      '',
      'MFA adds an extra layer of security by requiring users to verify their identity using two or more methods—such as a password, a mobile app confirmation, or a biometric scan. This simple yet effective solution drastically reduces the risk of unauthorized access.',
      '',
      '5. Cloud Security Solutions',
      '',
      'As more businesses move to the cloud, securing cloud infrastructure becomes critical. Solutions like Cloud Access Security Brokers (CASBs) and Secure Access Service Edge (SASE) help enforce security policies and protect data across multi-cloud environments.',
      '',
      '6. AI & Machine Learning in Cybersecurity',
      '',
      'Artificial Intelligence is revolutionizing cybersecurity by enabling real-time threat detection, behavioral analytics, and automated responses. AI can quickly identify anomalies and predict potential breaches before they occur—especially useful in large-scale environments.',
      '',
      '7. Regular Security Audits and Penetration Testing',
      '',
      'Continuous evaluation of your security infrastructure helps identify vulnerabilities before attackers do. Penetration testing simulates real-world attacks to uncover weak points, while audits ensure compliance with frameworks like GDPR, HIPAA, or ISO 27001.',
      '',
      '8. Employee Awareness & Cyber Hygiene Training',
      '',
      'Human error is often the weakest link in security. Training staff on phishing scams, password best practices, and safe internet behavior is essential. A cyber-aware workforce can act as an effective human firewall.',
      '',
      '9. Data Encryption & Backup Solutions',
      '',
      "Encrypting sensitive data ensures that even if it's intercepted, it remains unreadable. Additionally, robust backup strategies—especially using off-site or cloud backups—are vital for quick recovery from ransomware or data loss incidents.",
      '',
      '10. Security Information and Event Management (SIEM)',
      '',
      'SIEM platforms collect and analyze security data across the organization, providing a unified view of all activity. They help in threat detection, compliance reporting, and proactive incident response, making them invaluable for large-scale IT environments.',
      '',
      'Importance of Cybersecurity',
      '',
      'Cybersecurity is essential for several reasons:',
      '',
      'Protection of Sensitive Information: Organizations store vast amounts of sensitive data, including personal information, financial records, and intellectual property. Cybersecurity measures help safeguard this information from unauthorized access and breaches.',
      '',
      "Maintaining Trust: Customers and clients expect that their data will be handled securely. A breach can damage a company's reputation and erode trust, leading to financial losses and a decline in customer loyalty.",
      '',
      'Compliance with Regulations: Many industries are subject to strict regulations regarding data protection. Implementing robust cybersecurity measures helps organizations comply with these laws and avoid hefty fines.',
      '',
      'Preventing Financial Loss: Cyberattacks can lead to significant financial losses due to theft, downtime, and recovery costs. Investing in cybersecurity can mitigate these risks and protect an organization’s bottom line.',
      '',
      'Common Cyber Threats',
      '',
      'Understanding the types of cyber threats is crucial for effective defense:',
      '',
      'Malware: Malicious software designed to harm, exploit, or otherwise compromise a computer system.',
      '',
      'Phishing: A method of tricking individuals into providing sensitive information by posing as a trustworthy entity.',
      '',
      'Ransomware: A type of malware that encrypts a victim\'s files and demands payment for the decryption key.',
      '',
      'DDoS Attacks: Distributed Denial of Service attacks overwhelm a network or service, making it unavailable to users.',
      '',
      'Cyber Security Solutions Services',
      '',
      'Cyber Security Solutions offers a range of services to help protect against cyber threats:',
      '',
      'Risk Assessment: Identifying vulnerabilities and assessing the potential impact of various threats.',
      '',
      'Incident Response: Developing and implementing a plan to respond to cybersecurity incidents effectively.',
      '',
      'Security Awareness Training: Educating employees about best practices for recognizing and avoiding cyber threats.',
      '',
      'Network Security: Implementing measures to protect the integrity and usability of network and data.',
      '',
      'Conclusion',
      '',
      'In conclusion, as cyber threats continue to evolve, the need for robust cybersecurity measures is more pressing than ever. By partnering with a specialized company like Cyber Security Solutions, organizations can enhance their security posture and protect their valuable digital assets.',
      '',
      'One of the key solutions offered by Cyber Security Solutions is network security. By implementing robust firewalls, intrusion detection systems, and encrypted communication protocols, businesses can secure their networks against unauthorized access and cyber attacks. Network security is crucial in preventing data breaches and ensuring the confidentiality and integrity of sensitive information.',
      'Another essential aspect of cybersecurity is endpoint protection. Cyber Security Solutions offers advanced endpoint security solutions that protect devices such as laptops, desktops, and mobile phones from malware, ransomware, and other malicious threats. By using endpoint detection and response tools, businesses can detect and respond to security incidents in real-time, minimizing the impact of cyber attacks.',
      'Data encryption is also a core component of cybersecurity. Cyber Security Solutions provides encryption solutions that protect data both at rest and in transit. By encrypting sensitive information, businesses can ensure that even if data is compromised, it remains unreadable and unusable to unauthorized parties.',
      'In addition to these solutions, Cyber Security Solutions offers security awareness training for employees. Educating staff about the importance of cybersecurity best practices, such as creating strong passwords and recognizing phishing emails, can help prevent security incidents caused by human error.',
      'Overall, Cyber Security Solutions\' comprehensive approach to cybersecurity offers businesses the peace of mind knowing that their digital assets and data are well-protected. By implementing these top solutions, individuals and businesses can enhance their cybersecurity posture and effectively mitigate the risks posed by cyber threats.'
    ],
    authorBio: 'Pranav Jeyan is a cybersecurity expert and content creator who specializes in digital protection and threat analysis, exploring how security can build instant trust for brands.'
  },
  {
    id: 3,
    title: 'Testing Doesn’t Replace Developers — It Empowers Quality',
    description: 'Testing doesn’t replace developers — it strengthens their work by ensuring reliability, performance, and quality in every line of code.',
    image: Img3,
    authorImage: Imag3,
    author: 'A.Aravind',
    date: 'May 15, 2025',
    content: [
      '“Testing Doesn’t Replace Developers — It Empowers Quality”: How Smart Teams Are Approaching Software Testing Differently',
      'June 28, 2025',
      '“The best software doesn’t just run — it performs reliably under pressure, for everyone.”',
      'In today’s fast-paced digital world, speed isn’t everything — reliability is. With every feature release, update, or integration, users expect seamless, bug-free experiences. But how do you ensure software works as intended across all scenarios and systems?',
      'The answer doesn’t lie in more coding — it lies in smarter testing. And software testing is no longer just a checkpoint — it’s a continuous quality enabler.',
      'The Real Problem: Shipping Fast Without Quality Checks',
      'Too many teams focus on speed, leaving testing for the last minute — or worse, skipping it. But this leads to:',
      'Missed bugs in production',
      'Poor user experience',
      'Reputational damage',
      'Costly hotfixes and rework',
      'Developer–tester blame games',
      '“We’re not short on features — we’re short on confidence.”',
      'The Testing Shift: From Manual Guessing to Continuous Quality',
      'Modern testing practices don’t aim to slow teams down — they aim to boost delivery confidence.',
      'With automation, tools, and smarter test strategies, software testers can:',
      'Catch bugs earlier with shift-left testing',
      'Automate repetitive tests like regression and smoke tests',
      'Simulate real-world usage across devices, browsers, and networks',
      'Test APIs and backend logic alongside UI checks',
      'Provide fast feedback loops to the dev team',
      'Brands like Google, Microsoft, and Salesforce have invested heavily in automated and continuous testing pipelines. Their secret? They don’t wait for users to find bugs — they test smarter, earlier, and more often.',
      'But Isn’t Testing Slowing Down Development?',
      'Not at all. Modern testing accelerates releases by catching issues early. It reshapes workflows, not blocks them.',
      '“Testing won’t stop releases. But not testing will stop users from trusting your product.”',
      'What Testers Bring That Tools Can’t',
      'While automation handles routine checks, human testers focus on:',
      'Creative exploratory testing',
      'Understanding real user behavior',
      'Testing edge cases and emotional flows',
      'Risk-based prioritization',
      'Imagine a QA team that no longer just “checks boxes” but champions quality throughout the development cycle.',
      'How Any Team Can Start Smarter Testing — Today',
      'You don’t need a testing lab or a QA department to begin. Even lean dev teams and startups can integrate testing in powerful ways.',
      'Here’s how:',
      '1. Test Automation',
      'Use tools like Selenium, Cypress, or Playwright to automate UI and API testing across environments.',
      '2. CI/CD Integration',
      'Plug your test suite into pipelines using tools like Jenkins, GitHub Actions, or GitLab CI — so tests run with every code change.',
      '3. Exploratory Testing',
      'Allocate time in each sprint for manual testers or developers to explore and uncover unexpected behavior.',
      '4. Bug Reporting Tools',
      'Integrate platforms like Jira, Bugzilla, or TestRail for structured bug tracking and feedback.',
      '5. Performance & Load Testing',
      'Use tools like JMeter, k6, or BlazeMeter to test system behavior under stress.',
      'Final Takeaway: It’s Not Too Late to Test Smart',
      'Software testing is not a barrier — it’s a growth engine. In an age of complex apps and high user expectations, testing is how brands win trust.',
      '“We understand the pressure to move fast — but we never skip on testing smart.”',
      'At [Your Company Name], we believe in making quality visible, continuous, and scalable. From test automation to exploratory testing, we help teams grow faster — with confidence.',
      'In the end, software testing doesn’t slow you down — it helps you move forward with certainty.'
    ],
    authorBio: 'A.Aravind is a software engineer and testing advocate who believes in the power of quality assurance to enhance software development.'
  },
  {
    id: 4,
    title: 'AI-Generated Visuals: Tool or Threat?',
    description: 'From voiceovers to video editing. AI is changing the game...',
    image: Img4,
    author: 'Priya Mehta',
    readTime: '5 min read',
    category: 'Multimedia',
    date: 'May 29, 2025',
    content: [
      'Artificial Intelligence is rapidly transforming how digital content is created. From generating photorealistic images to crafting entire videos, AI tools are now accessible to creators of all levels...',
      'AI-powered platforms like Midjourney, DALL·E, and RunwayML allow anyone to create high-quality visuals within seconds...',
      '“The barrier to entry has never been lower,” says visual artist Rhea Kapoor. “But it also means the value of originality is harder to protect.”',
      'While some designers fear being replaced by automation, others see AI as a productivity booster...',
      'AI-generated art pieces are now being auctioned at major art houses like Christie’s...',
      'One major concern is ownership. Who owns the rights to an image generated by AI?...',
      '“Transparency and regulation are key,” says legal expert Alok Deshmukh...',
      'Rather than resisting change, creators can learn to collaborate with AI...'
    ],
    authorBio: 'Priya is a digital content strategist and tech journalist with over 8 years of experience covering media, innovation, and future trends. She’s passionate about storytelling, minimal design, and cold brew coffee.'
  },
  {
    id: 5,
    title: 'Decoding What Your Metrics Are Really Saying',
    description: 'Which KPIs tell the real story behind the numbers?',
    image: Img5,
    author: 'Karan Shah',
    readTime: '6 min read',
    category: 'Data & Insights',
    date: 'May 25, 2025',
    content: [
      'Understanding KPIs is crucial for business growth...'
    ],
    authorBio: 'Karan is a data analyst and business intelligence expert who helps organizations unlock the real story behind their numbers.'
  }
];

const ArticlePage = () => {
  const { id } = useParams();
  const [showSubscribe, setShowSubscribe] = useState(false);
  const blog = blogData.find((b) => b.id === Number(id));

  // Related articles: pick 4 others, excluding current
  const related = blogData.filter((b) => b.id !== Number(id)).slice(0, 4);

  if (!blog) {
    return <div className="px-6 md:px-24 py-10 text-gray-800 font-sans">Blog not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div className="px-6 md:px-24 pt-25 pb-10 text-gray-800 font-sans max-w-5xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 leading-tight">{blog.title}</h1>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
          {blog.category ? (
            <span>#{blog.category.replace(/\s/g, '')}</span>
          ) : null}
          <span>#Trending</span>
          {blog.category === 'Multimedia' && <span>#Multimedia</span>}
        </div>
        <div className="flex justify-center mb-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-md w-full max-w-lg object-cover aspect-video shadow"
          />
        </div>
        <div className="flex items-center space-x-3 text-sm mb-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <img
              src={blog.authorImage || "https://www.gravatar.com/avatar"}
              alt={blog.author}
              className="w-6 h-6 rounded-full border object-cover"
            />
            <span>{blog.author}</span>
          </div>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <CalendarDays className="w-4 h-4" />
            <span>{blog.date}</span>
          </span>
          <span>•</span>
        
        </div>
        <div className="space-y-6 leading-relaxed text-base">
          {blog.content.map((para, idx) => {
            // Simple heading/quote detection for demo
            if (para.startsWith('"')) {
              return <blockquote key={idx} className="border-l-4 pl-4 italic text-gray-500">{para}</blockquote>;
            }
            if (para.startsWith('Did you know?')) {
              return <div key={idx} className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded text-sm font-medium text-blue-900 my-4">{para}</div>;
            }
            if (para.startsWith('The Ethical Dilemma')) {
              return <h2 key={idx} className="text-lg font-semibold mt-6 mb-2">{para}</h2>;
            }
            if (para.startsWith('Where Do We Go From Here?')) {
              return <h2 key={idx} className="text-lg font-semibold mt-6 mb-2">{para}</h2>;
            }
            if (para.startsWith('1. Next-Generation Firewalls') || para.startsWith('2. Endpoint Detection and Response (EDR)') || para.startsWith('3. Zero Trust Architecture') || para.startsWith('4. Multi-Factor Authentication') || para.startsWith('5. Cloud Security Solutions') || para.startsWith('6. AI & Machine Learning in Cybersecurity') || para.startsWith('7. Regular Security Audits and Penetration Testing') || para.startsWith('8. Employee Awareness & Cyber Hygiene Training') || para.startsWith('9. Data Encryption & Backup Solutions') || para.startsWith('10. Security Information and Event Management (SIEM)') || para.startsWith('Importance of Cybersecurity') || para.startsWith('Common Cyber Threats') || para.startsWith('Cyber Security Solutions Services')) {
              return <strong key={idx} className="block text-lg font-bold mt-6 mb-2">{para}</strong>;
            }
            if (para.startsWith('“') ) {
              return <strong key={idx} className="block text-lg font-bold mt-6 mb-2">{para}</strong>;
            }
            return <p key={idx}>{para}</p>;
          })}
        </div>

        {/* Author Bio */}
        <div className="mt-10 border-t pt-8">
          <h3 className="text-lg font-semibold mb-2">Author Bio</h3>
          <div className="flex items-center space-x-2 text-sm mt-2">
            <img
              src={blog.authorImage || "https://www.gravatar.com/avatar"}
              alt={blog.author}
              className="w-6 h-6 rounded-full border object-cover"
            />
            <span>{blog.author}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {blog.authorBio}
          </p>
          <a href="#" className="text-blue-600 text-xs mt-2 inline-block hover:underline">Loved the article? Share it with your network!</a>
        </div>

        {/* Related Articles */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-3">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((rel) => (
              <Link key={rel.id} to={`/Insights/Blogs/${rel.id}`} className="border p-3 rounded-md bg-gray-50 flex flex-col hover:shadow transition-shadow">
                <img src={rel.image} alt={rel.title} className="mb-2 rounded aspect-video object-cover" />
                <h4 className="font-semibold text-sm">{rel.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{rel.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                  <span>By {rel.author}</span>
                  <span>•</span>
                  <span>{rel.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

       
      </div>
            <div className="bg-gradient-to-t from-[#19BDE880]/50 to-white py-16 text-center mb-20 mt-5 md:mt-25 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#000000]">Want More Insights Like This?</h2>
        <p className="text-gray-700 mb-6">
          Subscribe to our newsletter for weekly smart reads.
          
        </p>
        <button
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
          onClick={() => setShowSubscribe(true)}
        >
          Subscribe Now
        </button>
      </div>
      {showSubscribe && <SubscribeNow />}

        <Footer/>
      
    </div>
  );
};


export default ArticlePage;
