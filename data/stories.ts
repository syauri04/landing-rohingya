export type StoryFormat = "written" | "audio" | "visual";

export type Story = {
  id: string;
  slug: string;
  title: string;
  author?: string;
  format: StoryFormat;
  image: string;
  alt?: string;
  date?: string;
  summary?: string;
  audio?: string;
  bannerImage: string;
  bannerCaption?: string;
  excerpt: string;
  body: string[];
};

export const formatLabel: Record<StoryFormat, string> = {
  written: "Written Stories",
  audio: "Audio Stories",
  visual: "Visual Stories",
};

// Single source of truth for every story: the /stories-on-home listing
// groups these by `format`, and /stories-on-home/[slug] looks one up by slug.
export const stories: Story[] = [
  // Written Stories
  {
    id: "written-1",
    slug: "from-the-moment-i-was-born",
    title: "From The Moment I Was Born",
    author: "Ayat Ullah",
    format: "written",
    image: "/assets/karya/writen-karya-1.png",
    summary:
      "Ayat is 20 years old, but in his own words, he has lived more than most people carry in a lifetime.",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "Ayat is 20 years old, but in his own words, he has lived more than most people carry in a lifetime.",
    body: [
      '"I got on the boat. We are leaving now."',
      "That was January 2023. We have not heard from her since.",
      "My name is Ayat Ullah. I am 20 years old, a Rohingya refugee living in Indonesia, born in a small village called Kyauk Pan Dhu — Shitapurikka — in Myanmar. My life has been shaped by disappearances, dangerous crossings, and a family pulled apart across countries and years. But it has also been shaped by something I chose: to stay, to help, and to make sure that other people's suffering did not go unseen.",
      "This is my story.",
      "• • •",
      "Growing up Rohingya meant growing up inside a quiet, persistent fear. Our village was peaceful in many ways. I have good memories of it, of the people, of the way community felt like something real and alive. But we were never treated equally. We could not move freely. We could not access proper education. We could not live with the same dignity as others in the country where we were born. Even as a child, I understood that our identity alone was enough to make us unwanted.",
      "Still, it was home. It was where I spent my childhood with my family. Where I first learned what resilience looked like, through the people around me who did it every day just to survive.",
      "Then conflict began pulling my family apart, long before I ever became a refugee myself.",
      "• • •",
      "The day my father left, my elder sister and I walked with him to the beach. Just before it was time to board, he sent the two of us back home for a fan, one of the handmade ones we used before we had electricity. The boat was crowded, he said, and it would be hot at sea, and he wanted something to cool himself with. So we ran home to get it for him.",
      "By the time we came back, he was already gone.",
      "He told us afterward that he couldn't bear to let us watch him leave. So he tricked his own children into looking away, just for a few minutes, so that his last sight of us wouldn't be our faces at the moment he stepped onto that boat.",
      "In 2012, violence forced my father to flee Myanmar. He was one of around 275 people trying to reach Malaysia by sea, searching for safety. From the moment he left, we had no way to reach him. There were no phones for us in Myanmar, and none for him or the others on the boat.",
      "Six days into the journey, the boat sank. Many people died. A passing shipping vessel rescued around 40 survivors, and my father was among them.",
      "But we didn't know any of that. For one year, my family did not know whether he was alive or dead.",
      "Every evening after Maghrib prayer, my sisters, my mother, and I would sit together and make dua for him, asking God to keep him safe if he was still alive, to take care of him wherever he was. When we went outside, our neighbors would ask, gently but constantly: Have you heard anything about your father? Any news at all? We never had an answer to give them.",
      "For that whole year, we felt like orphans, even though we didn't know if we actually were. It was hard to describe what that felt like, grieving someone you didn't know was gone. We were helpless, and hopeless, and we cried more than I can put into words.",
      "Eventually, we learned he had survived and had been detained for that entire year. After his release, he stayed in Malaysia and worked to send money back to us, first in Myanmar, then later in Bangladesh.",
      "• • •",
      "Then 2017 arrived, and everything changed again.",
      "More than one million Rohingya were driven from Myanmar. My family and I were among them. We crossed into Bangladesh carrying fear, trauma, and almost nothing else, leaving behind our homes, our memories, and the only life we had known.",
      "Life in the refugee camps was hard in ways that are difficult to describe. But I refused to stop learning. I continued my education from Class 5 through Class 10 inside the camp. Education became the one thing that still felt like it belonged to me, a source of hope when everything else felt uncertain. But after finishing high school, I hit a wall. There was almost nothing beyond it. No real pathway to higher education, no clear future. Like many young refugees around me, I felt suspended between what I dreamed of and what was actually possible.",
      "• • •",
      "Then came the hardest loss.",
      "In early 2023, my older sister decided she could no longer stay in the camp. She was determined. She had always been that way. She said she didn't want to spend her life trapped inside those boundaries, forced into a future she had no part in choosing. She would rather risk everything trying than remain there with no hope at all. Her plan was to reach Malaysia, to find our father, to finally begin a life.",
      "On 30 December 2022, she quietly left the camp and traveled to a village in Myanmar. On 16 January 2023, she boarded a boat with 128 other people headed for Malaysia.",
      "Before they departed, she called my mother.",
      '"I got on the boat," she said. "We are leaving now."',
      "That was the last time we ever heard her voice.",
      "At first, we weren't afraid. We thought we'd hear from her again in a day or two, once the boat reached shore. That is how it usually happens. We waited for a phone call telling us she had arrived safely.",
      "It never came.",
      "We have never received any information about the boat, or the people on it. We do not know whether they are alive, detained somewhere, or gone. My sister is still missing. It has been almost four years now. My mother has prayed for her every day since that phone call, and to this day, if anyone so much as mentions my sister in front of her, she cannot hold back her tears.",
      "Losing someone without knowing their fate is its own particular kind of grief. There is no closure. Just an open wound that doesn't heal, and waiting that never ends.",
      "• • •",
      "Three months after my sister disappeared, I made my own decision.",
      "I know how it sounds. I had already lived through a year of not knowing if my father was alive, after his boat went down. I had just lived through my sister vanishing on that same kind of journey. And still I chose to go.",
      "But this is the reality that refugees live inside: there are no passports, no legal pathways, no simple options. In Myanmar, we were denied citizenship. In the camps, there was no real future. For many of us, a dangerous sea journey is not a choice we want to make; it is the only choice left.",
      "I was the only son in my family. My family was terrified of losing me too. But they also loved me enough to let me go. They didn't want my future to disappear inside that camp.",
      "When I stepped onto that boat, knowing what had already happened to my father and my sister, the feeling was almost impossible to describe. I told myself: it is God who can save me now. If it is written in my fate, on my forehead, that I will live, then I will land safely on some shore. And if it is written that I will die, the way my father nearly did, the way my sister may have, then at least I will be with them again.",
      "I had no other choice but to risk it. Life in the camp in Bangladesh was its own kind of cage. No access to education. No future. No freedom of movement. No safety. We lived in constant fear, of landslides, of being kidnapped or attacked by armed groups, of being arrested by police on false charges and having to pay a bribe just to be released. That fear never left, no matter what we did. So even knowing what the sea had already taken from my family, I chose it, because staying meant no life at all.",
      "I boarded a boat with 184 people. We spent around 15 days at sea. Every day carried fear, real physical fear, along with exhaustion and the awareness that we might not survive. But after 15 days, we arrived in Aceh, Indonesia.",
      "After eight days in a transit camp, I was transferred by IOM to Pekanbaru, in Riau Province.",
      "• • •",
      "Pekanbaru was where I started to discover who I actually wanted to be.",
      "I began teaching members of my community. I worked on my English. I started volunteering as an interpreter for Rohingya refugees who couldn't communicate with organizations or local authorities, people who were lost in systems that didn't speak their language, navigating situations they didn't fully understand. I participated in trainings and workshops focused on leadership, communication, and advocacy.",
      "Slowly, helping others stopped feeling like something I did in my spare time. It became a responsibility, the reason I was there.",
      "• • •",
      "In March 2024, I found myself at the centre of something I never expected.",
      "Fifty-nine Rohingya refugees had arrived in Pekanbaru after an extremely dangerous journey. They were trying to reach safety. Instead, they fell into the hands of smugglers. Their families had already paid large sums of money, but the smugglers refused to release them and were demanding even more. The refugees were trapped: frightened, exhausted, powerless, held against their will.",
      "My own mother and two of my sisters were among them.",
      "I was terrified. But I needed to think clearly. During a WhatsApp video call, I carefully guided one of my sisters, quietly, so the smugglers wouldn't notice, on how to secretly share her live location with me. Despite the fear and pressure, she was under, she managed to send it.",
      "The moment I received that location, I started making calls. Police. Immigration. IOM. UNHCR. I kept calling, kept asking, kept pushing until one police station agreed to act. Officers came with me to the location where the refugees were being held.",
      "When we arrived, we found dozens of Rohingya men, women, and children living in conditions that broke my heart. They were exhausted and traumatized in ways I recognized, because I had felt versions of it myself.",
      "And then I saw my mother. My sisters. After one year apart.",
      "I don't have the words for what that moment felt like: relief, joy, grief, and gratitude, all crashing into me at once. Seeing them alive in front of me was something I had not allowed myself to fully hope for.",
      "We rescued all 59 people. Three smugglers were arrested.",
      "I felt proud. Not only because I had gotten my own mother and sisters out, but because everyone else trapped there was in the exact same situation my family had been in. Some of them had already paid the smugglers everything they'd asked, and were still being held. The smugglers were demanding double, the same thing they had tried to do to us. Getting all 59 people out, with help from the officials and two friends who came with me to the house, felt like more than a rescue. It felt like proof that the smugglers couldn't keep doing this to people and walk away clean.",
      "• • •",
      "But the consequences came quickly.",
      "The smugglers were furious. They believed they had lost a significant amount of money because of the rescue and the arrests, and they blamed me directly. The threats started soon after: constant and unmistakable. Some threatened to kill me.",
      "I understood exactly what that meant. If they killed me, it would be over. But if they kidnapped me instead, they would demand a ransom, and I had nothing to give them. My father had spent almost eleven years as a construction worker in Malaysia, sweating through the heat, just to save enough for what we'd already paid smugglers to get this far. There was nothing left. I had no income of my own, and no legal way to earn one.",
      "My life contracted overnight. I stopped going to school. I barely left my room. I lived inside a fear I still can't fully put into words: knowing that people were searching for me, not knowing when or how they might find me.",
      "Eventually, with help from the Indonesian government, IOM, and UNHCR, my family and I were transferred from Pekanbaru to Jakarta in May 2024. The smugglers knew the faces of the two friends who had helped me that day too, so I asked officials to move them along with us, since they carried the same risk, I did. They agreed.",
      "Even now, three years later, that risk hasn't disappeared. The smugglers have long reach, connections with officials and with people in local communities, and money that lets them do almost anything. If they ever found me, I still wouldn't have a way to pay them off. I can't legally work here. My father is older now, and too sick to work himself. The fear stays, quieter than it once was, but never fully gone.",
      "I don't regret what I did. I would do it again. Those 59 people were human beings searching for safety and dignity. So was I, once. So is everyone on those boats.",
      "• • •",
      "Later in 2024, my father came home to us — something I had almost stopped believing could happen.",
      "After nearly 12 years of separation, across different countries, different detention centres, refugee camps, and dangerous sea crossings, my father was reunited with my mother, my sisters, and me.",
      "Seeing my father again after all of those time was beyond words. It was like watching a part of our family be put back together. But we all felt it: the empty space. The missing piece. My sister, still out there somewhere, or not. Still unknown.",
      "My mother still prays for her every day.",
      "• • •",
      "I am 20 years old and I have lived more than most people carry in a lifetime. This journey has taught me things that no classroom could: about what it means to stand beside vulnerable people when it is dangerous and inconvenient to do so. About what leadership actually is: not a title or a position, but a decision to take responsibility when someone has no one else. Sometimes it means speaking up when you're afraid. Sometimes it means protecting others when your own safety is at risk.",
      "Today, I continue serving my community in multiple roles. Over the years I have worked as a healthcare community interpreter, refugee representative, and community volunteer, supporting Rohingya refugees through communication, advocacy, and direct assistance. Currently, I work as an official interpreter and outreach volunteer with Yayasan Cita Wadah Swadaya (YCWS), an Indonesian faith-based humanitarian organization working in refugee protection, disaster response, and food security, serving as a language bridge between refugees and organizations including UNHCR. Through this role, I help refugees understand important information, communicate their concerns, and access the support and services they need. I also assist with outreach and community communication, working to ensure that vulnerable refugees are not left unheard or isolated simply because of a language barrier. Alongside this, I continue supporting refugee-led advocacy, research, and volunteer initiatives aimed at empowering Rohingya refugees and raising awareness about the realities displaced communities face every day. I want the world to understand something simple: refugees are not a category. They are not a crisis, a statistic, or a headline. Behind every story is a person, with dreams, fears, and people they love and have lost. That is why I tell this story now — not because it is easy, but because silence has never protected anyone in my family. Telling the truth, carefully and honestly, is the only tool I have ever had.",
      "My dream is to keep building something: for refugee youth, for my community, for a future where Rohingya people can live safely, access education, and rebuild their lives with their dignity intact.",
      "To refugee youth who might read this: after all the pain, the loss, the separation, the displacement, I still believe hope survives. I have seen it survive in my own family. Our stories matter, even the unfinished ones. We are not just our suffering. We are survivors and leaders, and we deserve the chance to become who we were always meant to be.",
      "My sister's name, Rofika, deserves to be remembered as well. Maybe one day she hears it.",
    ],
  },
  {
    id: "written-2",
    slug: "i-am-rohingya",
    title: "I am Rohingya",
    author: "Bilkis",
    format: "written",
    image: "/assets/karya/writen-karya-2.png",
    summary:
      "Bilkis invites us to see the world she dreamt of; one that is built on books and lights, not fears and endless nights.",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "Bilkis invites us to see the world she dreamt of; one that is built on books and lights, not fears and endless nights.",
    body: [
      "I am Rohingya, don't turn away,\nI have a story I want to say.\nI once had a home, a place to belong,\nNow I carry memories and stay strong.",
      "The world may see a refugee's face,\nBut I dream of freedom, not just a place.\nI dream of classrooms, books, and light,\nNot fear, not hunger, not endless nights.",
      "I do not ask for pity or fame,\nOnly dignity without shame.\nA chance to learn, a chance to grow and build a better future,\nTo show the world what I can know.",
      "One day my people will stand with pride,\nNo longer forced to run or hide.\nUntil that day, my hope will stay,\nI am Rohingya, and I won't fade away.",
      "Though storms may come and hope feels small,\nWe rise again after every fall.\nOur courage lives within each heart,\nNo force can tear our dreams apart.",
      "So hear our voices, loud and clear,\nWe all deserve a future in Arkhan.\nWith peace, with justice, hand in hand,\nWe'll build a brighter, happier land.\nWhich is our Golden Myanmar.",
    ],
  },
  {
    id: "written-3",
    slug: "hope-through-writing",
    title: "Hope Through Writing",
    author: "Sirajul Islam",
    format: "written",
    image: "/assets/karya/writen-karya-3.png",
    summary:
      "In a world that dehumanizes refugees, Sirajul found belonging and agency through the act of writing.",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "In a world that dehumanizes refugees, Sirajul found belonging and agency through the act of writing.",
    body: [
      "Writing has been my pastime since my childhood, but frankly speaking, I never thought I would become the poet and writer I am today, not in my wildest dreams. It was when I was at my lowest ebb that I was exposed to writing.",
      "In August 2017, when the Myanmar military blatantly carried out the so-called 'Clearance Operation', and burned down my home, I had to flee to Bangladesh where I found a bamboo-and-tarpaulin shelter in what is now the world's largest refugee camp largely referred to as an open-air prison.",
      "After becoming a refugee, I was no longer the person I was back in my hometown. I lost my dream of becoming a doctor and hope for a better future. At that time, I chose poetry as a tool for purging my fractured soul, and amplifying the voice of my marginalised people. Thereupon it has become my means for resilience, resistance and existence.",
      "Back in our homeland, we were herded into a ghetto-like existence and cowed into silence. Having had so much to speak out, we had to remain silent for the sake of survival. Silence was a practice for us because speaking up the truth means choosing death. From teenagers to elders, we were well informed of the necessity of silence against the persecution we endured.",
      "Now that we are herded into what is an open-air prison, what the world knows about us is that we are humanitarian recipients and dependent on humanitarian aid.",
      "It is very disgraceful to me that the world considers my people voiceless. I don't want the world to define us this way. We are people who can tell our own stories if and when the world listens to us. This has been my means for writing apart from consoling myself.",
      "Initially, I have started my writing with poetry. Later I started writing stories as well. Through writing, I have discovered hope that went up in smoke when my home was burned down and I had to flee.",
      "In my childhood, I dreamed of becoming a doctor. Now that I am a poet and writer, I feel like I am doing the best thing. Now, I don't regret that I couldn't be the doctor I once aspired to be. I am proud to shoulder this responsibility as a poet and writer for my people at a time when it matters the most. I simply believe that if I don't tell the stories of my people, who will? When I write, I feel my humanity and existence.",
      "In the world that denies treating me as a human being, it is through writing that I exist as a human being at least in a world I imagine.",
    ],
  },
  {
    id: "written-4",
    slug: "what-hope-means-to-me-written",
    title: "What Hope Means to Me",
    author: "Sawyedul Amin",
    format: "written",
    image: "/assets/karya/writen-karya-4.png",
    summary:
      "A fellow reflects on what keeps hope alive through the hardest days of displacement.",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "A fellow reflects on what keeps hope alive through the hardest days of displacement.",
    body: [
      "For a long time, I thought hope was simply waiting for better days. As a Rohingya refugee, my life has been shaped by displacement, uncertainty, and the pain of losing a homeland. I have witnessed violence, lived without citizenship, and grown up in a refugee camp where many dreams seem impossible. There were moments when hope felt distant, almost like a word that belonged to someone's story.",
      "But throughout this storytelling fellowship, I began to understand that hope is not something we find, it is something we create. One lesson that stayed with me was that our stories have power. Every time we choose to tell our truth, we refuse to let others define us only by our suffering. We are not just victims of persecution but we are students, teachers, writers, artists, leaders, and dreamers. Sharing our stories reminded me that even painful memories can become seeds of change when they are spoken with courage.",
      "Looking back, I realize that hope has changed for me. It is no longer about waiting for someone to rescue us or solve our problems. Hope is the decision to keep learning even when education is limited. It is speaking up for justice even when our voices are ignored. It is helping another young person believe in their future, even while my own future remains uncertain.",
      "As a rising storyteller, I have learned that healing does not mean forgetting our trauma. It means acknowledging it, honoring those we have lost, and allowing our experiences to inspire compassion instead of hatred. Every story shared during the fellowship reminded me that pain and hope can exist together. One does not erase the other.",
      "I dream of a future where every Rohingya student can access education without fear, where our identity is recognized with dignity and where we can return to our homeland in safety, freedom, and peace. I also dream of a future where the world knows us not only through headlines about crises but through our resilience, creativity and humanity.",
      "Today, hope means choosing to believe that every act of kindness, every lesson learned, and every story told has the power to change someone's heart. Even if change comes slowly, our voices matter.",
      "I cannot predict what tomorrow will bring but I know this, as long as we continue telling our stories and raising our voices with honesty, lifting one another through compassion, and refusing to surrender our dreams, hope will always find a way to survive.",
      "For me, hope is not waiting for darkness to disappear. Hope is becoming a light that helps others find their way. And as long as we continue to share our stories, support one another, and believe in a better tomorrow that light will never go out.",
    ],
  },
  {
    id: "written-5",
    slug: "what-does-hope-mean-to-me",
    title: "What Does Hope Mean To Me?",
    author: "Ata Ullah",
    format: "written",
    image: "/assets/karya/writen-karya-5.png",
    summary:
      "Another perspective on hope, home, and the future our fellows imagine for themselves.",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "Another perspective on hope, home, and the future our fellows imagine for themselves.",
    body: [
      "Hope is not a luxury I learned from books. Hope is what I saw in my mother's eyes when she divided a handful of rice between five children. Hope is what I felt when a stranger shared their last piece of bread with my family. Hope is what keeps me standing when everything around me falls.",
      "## Hope Before and Now",
      "When I first arrived in the camp, hope meant survival. It meant waking up alive. It meant finding clean water. It meant my family staying together another day. That was all I could imagine. Hope was small, like a single flame fighting against a strong wind.",
      "But through this fellowship, I learned that hope can grow. Hope is not just about surviving today; it is about believing that tomorrow can be different. Not easier, maybe, but different. Better in small ways. A child learning to read. A woman is starting a small shop. A story being told instead of being buried.",
      "## The Moment That Changed Everything",
      "In one of our sessions, we were asked to share a memory that stayed with us. I spoke about a night when I had nothing to eat. An elderly woman, a stranger, gave me a small banana. She had nothing too. But she gave anyway. That moment taught me that hope lives in giving, even when you have little. It lives in choosing kindness when you have every reason to be bitter.",
      "That session made me realize: I had been carrying that memory as pain. But that day, I began to carry it as strength. That woman did not just give me food, she gave me proof that humanity survives even in the darkest places. That is hope.",
      "## What Hope Looks Like Now",
      "Today, hope looks different. It is not just about survival anymore. It is about dignity. It is about learning to tell our stories in our own words. It is about a child walking to a learning center with a torn book under their arm, still smiling. It is about communities coming together, sharing what little they have, refusing to let each other fall.",
      "Hope is also in this fellowship. Sitting together, learning together, sharing pain and laughter, that is hope. Because when we tell our stories, we take back something that was stolen from us: our voice. Our truth.",
      "## A Hopeful Future",
      'I envision a future where Rohingya children do not ask, "Will we ever go home?" but instead ask, "What can we build today?" I envision a future where our stories are not just about suffering but about resilience, love, and dreams. I envision a future where our identity is not reduced to a refugee number, but honored as a community with history, culture, and hope.',
      "I do not know when justice will come. I do not know when we will return to our land. But I know this: as long as we remember who we are, as long as we hold onto each other, as long as we keep telling our stories, hope is alive. And hope, even in the smallest form, is powerful enough to carry us through another day.",
      "## Final Thought",
      "Hope is not pretending that everything is fine. Hope is looking at the ruins and still believing that flowers can grow. Hope is not waiting for rescue; it is rescuing each other. That is what hope means to me. And that is what I will carry forward, not just for myself, but for everyone who shares this journey with me.",
    ],
  },

  // Audio Stories
  {
    id: "audio-1",
    slug: "i-am-rohingya-audio",
    title: "I am Rohingya",
    author: "Bilkis",
    format: "audio",
    image: "/assets/karya/writen-karya-2.png",
    audio: "/assets/karya/i-am-rohingya.wav",
    bannerImage: "/assets/detail-hero.png",
    excerpt: "Listen to Bilkis narrate the world she dreamt of.",
    body: ["Artikel ini sedang disiapkan."],
  },

  // Visual Stories
  {
    id: "visual-1",
    slug: "tentang-kota-alienasi-dan-menangis-di-transjakarta",
    title: "Tentang Kota, Alienasi, dan Menangis di TransJakarta",
    format: "visual",
    date: "5 Juni 2026",
    image: "/assets/carimage-3.png",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "Menyusuri kota dan emosi yang hadir dalam perjalanan sehari-hari.",
    body: ["Artikel ini sedang disiapkan."],
  },
  {
    id: "visual-2",
    slug: "what-hope-means-to-me",
    title: "What Hope Means to Me",
    format: "visual",
    date: "23 Juli 2026",
    image: "/assets/carimage-1.png",
    bannerImage: "/assets/detail-hero.png",
    bannerCaption: "Photo credit: Roemah Inspirit",
    excerpt:
      "Pada akhir Februari hingga awal bulan Maret lalu, Roemah Inspirirt bersama dengan dua lembaga dari India Indonesia—PLUS dan KEHATI—mendapat kesempatan pergi ke Cape Town, Afrika Selatan untuk menghadiri pertemuan luring perdana dari inisiatif global Weaving Resilience.",
    body: [
      "Inisiatif ini bertujuan memperkuat dan menghubungkan organisasi serta gerakan masyarakat sipil dari belahan dunia Selatan. Berlandaskan pada tiga pilar dukungan: Institutional Resilience (Ketahanan Lembaga), Strategic Relevance (Relevansi Strategis), dan Holistic Well-Being (Kesejahteraan Holistik), Weaving Resilience mengumpulkan 34 lembaga dari belahan Selatan dunia untuk saling mengenal dan mendalami kerja satu sama lain.",
      "Kesan bahwa pertemuan tidak biasa-biasa saja sudah muncul sejak jam pertama pertemuan ini dilangsungkan. Roemah Inspirirt memimpin proses perkenalan awal menggunakan kartu-kartu pertanyaan yang diceritakan dalam kelompok kecil berisi dua, empat, dan enam orang. Metode perkenalan selanjutnya yang difasilitasi Pretahub dari Brazil menggunakan metode River of Life. Metode ini menarik semua peserta merefleksikan dan berbagi cerita perjalanan hidupnya sebagai aktivis dan perjalanan organisasi dalam merintis inisiatif Weaving Resilience di negara masing-masing.",
    ],
  },
  {
    id: "visual-3",
    slug: "merayakan-perempuan-yang-berdiri-di-periferi",
    title: "Merayakan Perempuan yang Berdiri di Periferi",
    format: "visual",
    date: "12 Juni 2026",
    image: "/assets/carimage-2.png",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "Cerita tentang perempuan, ruang pinggiran, dan keberanian untuk tetap berdiri.",
    body: ["Artikel ini sedang disiapkan."],
  },
];
