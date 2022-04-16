class JobListing {
  constructor(
    employer: string,
    title: string,
    startDate: Date,
    endDate: Date,
    responsiblities: JobResponsibility[]
  ) {}
}
enum JobResponsibilityType {
  STANDARD,
  BULLET_LIST,
}
class JobResponsibility {
  constructor(type: JobResponsibilityType, desc: string | string[]) {}
}

const jobHistory: JobListing[] = [
  {
    employer: 'TAMU-SA University Police Dept.',
    title: 'Student Worker',
    startDate: new Date(2017, 9, 1),
    endDate: new Date(2022, 1, 30),
    responsiblities: [
      {
        type: JobResponsibilityType.STANDARD,
        desc: 'While working for TAMU-SA UPD I carried out the following duties:',
      },
      {
        type: JobResponsibilityType.BULLET_LIST,
        desc: [
          'Parking enforcement.',
          'General security.',
          'Public assistance (car unlocks, battery boosts, tire changes, etc.).',
          'Door unlocks.',
        ],
      },
      {
        type: JobResponsibilityType.STANDARD,
        desc: 'I also was assigned to assist the Risk Manager during the summer of 2019 with the following:',
      },
      {
        type: JobResponsibilityType.BULLET_LIST,
        desc: [
          'Inventory of all chemicals in university laboratories.',
          'Inspection of all university laboratories.',
          'Creation of a new online inspection form for lab inspections.',
          'Project correspondence.',
        ],
      },
      {
        type: JobResponsibilityType.STANDARD,
        desc: 'Furthmore, during the COVID-19 pandemic I administered rapid tests for the faculty, staff, and residents on the campus.',
      },
    ],
  },
  {
    employer: 'Dollar General',
    title: 'Lead Sales Associate',
    startDate: new Date(2020, 6, 29),
    endDate: new Date(2020, 7, 27),
    responsiblities: [
      {
        type: JobResponsibilityType.STANDARD,
        desc: 'While working for Dollar General, I carried out the following duties / tasks:',
      },
      {
        type: JobResponsibilityType.BULLET_LIST,
        desc: [
          'General cashier functions.',
          'General stocker functions.',
          "Counting of both my till, as well as other employees'.",
          'Counting of the change fund and deposits at the end of the night.',
          'Served as a keyholder for the store and the register.',
          'Closed the store.',
        ],
      },
    ],
  },
  {
    employer: 'Big State Electric',
    title: 'Apprentice Electrician',
    startDate: new Date(2021, 5, 15),
    endDate: new Date(2021, 8, 2),
    responsiblities: [
      {
        type: JobResponsibilityType.STANDARD,
        desc: 'While working for Big State as an apprentice in the IBEW Apprenticeship Program, I carried out the following duties / tasks:',
      },
      {
        type: JobResponsibilityType.BULLET_LIST,
        desc: [
          'Building racks of EMT based off of a spec sheet.',
          'Bending tubing for offsets, kicks, and 90s.',
          'Teaching other apprentices how to assemble builds based off of the spec sheets and bend the tubing.',
          'General pre-fabrication work.',
        ],
      },
    ],
  },
];

export {
  JobListing,
  JobResponsibility,
  JobResponsibilityType,
  jobHistory as JOB_HISTORY,
};
