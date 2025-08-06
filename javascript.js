const contentData = {
    aboutMe: `
        <div class="sectionTitle">Who I am</div>
        <hr>
        <b><i>The year was 2012</b></i>. After browsing Tumblr for hours, 12-year-old me decided to dive into the world of HTML and CSS, which was a hobby for many young girls at the time. I didn't know what IT was - I didn't even know exactly what I was doing with all that code in front of me. But I knew I loved to develop, innovate and create, and that's exactly what I did for most of my teenage years: created user-focused websites for other Tumblr and Blogspot enthusiasts and shared tools so they could develop their own pages! From the desire to help and expand this idea, <b><i>HTMLForAll</b></i> was born, an initiative to make web development more accessible to underrepresented groups in tech such as women and the LGBTQ+ community.
        <br>
        Life led me to a very different path and at the age of 17, I decided to go to <b><i>Law School</b></i>, where I developed many skills and abilities that follow me into my everyday life, like how to communicate effectively, analyse complex situations and solve a variety of problems, assess risks and manage projects with large teams.
        <br>
        At the age of 21, I faced the biggest result of my ambitions, <b><i>passing the Bar on first attempt while still in college</b></i>. I then graduated at 22, and another very different path was put ahead of me: moving to Ireland from Brazil, diving into a different culture and starting to study Computing in a second language, which I realised has always been my passion!

        <br><br>
        <div class="sectionTitle">What I'm into</div>
        <hr>
        <div class="highlight">Travelling</div> I've been to <i>8 countries by myself and 16 countries
        in total</i> between South America, North America and Europe.
        <br>
        <div class="highlight">Photography</div> I love taking pictures of <i>buildings, streets and everyday life!</i>
        <br>
        <div class="highlight">Bird watching</div> I enjoy <i>feeding the birds</i> with fruits and seeds I buy specially for them.
        <br>
        <div class="highlight">Playing games</div>
        Playing <i>The Sims</i> is a must on my free time - I really like building homes and playing with different personalities!

        <br><br>
        <div class="sectionTitle">Talk to me</div>
        <hr>

        <div class="highlight">e-mail</div> stefanyrjunges@gmail.com
        <br>
        <div class="highlight">IN</div> <a class="in" href="https://www.linkedin.com/in/stefany-junges/" target="_blank">linkedin.com/stefany-junges</a>
        <br>
        <div class="highlight">GitHub</div> <a class="in" href="https://github.com/stefanyrjunges/" target="_blank">github.com/stefanyrjunges</a>

        <br><br>
        See you soon,
        <br>
        <img src="/images/signature.png" style="width: 250px; margin-left:-12px; margin-top:0px;">
    `,

    education: `
        <div class="sectionTitle">Education</div>
        <hr>
        <div class="highlight">National College of Ireland, Dublin</div>
        <br> 2023 - 2027 (Expected)
        <br>
        <i>Bachelor of Science (Honours) in Computing</i> | Second year average: 76.2%
        <br>
        <b><i>Main projects</b></i>: Healthcare app (focused on Object-Oriented Programming), Patient scheduling (focused on Data Structures), Payroll app (focused on Object-Oriented Programming and Data Structures), Products Lookup Tool (focused on HTML, CSS, Node.js, XML, XSL and JSON), Business plan (focused on building business idea, marketing, operations, industry analysis and strategic positioning), Testing demonstration (focused on JUnit, Black-box and White-box testing), Database construction (focused on techniques for query processing, optimisation and effective data management solutions). 

        <br><br>
        <div class="highlight">University of Passo Fundo, Passo Fundo</div>
        <br> 2017 - 2022
        <br>
        <i>Bachelor of Laws</i> | Final grade: 9.1 (3.7 GPA)
        <br>
        <b><i>Main focus</b></i>: deep understanding of the legal system, conflict analysis, negotiation, problem-solving, initiative and ethical conduct. Integrated service to the local community with hands-on experience, engaged in research, conferences and team projects.
    `,

    skills: `  
        <div class="sectionTitle">Technical skills</div>
        <hr>
        <div class="highlight">Languages</div> Java, Python, HTML, CSS, JavaScript
        <br>
        <div class="highlight">Databases</div> MYSQL, MongoDB, JSON
        <br>
        <div class="highlight">Tools</div> Java Swing, JavaFX, JasperReports, Node.js, XML, Bootstrap, Cisco Packet Tracer, Postman
        <br><br>
        <div class="sectionTitle">Personal skills</div> 
        <hr>
        <div class="highlight">Problem-solver</div> Known for identifying and debugging edge-case errors during practical programming labs and helping peers resolve theirs.
        <br>

        <div class="highlight">Team collaborator</div> Collaborated with diverse teams across different contexts: as a freelance web developer partnering with developers from varied locations, in group projects during both Law and Computing degrees, and alongside legal professionals and clients during law internships.
        <br>

        <div class="highlight">Adaptable and Resilient</div> Successfully transitioned from a legal background to Computing, managing a full-time degree in a new country with consistent academic performance.

        <br>

        <div class="highlight">Detail-oriented</div> From crafting legal documents to refining UI/UX in websites, I value precision and take pride in delivering polished work.

        <br>

        <div class="highlight">Quality-driven</div> Committed to developing purposeful and high-quality solutions that are thoughtfully designed, ethically grounded and easy to maintain, always guided by best practices and long-term impact.

    `,
    experience: `
        <div class="sectionTitle">Technology</div>
        <hr>
        <div class="highlight">Web Designer</div>
        <br>
        2014 - 2016
        <br>
        <i>Freelancer, Brazil</i>
        <br>
        Built custom websites on platforms such as Tumblr and BlogSpot by gathering user needs, designing layouts, coding, testing and deploying, working both in solo and team projects. Focused heavily on user experience and visual storytelling, balancing content-rich designs with intuitive navigation.
        <button class="learnMore" onClick="showWebDesignerModal()">Learn more</button>

        <br><br>
        <div class="highlight">Founder and Developer</div>
        <br>
        2012 - 2016
        <br>
        <i>HTMLForAll, Brazil</i>
        <br>
        Founded a community-driven initiative focused on making web development accessible, particularly for underrepresented groups in tech, such as women and the LGBTQ+ community. Focused on empowering beginners to take their first steps in coding through free, inclusive and beginner-friendly resources.
        <button class="learnMore" onClick="showFounderAndDeveloperModal()">Learn more</button>

        <br><br>
        <div class="sectionTitle">Others</div>
        <hr>

        <div class="highlight">Psychological Care and Reporting Specialist</div>
        <br>
        2017
        <br>
        <i>University of Passo Fundo, Brazil</i>
        <br>
        Prepared detailed reports for the judiciary, ensuring up-to-date legal information, data accuracy and confidentiality while working with interdisciplinary teams.
        <button class="learnMore" onClick="showPsychologicalCareModal()">Learn more</button>

        <br><br>
        <div class="highlight">Legal Assistant</div>
        <br>
        2018
        <br>
        <i>Liviera & Dalla Costa Law Firm, Brazil</i>
        <br>
        Conducted legal research to support case preparation, managed multiple legal cases concurrently while communicating and collaborating with lawyers, clients and other legal professionals.
        <button class="learnMore" onClick="showLegalAssistantModal()">Learn more</button>

        <br><br>
        <div class="highlight">Legal Analyst</div>
        <br>
        2019
        <br>
        <i>Public Defender's Office (Defensoria Pública do Estado do Rio Grande do Sul), Brazil</i>
        <br>
        Developed legal documents to support cases, conducting research on applicable laws and analysing evidence such as witness statements and forensic data in order to obtain favourable outcomes for clients.
        <button class="learnMore" onClick="showLegalAnalystModal()">Learn more</button>

        <br><br>
        <div class="highlight">Legal Advisor</div>
        <br>
        2021
        <br>
        <i>University of Passo Fundo, Brazil</i>
        <br>
        Provided legal assistance to low-income individuals, analysing complex legal issues and developing effective solutions, as well as collaborating with team members to prepare tailored legal documents. 
        <button class="learnMore" onClick="showLegalAdvisorModal()">Learn more</button>
    `,
    projects: `
        <div class="sectionTitle">Projects</div>
        <hr>
        <div class="grid">
        <img class="imgProjects" src="/images/lilahotel.png" style="width:200px">
        <p class="sProjects">
        <b>Hotel Management System</b>
        <br>
        <b>Programming language</b>: Java
        <br>
        <b>Tools:</b> JavaFX, MySQL, Mailtrap, JasperReports
        <br>
        An application designed to streamline hotel operations, including room bookings, check-ins, check-outs, and guest management. It connects to a database to store and retrieve customer and reservation information securely.
        </p>

        <br><br>

        <img class="imgProjects" src="/images/payrollapp.png" style="width:200px">
        <p class="sProjects">
        <b>Payroll Management System | <a href="https://github.com/stefanyrjunges/PayrollProject" target="_blank">GitHub</a></b>
        <br>
        <b>Programming language</b>: Java
        <br>
        <b>Tools:</b> NetBeans IDE, MySQL, AWS, iTextPDF
        <br>
        Designed to facilitate employee management, payroll processing, and shift tracking. The application provides both Admin and Employee sections, ensuring a structured workflow for payroll and attendance tracking.
        </p>

        <br><br>

        <img class="imgProjects" src="/images/bloodtestscheduler.png" style="width:200px">
        <p class="sProjects">
        <b>Blood Test Scheduler | <a href="https://github.com/stefanyrjunges/BloodTestScheduler" target="_blank">GitHub</a></b>
        <br>
        <b>Programming language</b>: Java
        <br>
        <b>Tools:</b> NetBeans IDE
        <br>
        An designed as part of a practical assignment for the Data Structures and Algorithms module, using Stacks, Arrays, Linked lists and Queues. The project allows users to schedule blood tests, view and manage appointments and store and process patient data efficiently.
        </p>

        <br><br>

        <img class="imgProjects" src="/images/healthapp.png" style="width:200px">
        <p class="sProjects">
        <b>Health App | <a href="https://github.com/stefanyrjunges/LifeMetricApp" target="_blank">GitHub</a></b>
        <br>
        <b>Programming language</b>: Java
        <br>
        <b>Tools:</b> NetBeans IDE
        <br>
        This Java application, built using NetBeans GUI, helps users track their sleep, calorie intake, and hydration levels. It aligns with the 17 Sustainable Development Goals (SDGs) by promoting well-being and healthy habits.
        </p>

        <br><br>

        <img class="imgProjects" src="/images/employeedb.png" style="width:200px">
        <p class="sProjects">
        <b>Employee Database Website | <a href="https://github.com/stefanyrjunges/EmployeeDBWebsite" target="_blank">GitHub</a></b>
        <br>
        <b>Programming language</b>: HTML, CSS, JavaScript
        <br>
        <b>Tools:</b> Bootstrap, Axios, Chart.js, JSON, Node.js, EJS, HTTP, Express.js
        <br>
        This project is a web-based employee management system that fetches and displays data from an external API. It allows authorised users to add, remove, and update employee information, as well as visualise staff salary data through an interactive chart.
        </p>

        <br><br>

        <img class="imgProjects" src="/images/productslookup.png" style="width:200px">
        <p class="sProjects">
        <b>Products Look Up System | <a href="https://github.com/stefanyrjunges/myProducts" target="_blank">GitHub</a></b>
        <br>
        <b>Programming language</b>: HTML, CSS, JavaScript
        <br>
        <b>Tools:</b> Bootstrap, XML, XSD, XSL
        <br>
        A straightforward web application that displays a collection of skincare products. Users can either search for a product by its unique ID or view all available products in a formatted HTML table.
        </p>

        <br><br>

        <img class="imgProjects" src="/images/bankapp.png" style="width:200px">
        <p class="sProjects">
        <b>Assignment Organiser | <a href="https://github.com/stefanyrjunges/BankingApp" target="_blank">GitHub</a></b>
        <br>
        <b>Programming language</b>: Java
        <br>
        <b>Tools:</b> Java Swing
        <br>
        Java program that simulates basic banking operations, allowing users to check their balance, deposit money, withdraw funds and check the latest conversion rates for 5 different currencies using a graphical user interface (GUI) created with JOptionPane.
        </p>

        <br><br>

        <img class="imgProjects" src="/images/assignmentorganizer.png" style="width:200px">
        <p class="sProjects">
        <b>Assignment Organiser | <a href="https://github.com/stefanyrjunges/AssignmentOrganizer" target="_blank">GitHub</a></b>
        <br>
        <b>Programming language</b>: Python
        <br>
        <b>Tools:</b> Tkinter, Openpyxl, os
        <br>
        This project aims to streamline the assignment management process, providing a centralised platform for tracking and staying updated on upcoming deadlines. By combining intuitive user interface design with automated notifications, the application aims to enhance productivity and reduce the likelihood of missed deadlines.
        </p>

        <br><br>
    
        </div>
    `
};

const modalData = {
    webDesigner: `
        <div class="sectionTitle">Key achievements</div>
        <b><i>Improved user retention by 40%</b></i>: by implementing iterative design based on feedback and analytics, users were more satisfied and spent more time on the website, reducing bounce rates.
        <br>
        <b><i>Introduced new features based on user requests</b></i>: increasing engagement.
        <br>
        <b><i>Implemented theme modularity</b></i>: clients were able to easily update sections of their site with minimal code knowledge.
        <br>
        <b><i>High return rates</i></b>: created user guides explaining how to make independent changes, increasing return rates from clients and expanding client base due to referrals.
        <br><br>
        
        <div class="sectionTitle">Challenges</div>
        <b><i>Retaining user engagement purely through the website's layout</i></b>: blogs were highly content-driven and users prioritised posts over design.
        <br>
        <i>Solution</i>: testing different design approaches and focusing on intuitive navigation that complemented the content and kept it as the main focus.
        <br>
        <b><i>Introducing a new blog</i></b>: since many users already had their go-to blogs, it was difficult to introduce a new website that was visually appealing enough to encourage them to explore the page further.
        <br>
        <i>Solution</i>: researched user behaviour, improved readability and visual elements that told a story about what the blog was about.
        <br><br>
        
        <div class="sectionTitle">Main skills</div>
        <div class="highlight">User-centered design</div>
        <div class="highlight">Project management</div>
        <div class="highlight">Communication</div>
        <div class="highlight">Teamwork</div>
        <div class="highlight">HTML</div>
        <div class="highlight">CSS</div>
        <div class="highlight">JavaScript</div>
        <div class="highlight">Bootstrap</div>
        <div class="highlight">PhotoFiltre</div>
    `,
    founderAndDeveloper: `
        <div class="sectionTitle">Key achievements</div>
        <b><i>More than 5,000 downloads of templates and resources</b></i>: number reflected real demand and value, revealing people found the materials helpful and shared them organically.
        <br>
        <b><i>Library of tutorials</b></i>: created step-by-step user guides that helped total beginners build and deploy their first websites.
        <br>
        <b><i>Built a community-first approach</b></i>: encouraged contributions, feedback and resource sharing through social media and word-of-mouth.
        <br>
        <b><i>Inclusive templates</b></i>: made design choices with accessibility in mind.

        <br><br>
        <div class="sectionTitle">Challenges</div>
        <b><i>Teaching without overwhelming</b></i>: explaining technical concepts simply could be challenging, specially when the audience includes people who have never written a line of code.
        <br>
        <i>Solution</i>: gathering feedback, using real-life analogies and examples, demonstrations, showing one concept at a time and creating a safe space to try things and make mistakes.

        <br>
        <b><i>Zero marketing budget</b></i>: struggled initially with a limited reach and low visibility.
        <br>
        <i>Solution</i>: relied on authentic engagement in online communities and grassroots promotion, leading to real people helping spread the message because they believed in it.

        <br><br>
        <div class="sectionTitle">Main skills</div>
        <div class="highlight">Inclusive UX</div>
        <div class="highlight">Design</div>
        <div class="highlight">Initiative ownership</div>
        <div class="highlight">Content creation</div>
        <div class="highlight">Community building</div>
    `,
    psychologicalCare: `
        <div class="sectionTitle">Key achievements</div>
        <b><i>Authored reports that directly influenced judicial decisions</b></i>: wrote psychosocial evaluations cited by judges in custody rulings, demonstrating clarity, neutrality, and strong data organization under legal scrutiny.
        <br>
        <b><i>Built a documentation checklist adopted by the team</b></i>: created a structured report format that improved data consistency and reduced revision time across multiple cases—enhancing team efficiency.
        <br>
        <b><i>Ensured zero confidentiality breaches in sensitive cases</b></i>: handled vulnerable data with care and adhered to all privacy protocols, reinforcing trust between professionals and clients.

        <br><br>
        <div class="sectionTitle">Challenges</div>
        <b><i>Communicating complex, sensitive information clearly</b></i>: transforming emotionally charged and nuanced situations into structured, professional documentation.
        <br>
        <i>Solution</i>: practiced empathy-driven communication and developed methods for translating qualitative data into objective, actionable reports.

        <br>
        <b><i>Balancing multiple perspectives in collaborative work</b></i>: working between professionals from psychology and law, each with different goals.
        <br>
        <i>Solution</i>: learned to navigate cross-disciplinary expectations and ensure alignment through consistent communication and documentation practices.

        <br><br>
        <div class="sectionTitle">Main skills</div>
        <div class="highlight">Client-focused communication</div>
        <div class="highlight">Structured documentation</div>
        <div class="highlight">Empathy in problem-solving</div>
        <div class="highlight">Ethical data handling</div>
    `,
    legalAssistant: `
        <div class="sectionTitle">Key achievements</div>
        <b><i>Prevented critical deadline miss by restructuring task priorities</b></i>: identified a scheduling conflict between two case deadlines and reorganized the team’s task queue, helping avoid a missed court filing and preserving client trust.
        <br>
        <b><i>Created a template system to improve legal document consistency</b></i>: developed and introduced reusable formats for contracts and internal memos, reducing editing time and improving clarity across documents used by the team.
        <br>
        <b><i>Supported urgent case under short notice</b></i>: independently gathered documentation, completed background research, and delivered a draft response within 24 hours, helping the firm meet a tight deadline for a last-minute case.

        <br><br>
        <div class="sectionTitle">Challenges</div>
        <b><i>Managing shifting priorities across cases</b></i>: different cases often required urgent attention at the same time.
        <br>
        <i>Solution</i>: adopted a structured task management system and prioritised based on deadlines and complexity.

        <br>
        <b><i>Adapting to tools and procedures quickly</b></i>: each case had its own process and set of legal tools.
        <br>
        <i>Solution</i>: quickly learned and adapted to internal tools and workflows—developing agility.

        <br><br>
        <div class="sectionTitle">Main skills</div>
        <div class="highlight">Analytical thinking</div>
        <div class="highlight">Time management</div>
        <div class="highlight">Clear documentation</div>
        <div class="highlight">Team communication</div>
        <div class="highlight">Process adaptation</div>
    `,
    legalAnalyst: `
        <div class="sectionTitle">Key achievements</div>
        <b><i>Helped secure case dismissal through evidence contradiction</b></i>: identified inconsistencies in police reports and witness statements, which contributed to the dismissal of charges in a felony case.
        <br>
        <b><i>Negotiated favorable custody agreement in complex family case</b></i>: contributed to a negotiation strategy that avoided litigation and resulted in a mutually beneficial outcome for the client and their children.
        <br>
        <b><i>Wrote persuasive arguments used in court</b></i>: several of my drafted motions and closing arguments were used directly by supervising attorneys in criminal and civil trials, improving efficiency and impact.

        <br><br>
        <div class="sectionTitle">Challenges</div>
        <b><i>Managing complex cases under pressure</b></i>: cases often involved time-sensitive and emotionally intense scenarios.
        <br>
        <i>Solution</i>: used logic-based prioritisation, clear checklists, and structured argument planning.

        <br>
        <b><i>Interpreting large volumes of unstructured data</b></i>: evidence came in varied formats (text, audio, reports, records), often lacking consistency.
        <br>
        <i>Solution</i>: developed a system for extracting key insights from different data types.

        <br><br>
        <div class="sectionTitle">Main skills</div>
        <div class="highlight">Analytical thinking</div>
        <div class="highlight">Data interpretation</div>
        <div class="highlight">Strategic communication</div>
        <div class="highlight">Time-sensitive problem-solving</div>
        <div class="highlight">Technical documentation</div>
    `,
    legalAdvisor: `
        <div class="sectionTitle">Key achievements</div>
        <b><i>Successfully negotiated out-of-court settlements for multiple clients</b></i>: helped avoid litigation and reduce resolution time by facilitating mediation sessions that led to favorable agreements—saving time and resources for both the institution and clients.
        <br>
        <b><i>Reduced case preparation time by optimizing client intake process</b></i>: created a structured template to gather client information more efficiently, improving document accuracy and accelerating case filing.
        <b><i>Handled complex civil cases with tailored legal strategies</b></i>: adapted legal arguments to diverse client situations.

        <br><br>
        <div class="sectionTitle">Challenges</div>
        <b><i>Balancing high caseload with quality of service</b></i>: as part of a legal aid service, the volume of clients made it challenging to maintain thorough support for each case.
        <br>
        <i>Solution</i>: developed time-saving workflows, prioritized based on urgency and complexity, and used checklists to ensure no detail was missed.

        <br>
        <b><i>Communicating legal processes to non-experts</b></i>: many clients had no legal background, making it difficult for them to understand procedures and expectations.
        <br>
        <i>Solution</i>: practiced clear, jargon-free communication and used visual aids or step-by-step explanations.

        <br><br>
        <div class="sectionTitle">Main skills</div>
        <div class="highlight">Problem-solving</div>
        <div class="highlight">Client-focused communication</div>
        <div class="highlight">Process optimization</div>
        <div class="highlight">Task prioritization</div>
        <div class="highlight">Adaptability</div>
    `
};

// Functions

const box = document.getElementsByClassName('box');

function showBox() {
    const runText = document.getElementsByClassName('runText');
    const box = document.getElementsByClassName('box');

    runText[0].style.display = 'none';
    box[0].style.display = 'block';

    const nameTitle = document.querySelector(".nameTitle");
    const menu = document.querySelector(".menu");

    menu.style.marginBottom = "12vh";

    nameTitle.classList.remove("slide-down");
    nameTitle.classList.add("slide-up");

    menu.classList.remove("slide-down");
    menu.classList.add("slide-up");

    box[0].classList.remove("slide-down");
    box[0].classList.add("slide-up");

    triggerAnimation(box[0], 'fadeIn');

}

function unshowBox() {
    const runText = document.getElementsByClassName('runText');
    const box = document.getElementsByClassName('box');

    runText[0].style.display = 'block';
    box[0].style.display = 'none';

    const nameTitle = document.querySelector(".nameTitle");
    const menu = document.querySelector(".menu");

    menu.style.marginBottom = "0";

    nameTitle.classList.remove("slide-up");
    nameTitle.classList.add("slide-down");

    menu.classList.remove("slide-up");
    menu.classList.add("slide-down");

    runText.classList.add("slide-down");

    box[0].classList.remove("slide-up");
    box[0].classList.add("slide-down");
}

function triggerAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth;
    element.classList.add(animationClass);
}

function showAboutMe() {
    showBox();
    box[0].innerHTML = contentData.aboutMe;
}

function showEducation() {
    showBox();
    box[0].innerHTML = contentData.education;
}

function showSkills() {
    showBox();
    box[0].innerHTML = contentData.skills;
}

function showExperience() {
    showBox();
    box[0].innerHTML = contentData.experience;
}

function showProjects() {
    showBox();
    box[0].innerHTML = contentData.projects;
}

// Modal

function setupModal() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
}

function showModal(content) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementsByClassName("modal-content")[0];

    modalContent.innerHTML = '<span class="close">&times;</span>' + content;
    modal.style.display = "block";

    const span = modalContent.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

setupModal();

function showWebDesignerModal() {
    showModal(modalData.webDesigner);
}

function showFounderAndDeveloperModal() {
    showModal(modalData.founderAndDeveloper);
}

function showPsychologicalCareModal() {
    showModal(modalData.psychologicalCare);
}

function showLegalAssistantModal() {
    showModal(modalData.legalAssistant);
}

function showLegalAnalystModal() {
    showModal(modalData.legalAnalyst);
}

function showLegalAdvisorModal() {
    showModal(modalData.legalAdvisor);
}
