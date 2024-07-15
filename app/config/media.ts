export type Person = {
  image: string;
  name: string;
  description?: string;
};

export const founders: Person[] = [
  {
    image: "/assets/images/welcome-to-church.jpg",
    name: "Late Apostle I.O. Bankole",
    description: "Founder",
  },
  {
    image: "/assets/images/love-of-God.jpeg",
    name: "Rev'd Prophetess T.O. Bankole",
    description: "General Overseer / Co-Founder",
  },
];

export const pastoralTeam: Person[] = [
  {
    image: "/assets/images/oladeinde.png",
    name: "Pastor S.A. Oladeinde",
    description: "Senior Pastor",
  },
  {
    image: "/assets/images/welcome-to-church.jpg",
    name: "Pastor Folarin",
    description: "Pastor-in-charge Alakuko Branch",
  },
  {
    image: "/assets/images/love-of-God.jpeg",
    name: "Pastor M.S. Aruwayo",
    description: "Senior Pastor",
  },
  {
    image: "/assets/images/join-us-for-worship.jpg",
    name: "Pastor Emmanuel Ogunleye",
    description: "English Service Co-Ordinator",
  },
  {
    image: "/assets/images/love-of-God.jpeg",
    name: "Pst Mrs. Funmilayo Ogunleye",
    description: "Choir Mistress",
  },
  {
    image: "/assets/images/welcome-to-church.jpg",
    name: "Deacon Oriade",
    description: "Pastor-in-charge Camp Ground",
  },
];

export const hodTeam: Person[] = [
  {
    image: "/assets/images/welcome-to-church.jpg",
    name: "Deacon Odeyemi",
    description: "Usher",
  },
  {
    image: "/assets/images/love-of-God.jpeg",
    name: "Pst Mrs. B. Ogunleye",
    description: "Choir",
  },
  {
    image: "/assets/images/join-us-for-worship.jpg",
    name: "Bro. Abiodun Eluyera",
    description: "Technical/Media",
  },
];

export const departmentalTeam: Person[] = [
  { image: "/assets/images/join-us-for-worship.jpg", name: "Usher" },
  { image: "/assets/images/welcome-to-church.jpg", name: "Technical" },
  { image: "/assets/images/love-of-God.jpeg", name: "Youth" },
  { image: "/assets/images/welcome-to-church.jpg", name: "Choir" },
];

export const faqs = [
  {
    question: "What time are the Sunday services?",
    answer:
      "Our Sunday services start at 7:00 AM with the English Service, followed by Sunday School at 9:00 AM, and the Yoruba Service at 10:00 AM.",
  },
  {
    question: "Where is the church located?",
    answer:
      "We are located at 1, Church Street, Off Old Olowora Road, Isheri, Lagos.",
  },
  {
    question: "Do you have mid-week services?",
    answer:
      "Yes, we have Bible Study on Tuesday at 6:00 PM and Divine Healing service on Thursday at 6:00 PM.",
  },
  {
    question: "How can I get involved in church activities?",
    answer:
      "You can get involved by joining one of our many departments, such as the Ushering Department, Choir, or Technical/Media Team. Please speak to one of our pastors for more information.",
  },
  {
    question: "Do you offer online services?",
    answer:
      "Yes, we stream our services live on our YouTube channel. You can find the link on our website.",
  },
];
