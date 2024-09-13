import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import craigCardon from "@/public/images/endorsements/craig-cardon.jpeg";
import tylerJarvis from "@/public/images/endorsements/tyler-jarvis.jpeg";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Craig Cardon",
    designation: "IT Architect @ BYU Student Life Technology",
    image: craigCardon,
    content: `"Ben has been a most valued and outstanding employee. He is well organized and efficient, able to accomplish a lot in the short blocks of time that students typically work. He is also very good at analyzing business processes and determining an appropriate work flow. He has also been instrumental in training other employees on the Mendix platform. He works well with others and gets along with everyone in the department. His ability to balance work and school has been impressive and he is often sharing the knowledge he gains to help others. In the rare cases he has made mistakes he is quick to acknowledge them and work to remediate the situtation. \n
    \n
    Benjamin will be a tremendous asset to any organization. He is a true professional and will be able to quickly add value to any endeavor. It is my pleasure to give him my recommendation. If you have any questions please contact me." \n
    \n 
    See the full letter of recommendation on the featured section of my LinkedIn profile`,
  },
  {
    id: 2,
    name: "Tyler Jarvis, PhD",
    designation: "Director and Co-Founder @ BYU ACME Program",
    image: tylerJarvis,
    content: `"Ben is professional and efficient at finding out what we need, and then he executes it promptly and well. He has also come up with a lot of great ideas for improving our website--not just its appearance, but also its effectiveness at meeting the neds of our users. Finally, he is fast at learning new things: he quickly mastered the practically-incomprehensible web development platform that our university requires us to use, despite its very counterintuitive interfaces. I really wish we could keep him, but like all students, he'll soon graduate and leave us. You definitely should hire him."`,
  },
];
