type EventData = {
  [key: string]: EventCard[];
};

export type EventCard = {
  title: string;
  date: string | Date;
  description: string;
  image: string;
};

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getSecondFriday(year: number, month: number) {
  let date = new Date(year, month, 1);

  let dayOfWeek = date.getDay();

  let firstFriday = dayOfWeek <= 5 ? 5 - dayOfWeek + 1 : 5 - dayOfWeek + 8;

  let secondFriday = firstFriday + 7;

  return `Friday ${months[month]} ${secondFriday}, ${year} `;
}

let secondFriday = getSecondFriday(currentYear, currentMonth);

export const eventData: EventData = {
  monthly: [
    {
      title: "Wonderful Night Vigil",
      date: secondFriday,
      description:
        "Experience heartfelt worship and fervent prayers at our monthly night vigil, held on the second Friday of each month.",
      image: "/assets/images/wonderful-night.jpg",
    },
  ],
  quarterly: [
    {
      title: "Consume my battle",
      date: "March 31, 2024",
      description:
        "Join us for a powerful 3-day event filled with prayer, worship, and inspiring messages to empower you in your spiritual journey.",
      image: "/assets/images/consume-my-battle.jpeg",
    },
  ],
};
