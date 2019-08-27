let rev1 = 'Very helpful as always. Polite, work to solve the problem quickly. Have never had a problem with customer service and have mentioned the good service on many occasions.';
let rev2 = `I've only been using Joomag for a few weeks, but I am very impressed by your on line support. Everyone has been helpful and quick to respond. Great job guys!`;
let rev3 = `Just fantastic customer service. In my work experience, I felt customer service was one of the most important aspects of any company. Poor or impersonal customer service can taint a company's image. Great customer service encourages you to do more business with a company. I am thrilled with the customer service I experienced with your company.`;
let rev4 = `This is my first experience with joomag and it has been OUTSTANDING/EXCELLENT every step of the way no matter who i speak to! I'm looking forward to a long partnership! Cheers. `;
let rev5 = `I've been using Joomag for the past 3-4 years and I always felt like that the people there are my friends due to their fast, friendly, and useful customer support. Their service (Online Magazine) is very good and where it lacks something they are usually aware of and trying to improve. I provided them with a lot of feedback over the years and they implemented some of it already in their service. Therefore, what I like the best is their customer support - in all honesty, I never encountered any customer support better than this one.`;
let rev6 = `I selected Joomag over many other similar platforms because of the excellent support received during a trial period. The product is intuitive, and not prone to crashing using heavy use. The additional of the CRM was an added bonus that has allowed us to communicate with our readership base at a consistently high level. This can be verified by the lack of unsubscribers we have seen.
            The level of support we have received has been outstanding. The limited number of challenges we have encountered have been dealt with quickly and professionally. The support team have even adopted and submitted a number of end-user enhancements we have proposed.`;
let rev7 = `I love the old fashion customer care. Which makes me happy to have a company that is willing to work as a team. Thank you!`;
let rev8 =`I am terribly impressed by your customer care. What with your online help, tutors and sincere desire to be of help to your people, you are really great.`;


let names = ['- Encaustic Arts Magazine','- My French Country Home Magazine','Randy Johnson','Robert Jansons','- Tio Trom','- Andy Round (iHerp Asuralia)','- Yolanda McIntosh','- Purushotham Ainapur (President HKE Society)'];
let revs = [rev1,rev2,rev3,rev4,rev5,rev6,rev7,rev8];

let i =0;

function reviews (directioon) {
    if (directioon === 'next') {
        i++;
        if(i === revs.length){
            i = 0;
        }
    }else {
        i--;
        if(i < 0) {
            i = revs.length-1;

        }
    }
     document.getElementById('here').innerHTML = revs[i];
    //  document.getElementById('author').innerHTML = names[i];
} 
